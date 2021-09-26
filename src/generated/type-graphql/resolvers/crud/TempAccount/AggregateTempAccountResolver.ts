import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTempAccountArgs } from "./args/AggregateTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { AggregateTempAccount } from "../../outputs/AggregateTempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class AggregateTempAccountResolver {
  @TypeGraphQL.Query(_returns => AggregateTempAccount, {
    nullable: false
  })
  async aggregateTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTempAccountArgs): Promise<AggregateTempAccount> {
    return getPrismaFromContext(ctx).tempAccount.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
