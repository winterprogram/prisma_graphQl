import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCreateWithoutAccountInput } from "../inputs/KycCreateWithoutAccountInput";
import { KycUpdateWithoutAccountInput } from "../inputs/KycUpdateWithoutAccountInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycUpsertWithoutAccountInput {
  @TypeGraphQL.Field(_type => KycUpdateWithoutAccountInput, {
    nullable: false
  })
  update!: KycUpdateWithoutAccountInput;

  @TypeGraphQL.Field(_type => KycCreateWithoutAccountInput, {
    nullable: false
  })
  create!: KycCreateWithoutAccountInput;
}
