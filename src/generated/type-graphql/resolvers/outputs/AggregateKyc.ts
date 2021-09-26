import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KycCountAggregate } from "../outputs/KycCountAggregate";
import { KycMaxAggregate } from "../outputs/KycMaxAggregate";
import { KycMinAggregate } from "../outputs/KycMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateKyc {
  @TypeGraphQL.Field(_type => KycCountAggregate, {
    nullable: true
  })
  _count!: KycCountAggregate | null;

  @TypeGraphQL.Field(_type => KycMinAggregate, {
    nullable: true
  })
  _min!: KycMinAggregate | null;

  @TypeGraphQL.Field(_type => KycMaxAggregate, {
    nullable: true
  })
  _max!: KycMaxAggregate | null;
}
