import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TempAccountOrderByInput } from "../../../inputs/TempAccountOrderByInput";
import { TempAccountWhereInput } from "../../../inputs/TempAccountWhereInput";
import { TempAccountWhereUniqueInput } from "../../../inputs/TempAccountWhereUniqueInput";
import { TempAccountScalarFieldEnum } from "../../../../enums/TempAccountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTempAccountArgs {
  @TypeGraphQL.Field(_type => TempAccountWhereInput, {
    nullable: true
  })
  where?: TempAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TempAccountOrderByInput], {
    nullable: true
  })
  orderBy?: TempAccountOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TempAccountWhereUniqueInput, {
    nullable: true
  })
  cursor?: TempAccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TempAccountScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "phoneNumber" | "otp"> | undefined;
}
