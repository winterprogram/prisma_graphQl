import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLoginNullableFilter } from "../inputs/NestedEnumLoginNullableFilter";
import { Login } from "../../enums/Login";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumLoginNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumLoginNullableFilter, {
    nullable: true
  })
  not?: NestedEnumLoginNullableFilter | undefined;
}
