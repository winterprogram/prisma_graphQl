import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [KycScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: KycScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [KycScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: KycScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [KycScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: KycScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  panNumber?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  uidNumber?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  accountId?: StringWithAggregatesFilter | undefined;
}
