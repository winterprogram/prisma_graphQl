import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountWhereUniqueInput } from "../../../inputs/TempAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TempAccountWhereUniqueInput;
}
