import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
import { Login } from "../../enums/Login";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AccountGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pin!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob!: string | null;

  @TypeGraphQL.Field(_type => Login, {
    nullable: true
  })
  loginType!: "GOOGLE" | "APPLE" | "EMAIL" | null;

  @TypeGraphQL.Field(_type => AccountCountAggregate, {
    nullable: true
  })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountAvgAggregate, {
    nullable: true
  })
  _avg!: AccountAvgAggregate | null;

  @TypeGraphQL.Field(_type => AccountSumAggregate, {
    nullable: true
  })
  _sum!: AccountSumAggregate | null;

  @TypeGraphQL.Field(_type => AccountMinAggregate, {
    nullable: true
  })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountMaxAggregate, {
    nullable: true
  })
  _max!: AccountMaxAggregate | null;
}
