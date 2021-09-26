import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Kyc } from "../../../models/Kyc";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Kyc)
export class KycRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: true
  })
  async account(@TypeGraphQL.Root() kyc: Kyc, @TypeGraphQL.Ctx() ctx: any): Promise<Account | null> {
    return getPrismaFromContext(ctx).kyc.findUnique({
      where: {
        id: kyc.id,
      },
    }).account({});
  }
}
