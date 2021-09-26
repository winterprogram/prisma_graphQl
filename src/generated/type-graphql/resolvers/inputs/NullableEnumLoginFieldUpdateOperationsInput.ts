import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Login } from "../../enums/Login";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NullableEnumLoginFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Login, {
    nullable: true
  })
  set?: "GOOGLE" | "APPLE" | "EMAIL" | undefined;
}
