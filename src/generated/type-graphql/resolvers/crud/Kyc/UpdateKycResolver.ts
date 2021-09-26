import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateKycArgs } from "./args/UpdateKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class UpdateKycResolver {
  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: true
  })
  async updateKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.update(args);
  }
}
