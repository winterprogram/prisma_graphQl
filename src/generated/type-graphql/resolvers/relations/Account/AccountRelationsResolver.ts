import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Kyc } from "../../../models/Kyc";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Account)
export class AccountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Kyc, {
    nullable: true
  })
  async kyc(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).kyc({});
  }
}
