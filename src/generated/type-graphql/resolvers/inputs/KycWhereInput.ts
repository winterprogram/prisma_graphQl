import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycWhereInput {
  @TypeGraphQL.Field(_type => [KycWhereInput], {
    nullable: true
  })
  AND?: KycWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [KycWhereInput], {
    nullable: true
  })
  OR?: KycWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [KycWhereInput], {
    nullable: true
  })
  NOT?: KycWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  panNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uidNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  account?: AccountRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  accountId?: StringFilter | undefined;
}
