import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAccountInput } from "../inputs/UserCreateOrConnectWithoutAccountInput";
import { UserCreateWithoutAccountInput } from "../inputs/UserCreateWithoutAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutAccountInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAccountInput, {
    nullable: true
  })
  create?: UserCreateWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAccountInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
