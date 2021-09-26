import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KycCreateManyInput } from "../../../inputs/KycCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKycArgs {
  @TypeGraphQL.Field(_type => [KycCreateManyInput], {
    nullable: false
  })
  data!: KycCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
