import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { ArgsType, Field } from 'type-graphql';
@TypeGraphQL.InputType({
  isAbstract: true,
})
export class ForgotPasswordInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  panNumber?: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  dob?: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;
}

@ArgsType()
export class ForgotPasswordArgs {
  @Field((_type) => ForgotPasswordInput, {
    nullable: false,
  })
  data!: ForgotPasswordInput;
}
