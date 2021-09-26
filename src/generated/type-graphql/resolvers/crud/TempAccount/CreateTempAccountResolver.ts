import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTempAccountArgs } from "./args/CreateTempAccountArgs";
import { TempAccount } from "../../../models/TempAccount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TempAccount)
export class CreateTempAccountResolver {
  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: false
  })
  async createTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTempAccountArgs): Promise<TempAccount> {
    return getPrismaFromContext(ctx).tempAccount.create(args);
  }
}
