import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountWhereInput } from "../../../inputs/TempAccountWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountWhereInput, {
    nullable: true
  })
  where?: TempAccountWhereInput | undefined;
}
