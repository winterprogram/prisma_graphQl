import * as TypeGraphQL from "type-graphql";

export enum Status {
  VERIFIED = "VERIFIED",
  UNVERIFIED = "UNVERIFIED",
  CREATED = "CREATED"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
