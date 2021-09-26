import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTempAccountArgs } from "./args/GroupByTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { TempAccountGroupBy } from "../../outputs/TempAccountGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class GroupByTempAccountResolver {
  @TypeGraphQL.Query(_returns => [TempAccountGroupBy], {
    nullable: false
  })
  async groupByTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTempAccountArgs): Promise<TempAccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tempAccount.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
