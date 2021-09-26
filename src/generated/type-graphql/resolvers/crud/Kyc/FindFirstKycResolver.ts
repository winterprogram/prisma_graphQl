import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstKycArgs } from "./args/FindFirstKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class FindFirstKycResolver {
  @TypeGraphQL.Query(_returns => Kyc, {
    nullable: true
  })
  async findFirstKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.findFirst(args);
  }
}
