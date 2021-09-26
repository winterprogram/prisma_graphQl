import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTempAccountArgs } from "./args/UpdateTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class UpdateTempAccountResolver {
  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: true
  })
  async updateTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.update(args);
  }
}
