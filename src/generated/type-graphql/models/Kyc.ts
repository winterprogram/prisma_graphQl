import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Kyc {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  panNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uidNumber!: string;

  account?: Account | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accountId!: string;
}
