import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueKycArgs } from "./args/FindUniqueKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class FindUniqueKycResolver {
  @TypeGraphQL.Query(_returns => Kyc, {
    nullable: true
  })
  async kyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.findUnique(args);
  }
}
