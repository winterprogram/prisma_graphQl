import * as TypeGraphQL from "type-graphql";

export enum Login {
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
  EMAIL = "EMAIL"
}
TypeGraphQL.registerEnumType(Login, {
  name: "Login",
  description: undefined,
});
