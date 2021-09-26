import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTempAccountArgs } from "./args/FindFirstTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class FindFirstTempAccountResolver {
  @TypeGraphQL.Query(_returns => TempAccount, {
    nullable: true
  })
  async findFirstTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.findFirst(args);
  }
}
