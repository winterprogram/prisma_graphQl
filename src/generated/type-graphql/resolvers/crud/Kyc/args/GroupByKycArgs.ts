import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycOrderByInput } from "../../../inputs/KycOrderByInput";
import { KycScalarWhereWithAggregatesInput } from "../../../inputs/KycScalarWhereWithAggregatesInput";
import { KycWhereInput } from "../../../inputs/KycWhereInput";
import { KycScalarFieldEnum } from "../../../../enums/KycScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKycArgs {
  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  where?: KycWhereInput | undefined;

  @TypeGraphQL.Field(_type => [KycOrderByInput], {
    nullable: true
  })
  orderBy?: KycOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [KycScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "panNumber" | "uidNumber" | "accountId">;

  @TypeGraphQL.Field(_type => KycScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: KycScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
