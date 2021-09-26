import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycOrderByInput } from "../../../inputs/KycOrderByInput";
import { KycWhereInput } from "../../../inputs/KycWhereInput";
import { KycWhereUniqueInput } from "../../../inputs/KycWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateKycArgs {
  @TypeGraphQL.Field(_type => KycWhereInput, {
    nullable: true
  })
  where?: KycWhereInput | undefined;

  @TypeGraphQL.Field(_type => [KycOrderByInput], {
    nullable: true
  })
  orderBy?: KycOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => KycWhereUniqueInput, {
    nullable: true
  })
  cursor?: KycWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
