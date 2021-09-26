import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteKycArgs } from "./args/DeleteKycArgs";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class DeleteKycResolver {
  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: true
  })
  async deleteKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.delete(args);
  }
}
