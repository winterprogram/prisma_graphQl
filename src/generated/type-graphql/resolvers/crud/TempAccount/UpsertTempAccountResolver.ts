import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTempAccountArgs } from "./args/UpsertTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class UpsertTempAccountResolver {
  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: false
  })
  async upsertTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTempAccountArgs): Promise<TempAccount> {
    return getPrismaFromContext(ctx).tempAccount.upsert(args);
  }
}
