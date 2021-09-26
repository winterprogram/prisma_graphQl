import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAccountInput } from "../inputs/UserCreateWithoutAccountInput";
import { UserUpdateWithoutAccountInput } from "../inputs/UserUpdateWithoutAccountInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutAccountInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAccountInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAccountInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAccountInput, {
    nullable: false
  })
  create!: UserCreateWithoutAccountInput;
}
