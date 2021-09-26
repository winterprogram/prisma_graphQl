import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { Account } from "../../../models/Account";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Account)
export class CreateAccountResolver {
  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: false
  })
  async createAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateAccountArgs): Promise<Account> {
    return getPrismaFromContext(ctx).account.create(args);
  }
}
