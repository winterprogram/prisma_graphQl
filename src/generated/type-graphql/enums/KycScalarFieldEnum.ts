import * as TypeGraphQL from "type-graphql";

export enum KycScalarFieldEnum {
  id = "id",
  panNumber = "panNumber",
  uidNumber = "uidNumber",
  accountId = "accountId"
}
TypeGraphQL.registerEnumType(KycScalarFieldEnum, {
  name: "KycScalarFieldEnum",
  description: undefined,
});
