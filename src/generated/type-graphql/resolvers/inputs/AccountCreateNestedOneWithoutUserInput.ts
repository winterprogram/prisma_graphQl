import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutUserInput, {
    nullable: true
  })
  create?: AccountCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
