import { InputType, Field, ArgsType } from 'type-graphql';
import { TempAccountCreateInput } from '../generated/type-graphql';

@InputType({
  isAbstract: true,
})
class CustomArgs extends TempAccountCreateInput {
  constructor() {
    super();
  }
  @Field((_type) => String, {
    nullable: true,
  })
  loginType: 'GOOGLE' | 'APPLE' | 'EMAIL';
}
@ArgsType()
export class TempAccountArg {
  @Field((_type) => TempAccountCreateInput, {
    nullable: false,
  })
  data!: CustomArgs;
}




