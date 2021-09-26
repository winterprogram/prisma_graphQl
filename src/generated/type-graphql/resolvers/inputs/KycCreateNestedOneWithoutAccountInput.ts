import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCreateOrConnectWithoutAccountInput } from "../inputs/KycCreateOrConnectWithoutAccountInput";
import { KycCreateWithoutAccountInput } from "../inputs/KycCreateWithoutAccountInput";
import { KycWhereUniqueInput } from "../inputs/KycWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycCreateNestedOneWithoutAccountInput {
  @TypeGraphQL.Field(_type => KycCreateWithoutAccountInput, {
    nullable: true
  })
  create?: KycCreateWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycCreateOrConnectWithoutAccountInput, {
    nullable: true
  })
  connectOrCreate?: KycCreateOrConnectWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: true
  })
  connect?: KycWhereUniqueInput | undefined;
}
