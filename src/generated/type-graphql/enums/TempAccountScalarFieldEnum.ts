import * as TypeGraphQL from "type-graphql";

export enum TempAccountScalarFieldEnum {
  id = "id",
  email = "email",
  phoneNumber = "phoneNumber",
  otp = "otp"
}
TypeGraphQL.registerEnumType(TempAccountScalarFieldEnum, {
  name: "TempAccountScalarFieldEnum",
  description: undefined,
});
