import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutKycInput } from "../inputs/AccountCreateOrConnectWithoutKycInput";
import { AccountCreateWithoutKycInput } from "../inputs/AccountCreateWithoutKycInput";
import { AccountUpdateWithoutKycInput } from "../inputs/AccountUpdateWithoutKycInput";
import { AccountUpsertWithoutKycInput } from "../inputs/AccountUpsertWithoutKycInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountUpdateOneWithoutKycInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutKycInput, {
    nullable: true
  })
  create?: AccountCreateWithoutKycInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutKycInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutKycInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutKycInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutKycInput | undefined;

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

  @TypeGraphQL.Field(_type => AccountUpdateWithoutKycInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutKycInput | undefined;
}
