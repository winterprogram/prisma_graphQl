import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { ArgsType, Field } from "type-graphql";
@TypeGraphQL.InputType({
  isAbstract: true
})
export class KycCreateInputT {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  panNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uidNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

}


@ArgsType()
export class TempAccountArgT {
  @Field((_type) => KycCreateInputT, {
    nullable: false,
  })
  data!: KycCreateInputT;
}