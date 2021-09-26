import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertKycArgs } from "./args/UpsertKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class UpsertKycResolver {
  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: false
  })
  async upsertKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertKycArgs): Promise<Kyc> {
    return getPrismaFromContext(ctx).kyc.upsert(args);
  }
}
