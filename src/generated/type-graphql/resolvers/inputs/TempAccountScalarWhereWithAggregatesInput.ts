import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TempAccountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TempAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TempAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TempAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TempAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TempAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TempAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  phoneNumber?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  otp?: IntNullableWithAggregatesFilter | undefined;
}
