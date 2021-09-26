import * as TypeGraphQL from "type-graphql";

export enum AccountScalarFieldEnum {
  id = "id",
  email = "email",
  phoneNumber = "phoneNumber",
  password = "password",
  pin = "pin",
  dob = "dob",
  loginType = "loginType"
}
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: "AccountScalarFieldEnum",
  description: undefined,
});
