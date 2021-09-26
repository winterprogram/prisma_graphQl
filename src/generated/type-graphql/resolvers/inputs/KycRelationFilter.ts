import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycWhereInput } from "../inputs/KycWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycRelationFilter {
  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  is?: KycWhereInput | undefined;

  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  isNot?: KycWhereInput | undefined;
}
