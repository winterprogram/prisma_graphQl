import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCreateNestedOneWithoutAccountInput } from "../inputs/KycCreateNestedOneWithoutAccountInput";
import { UserCreateNestedOneWithoutAccountInput } from "../inputs/UserCreateNestedOneWithoutAccountInput";
import { Login } from "../../enums/Login";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pin?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob?: string | undefined;

  @TypeGraphQL.Field(_type => Login, {
    nullable: true
  })
  loginType?: "GOOGLE" | "APPLE" | "EMAIL" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAccountInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycCreateNestedOneWithoutAccountInput, {
    nullable: true
  })
  kyc?: KycCreateNestedOneWithoutAccountInput | undefined;
}
