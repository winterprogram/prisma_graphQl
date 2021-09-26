import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTempAccountArgs } from "./args/FindUniqueTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class FindUniqueTempAccountResolver {
  @TypeGraphQL.Query(_returns => TempAccount, {
    nullable: true
  })
  async tempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.findUnique(args);
  }
}
