import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTempAccountArgs } from "./args/DeleteTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class DeleteTempAccountResolver {
  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: true
  })
  async deleteTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.delete(args);
  }
}
