import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycWhereInput } from "../../../inputs/KycWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyKycArgs {
  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  where?: KycWhereInput | undefined;
}
