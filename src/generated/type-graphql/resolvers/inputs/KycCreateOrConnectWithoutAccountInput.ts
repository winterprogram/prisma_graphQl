import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCreateWithoutAccountInput } from "../inputs/KycCreateWithoutAccountInput";
import { KycWhereUniqueInput } from "../inputs/KycWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycCreateOrConnectWithoutAccountInput {
  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: false
  })
  where!: KycWhereUniqueInput;

  @TypeGraphQL.Field(_type => KycCreateWithoutAccountInput, {
    nullable: false
  })
  create!: KycCreateWithoutAccountInput;
}
