import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: true
  })
  async account(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Account | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).account({});
  }
}
