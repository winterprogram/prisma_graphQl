import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutKycInput } from "../inputs/AccountCreateNestedOneWithoutKycInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  panNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uidNumber!: string;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutKycInput, {
    nullable: true
  })
  account?: AccountCreateNestedOneWithoutKycInput | undefined;
}
