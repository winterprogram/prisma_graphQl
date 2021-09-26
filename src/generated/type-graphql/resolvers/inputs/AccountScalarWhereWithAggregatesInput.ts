import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLoginNullableWithAggregatesFilter } from "../inputs/EnumLoginNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  password?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  pin?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  dob?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLoginNullableWithAggregatesFilter, {
    nullable: true
  })
  loginType?: EnumLoginNullableWithAggregatesFilter | undefined;
}
