import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLoginNullableFilter } from "../inputs/EnumLoginNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { KycRelationFilter } from "../inputs/KycRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountWhereInput {
  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  AND?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  OR?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  NOT?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phoneNumber?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  pin?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  dob?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLoginNullableFilter, {
    nullable: true
  })
  loginType?: EnumLoginNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => KycRelationFilter, {
    nullable: true
  })
  kyc?: KycRelationFilter | undefined;
}
