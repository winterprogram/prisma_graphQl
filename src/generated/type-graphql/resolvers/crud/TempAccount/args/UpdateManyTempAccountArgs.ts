import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountUpdateManyMutationInput } from "../../../inputs/TempAccountUpdateManyMutationInput";
import { TempAccountWhereInput } from "../../../inputs/TempAccountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: TempAccountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TempAccountWhereInput, {
    nullable: true
  })
  where?: TempAccountWhereInput | undefined;
}
