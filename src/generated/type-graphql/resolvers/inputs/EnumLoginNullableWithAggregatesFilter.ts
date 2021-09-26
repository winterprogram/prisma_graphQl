import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLoginNullableFilter } from "../inputs/NestedEnumLoginNullableFilter";
import { NestedEnumLoginNullableWithAggregatesFilter } from "../inputs/NestedEnumLoginNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Login } from "../../enums/Login";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumLoginNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Login, {
    nullable: true
  })
  equals?: "GOOGLE" | "APPLE" | "EMAIL" | undefined;

  @TypeGraphQL.Field(_type => [Login], {
    nullable: true
  })
  in?: Array<"GOOGLE" | "APPLE" | "EMAIL"> | undefined;

  @TypeGraphQL.Field(_type => [Login], {
    nullable: true
  })
  notIn?: Array<"GOOGLE" | "APPLE" | "EMAIL"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLoginNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumLoginNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLoginNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumLoginNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLoginNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumLoginNullableFilter | undefined;
}
