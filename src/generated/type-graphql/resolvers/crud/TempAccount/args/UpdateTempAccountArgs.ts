import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountUpdateInput } from "../../../inputs/TempAccountUpdateInput";
import { TempAccountWhereUniqueInput } from "../../../inputs/TempAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountUpdateInput, {
    nullable: false
  })
  data!: TempAccountUpdateInput;

  @TypeGraphQL.Field(_type => TempAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TempAccountWhereUniqueInput;
}
