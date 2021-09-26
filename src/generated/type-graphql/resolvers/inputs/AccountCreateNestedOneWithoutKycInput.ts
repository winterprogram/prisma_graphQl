import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutKycInput } from "../inputs/AccountCreateOrConnectWithoutKycInput";
import { AccountCreateWithoutKycInput } from "../inputs/AccountCreateWithoutKycInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountCreateNestedOneWithoutKycInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutKycInput, {
    nullable: true
  })
  create?: AccountCreateWithoutKycInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutKycInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutKycInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
