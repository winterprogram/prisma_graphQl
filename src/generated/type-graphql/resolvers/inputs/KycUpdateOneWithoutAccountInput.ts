import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCreateOrConnectWithoutAccountInput } from "../inputs/KycCreateOrConnectWithoutAccountInput";
import { KycCreateWithoutAccountInput } from "../inputs/KycCreateWithoutAccountInput";
import { KycUpdateWithoutAccountInput } from "../inputs/KycUpdateWithoutAccountInput";
import { KycUpsertWithoutAccountInput } from "../inputs/KycUpsertWithoutAccountInput";
import { KycWhereUniqueInput } from "../inputs/KycWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycUpdateOneWithoutAccountInput {
  @TypeGraphQL.Field(_type => KycCreateWithoutAccountInput, {
    nullable: true
  })
  create?: KycCreateWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycCreateOrConnectWithoutAccountInput, {
    nullable: true
  })
  connectOrCreate?: KycCreateOrConnectWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycUpsertWithoutAccountInput, {
    nullable: true
  })
  upsert?: KycUpsertWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: true
  })
  connect?: KycWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => KycUpdateWithoutAccountInput, {
    nullable: true
  })
  update?: KycUpdateWithoutAccountInput | undefined;
}
