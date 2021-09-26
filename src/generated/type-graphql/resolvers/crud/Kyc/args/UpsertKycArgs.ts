import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycCreateInput } from "../../../inputs/KycCreateInput";
import { KycUpdateInput } from "../../../inputs/KycUpdateInput";
import { KycWhereUniqueInput } from "../../../inputs/KycWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertKycArgs {
  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: false
  })
  where!: KycWhereUniqueInput;

  @TypeGraphQL.Field(_type => KycCreateInput, {
    nullable: false
  })
  create!: KycCreateInput;

  @TypeGraphQL.Field(_type => KycUpdateInput, {
    nullable: false
  })
  update!: KycUpdateInput;
}
