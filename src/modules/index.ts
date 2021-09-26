import path from 'path';
import { buildSchema, BuildSchemaOptions } from 'type-graphql';
import authChecker from '../utils/auth-checker';
import { ForgotPasswordResolver } from './Account/resolvers/forgot.resolver';
import TestAccountSignupResolver, {
  AccountResolver,
  KycResolver,
  UserResolver,
} from './Account/resolvers/signup.resolver';

const options: BuildSchemaOptions = {
  resolvers: [
    TestAccountSignupResolver,
    UserResolver,
    AccountResolver,
    KycResolver,
    ForgotPasswordResolver
  ],
  authChecker,
  emitSchemaFile: path.resolve(__dirname, '../generated/schema.gql'),
  validate: false,
};

export default async () => {
  const schema = await buildSchema(options);
  return schema;
};
