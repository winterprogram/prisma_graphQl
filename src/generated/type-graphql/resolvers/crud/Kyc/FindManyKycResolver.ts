import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyKycArgs } from "./args/FindManyKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class FindManyKycResolver {
  @TypeGraphQL.Query(_returns => [Kyc], {
    nullable: false
  })
  async kycs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyKycArgs): Promise<Kyc[]> {
    return getPrismaFromContext(ctx).kyc.findMany(args);
  }
}
