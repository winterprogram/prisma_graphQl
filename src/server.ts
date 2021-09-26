import { ApolloServer, AuthenticationError } from 'apollo-server-koa';
import Koa from 'koa';
import { colorConsole } from 'tracer';
import { verify } from 'jsonwebtoken';
import prisma, { Context, UserPayload } from './utils/prisma';
import createSchema from './modules';

export const logger = colorConsole();
export default class Server {
  private server: Koa;

  async init(): Promise<void> {
    // Connect Prisma
    await prisma.$connect();

    // Initialize Koa
    this.server = new Koa();

    // Initialize GraphQL
    await this.setupGraphQl();
  }

  async setupGraphQl(): Promise<void> {
    // Initialize Apollo
    const apolloServer = new ApolloServer({
      schema: await createSchema(),
      context: (context: Koa.Context): Context => {
        const {
          ctx: {
            request: {
              header: { authorization: token },
            },
          },
        } = context;
        try {
          if (token && token.startsWith('Bearer ')) {
            const { accountId, userId, role } = verify(
              token.split(' ')[1],
              process.env.SECRET || '',
            ) as UserPayload;
            return {
              prisma,
              accountId,
              userId,
              role,
            };
          }
          return { prisma };
        } catch (error) {
          switch (error.name) {
            case 'TokenExpiredError': {
              throw new AuthenticationError('Token expired');
            }
            case 'JsonWebTokenError': {
              throw new AuthenticationError('Invalid token');
            }
            case 'NotBeforeError': {
              throw new AuthenticationError('Token not yet active');
            }
            default: {
              throw new Error(error);
            }
          }
        }
      },
    });

    // Start Apollo server
    await apolloServer.start();

    // Apply Koa
    apolloServer.applyMiddleware({
      app: this.server,
      path: '/api/graphql',
    });
  }

  startApp(): void {
    this.server
      .listen(process.env.PORT, () => {
        logger.info('Server started on:', {
          port: process.env.PORT,
        });
      })
      .on('error', (error) => {
        logger.error(error);
      });
  }
}
