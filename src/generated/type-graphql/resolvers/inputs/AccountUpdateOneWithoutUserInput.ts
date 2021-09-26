import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountUpsertWithoutUserInput } from "../inputs/AccountUpsertWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutUserInput, {
    nullable: true
  })
  create?: AccountCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutUserInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutUserInput | undefined;
}
