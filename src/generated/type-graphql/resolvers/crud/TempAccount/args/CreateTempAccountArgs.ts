import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountCreateInput } from "../../../inputs/TempAccountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountCreateInput, {
    nullable: false
  })
  data!: TempAccountCreateInput;
}
