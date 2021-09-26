import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutUserInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutUserInput, {
    nullable: false
  })
  create!: AccountCreateWithoutUserInput;
}
