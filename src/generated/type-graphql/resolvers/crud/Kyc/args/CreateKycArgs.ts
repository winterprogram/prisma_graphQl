import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycCreateInput } from "../../../inputs/KycCreateInput";

@TypeGraphQL.ArgsType()
export class CreateKycArgs {
  @TypeGraphQL.Field(_type => KycCreateInput, {
    nullable: false
  })
  data!: KycCreateInput;
}
