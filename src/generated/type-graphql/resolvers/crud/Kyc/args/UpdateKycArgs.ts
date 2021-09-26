import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycUpdateInput } from "../../../inputs/KycUpdateInput";
import { KycWhereUniqueInput } from "../../../inputs/KycWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateKycArgs {
  @TypeGraphQL.Field(_type => KycUpdateInput, {
    nullable: false
  })
  data!: KycUpdateInput;

  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: false
  })
  where!: KycWhereUniqueInput;
}
