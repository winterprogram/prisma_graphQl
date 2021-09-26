import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateKycArgs } from "./args/AggregateKycArgs";
import { Kyc } from "../../../models/Kyc";
import { AggregateKyc } from "../../outputs/AggregateKyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class AggregateKycResolver {
  @TypeGraphQL.Query(_returns => AggregateKyc, {
    nullable: false
  })
  async aggregateKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateKycArgs): Promise<AggregateKyc> {
    return getPrismaFromContext(ctx).kyc.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
