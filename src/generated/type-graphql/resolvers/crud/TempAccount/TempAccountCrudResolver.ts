import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTempAccountArgs } from "./args/AggregateTempAccountArgs";
import { CreateManyTempAccountArgs } from "./args/CreateManyTempAccountArgs";
import { CreateTempAccountArgs } from "./args/CreateTempAccountArgs";
import { DeleteManyTempAccountArgs } from "./args/DeleteManyTempAccountArgs";
import { DeleteTempAccountArgs } from "./args/DeleteTempAccountArgs";
import { FindFirstTempAccountArgs } from "./args/FindFirstTempAccountArgs";
import { FindManyTempAccountArgs } from "./args/FindManyTempAccountArgs";
import { FindUniqueTempAccountArgs } from "./args/FindUniqueTempAccountArgs";
import { GroupByTempAccountArgs } from "./args/GroupByTempAccountArgs";
import { UpdateManyTempAccountArgs } from "./args/UpdateManyTempAccountArgs";
import { UpdateTempAccountArgs } from "./args/UpdateTempAccountArgs";
import { UpsertTempAccountArgs } from "./args/UpsertTempAccountArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TempAccount } from "../../../models/TempAccount";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTempAccount } from "../../outputs/AggregateTempAccount";
import { TempAccountGroupBy } from "../../outputs/TempAccountGroupBy";

@TypeGraphQL.Resolver(_of => TempAccount)
export class TempAccountCrudResolver {
  @TypeGraphQL.Query(_returns => TempAccount, {
    nullable: true
  })
  async tempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TempAccount, {
    nullable: true
  })
  async findFirstTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TempAccount], {
    nullable: false
  })
  async tempAccounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTempAccountArgs): Promise<TempAccount[]> {
    return getPrismaFromContext(ctx).tempAccount.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: false
  })
  async createTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTempAccountArgs): Promise<TempAccount> {
    return getPrismaFromContext(ctx).tempAccount.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTempAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tempAccount.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: true
  })
  async deleteTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: true
  })
  async updateTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTempAccountArgs): Promise<TempAccount | null> {
    return getPrismaFromContext(ctx).tempAccount.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTempAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tempAccount.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTempAccountArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tempAccount.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TempAccount, {
    nullable: false
  })
  async upsertTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTempAccountArgs): Promise<TempAccount> {
    return getPrismaFromContext(ctx).tempAccount.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTempAccount, {
    nullable: false
  })
  async aggregateTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTempAccountArgs): Promise<AggregateTempAccount> {
    return getPrismaFromContext(ctx).tempAccount.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [TempAccountGroupBy], {
    nullable: false
  })
  async groupByTempAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTempAccountArgs): Promise<TempAccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tempAccount.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
