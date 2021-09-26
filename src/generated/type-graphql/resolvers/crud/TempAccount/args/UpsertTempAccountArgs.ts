import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountCreateInput } from "../../../inputs/TempAccountCreateInput";
import { TempAccountUpdateInput } from "../../../inputs/TempAccountUpdateInput";
import { TempAccountWhereUniqueInput } from "../../../inputs/TempAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TempAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => TempAccountCreateInput, {
    nullable: false
  })
  create!: TempAccountCreateInput;

  @TypeGraphQL.Field(_type => TempAccountUpdateInput, {
    nullable: false
  })
  update!: TempAccountUpdateInput;
}
