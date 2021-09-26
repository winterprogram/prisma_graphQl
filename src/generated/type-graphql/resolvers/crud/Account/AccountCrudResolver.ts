import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { GroupByAccountArgs } from "./args/GroupByAccountArgs";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Account } from "../../../models/Account";
import { AccountGroupBy } from "../../outputs/AccountGroupBy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAccount } from "../../outputs/AggregateAccount";

@TypeGraphQL.Resolver(_of => Account)
export class AccountCrudResolver {
  @TypeGraphQL.Query(_returns => Account, {
    nullable: true
  })
  async account(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAccountArgs): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Account, {
    nullable: true
  })
  async findFirstAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAccountArgs): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Account], {
    nullable: false
  })
  async accounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAccountArgs): Promise<Account[]> {
    return getPrismaFromContext(ctx).account.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: false
  })
  async createAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateAccountArgs): Promise<Account> {
    return getPrismaFromContext(ctx).account.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: true
  })
  async deleteAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteAccountArgs): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: true
  })
  async updateAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAccountArgs): Promise<Account | null> {
    return getPrismaFromContext(ctx).account.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).account.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Account, {
    nullable: false
  })
  async upsertAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAccountArgs): Promise<Account> {
    return getPrismaFromContext(ctx).account.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAccount, {
    nullable: false
  })
  async aggregateAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAccountArgs): Promise<AggregateAccount> {
    return getPrismaFromContext(ctx).account.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [AccountGroupBy], {
    nullable: false
  })
  async groupByAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAccountArgs): Promise<AccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).account.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
