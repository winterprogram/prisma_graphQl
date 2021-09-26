import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";
import { Account } from "../../../models/Account";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Account)
export class UpsertAccountResolver {
  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: false
  })
  async upsertAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAccountArgs): Promise<Account> {
    return getPrismaFromContext(ctx).account.upsert(args);
  }
}
