import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateKycArgs } from "./args/CreateKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class CreateKycResolver {
  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: false
  })
  async createKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateKycArgs): Promise<Kyc> {
    return getPrismaFromContext(ctx).kyc.create(args);
  }
}
