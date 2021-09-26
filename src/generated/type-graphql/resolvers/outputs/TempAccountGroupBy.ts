import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TempAccountAvgAggregate } from "../outputs/TempAccountAvgAggregate";
import { TempAccountCountAggregate } from "../outputs/TempAccountCountAggregate";
import { TempAccountMaxAggregate } from "../outputs/TempAccountMaxAggregate";
import { TempAccountMinAggregate } from "../outputs/TempAccountMinAggregate";
import { TempAccountSumAggregate } from "../outputs/TempAccountSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TempAccountGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  otp!: number | null;

  @TypeGraphQL.Field(_type => TempAccountCountAggregate, {
    nullable: true
  })
  _count!: TempAccountCountAggregate | null;

  @TypeGraphQL.Field(_type => TempAccountAvgAggregate, {
    nullable: true
  })
  _avg!: TempAccountAvgAggregate | null;

  @TypeGraphQL.Field(_type => TempAccountSumAggregate, {
    nullable: true
  })
  _sum!: TempAccountSumAggregate | null;

  @TypeGraphQL.Field(_type => TempAccountMinAggregate, {
    nullable: true
  })
  _min!: TempAccountMinAggregate | null;

  @TypeGraphQL.Field(_type => TempAccountMaxAggregate, {
    nullable: true
  })
  _max!: TempAccountMaxAggregate | null;
}
