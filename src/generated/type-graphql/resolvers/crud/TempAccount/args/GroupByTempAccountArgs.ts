import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountOrderByInput } from "../../../inputs/TempAccountOrderByInput";
import { TempAccountScalarWhereWithAggregatesInput } from "../../../inputs/TempAccountScalarWhereWithAggregatesInput";
import { TempAccountWhereInput } from "../../../inputs/TempAccountWhereInput";
import { TempAccountScalarFieldEnum } from "../../../../enums/TempAccountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountWhereInput, {
    nullable: true
  })
  where?: TempAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TempAccountOrderByInput], {
    nullable: true
  })
  orderBy?: TempAccountOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TempAccountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "phoneNumber" | "otp">;

  @TypeGraphQL.Field(_type => TempAccountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TempAccountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
