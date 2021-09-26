import { AuthenticationError } from 'apollo-server-koa';
import { AuthChecker } from 'type-graphql';
import { Context } from './prisma';

const authChecker: AuthChecker<Context> = ({ context }, roles): boolean => {
  const { accountId, role } = context;
  if (!accountId) {
    throw new AuthenticationError('Not authenticated');
  }

  if (roles.length === 0) {
    return Boolean(accountId);
  }

  if (!roles.includes(role)) {
    throw new AuthenticationError(`${role} is not allowed for this method`);
  }

  throw new AuthenticationError('Not authenticated');
};

export default authChecker;
