import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountCreateManyInput } from "../../../inputs/TempAccountCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTempAccountArgs {
  @TypeGraphQL.Field(_type => [TempAccountCreateManyInput], {
    nullable: false
  })
  data!: TempAccountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
