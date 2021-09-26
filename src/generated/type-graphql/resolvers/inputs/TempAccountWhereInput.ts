import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TempAccountWhereInput {
  @TypeGraphQL.Field(_type => [TempAccountWhereInput], {
    nullable: true
  })
  AND?: TempAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TempAccountWhereInput], {
    nullable: true
  })
  OR?: TempAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TempAccountWhereInput], {
    nullable: true
  })
  NOT?: TempAccountWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  otp?: IntNullableFilter | undefined;
}
