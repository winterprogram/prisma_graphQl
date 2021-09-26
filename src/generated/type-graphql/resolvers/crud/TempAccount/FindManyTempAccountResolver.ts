import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTempAccountArgs } from "./args/FindManyTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class FindManyTempAccountResolver {
  @TypeGraphQL.Query(_returns => [TempAccount], {
    nullable: false
  })
  async tempAccounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTempAccountArgs): Promise<TempAccount[]> {
    return getPrismaFromContext(ctx).tempAccount.findMany(args);
  }
}
