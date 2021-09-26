import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Login } from "../../enums/Login";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AccountMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pin!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob!: string | null;

  @TypeGraphQL.Field(_type => Login, {
    nullable: true
  })
  loginType!: "GOOGLE" | "APPLE" | "EMAIL" | null;
}
