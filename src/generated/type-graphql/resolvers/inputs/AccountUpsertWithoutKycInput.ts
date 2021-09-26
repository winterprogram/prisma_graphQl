import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutKycInput } from "../inputs/AccountCreateWithoutKycInput";
import { AccountUpdateWithoutKycInput } from "../inputs/AccountUpdateWithoutKycInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountUpsertWithoutKycInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutKycInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutKycInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutKycInput, {
    nullable: false
  })
  create!: AccountCreateWithoutKycInput;
}
