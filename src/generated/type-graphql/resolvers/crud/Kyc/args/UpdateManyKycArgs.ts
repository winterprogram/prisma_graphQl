import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycUpdateManyMutationInput } from "../../../inputs/KycUpdateManyMutationInput";
import { KycWhereInput } from "../../../inputs/KycWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKycArgs {
  @TypeGraphQL.Field(_type => KycUpdateManyMutationInput, {
    nullable: false
  })
  data!: KycUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  where?: KycWhereInput | undefined;
}
