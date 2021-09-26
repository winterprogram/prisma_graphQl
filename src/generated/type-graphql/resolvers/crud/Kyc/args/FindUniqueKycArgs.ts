import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycWhereUniqueInput } from "../../../inputs/KycWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKycArgs {
  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: false
  })
  where!: KycWhereUniqueInput;
}
