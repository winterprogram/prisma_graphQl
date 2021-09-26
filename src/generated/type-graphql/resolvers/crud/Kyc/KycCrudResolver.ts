import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateKycArgs } from "./args/AggregateKycArgs";
import { CreateKycArgs } from "./args/CreateKycArgs";
import { CreateManyKycArgs } from "./args/CreateManyKycArgs";
import { DeleteKycArgs } from "./args/DeleteKycArgs";
import { DeleteManyKycArgs } from "./args/DeleteManyKycArgs";
import { FindFirstKycArgs } from "./args/FindFirstKycArgs";
import { FindManyKycArgs } from "./args/FindManyKycArgs";
import { FindUniqueKycArgs } from "./args/FindUniqueKycArgs";
import { GroupByKycArgs } from "./args/GroupByKycArgs";
import { UpdateKycArgs } from "./args/UpdateKycArgs";
import { UpdateManyKycArgs } from "./args/UpdateManyKycArgs";
import { UpsertKycArgs } from "./args/UpsertKycArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Kyc } from "../../../models/Kyc";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateKyc } from "../../outputs/AggregateKyc";
import { KycGroupBy } from "../../outputs/KycGroupBy";

@TypeGraphQL.Resolver(_of => Kyc)
export class KycCrudResolver {
  @TypeGraphQL.Query(_returns => Kyc, {
    nullable: true
  })
  async kyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Kyc, {
    nullable: true
  })
  async findFirstKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Kyc], {
    nullable: false
  })
  async kycs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyKycArgs): Promise<Kyc[]> {
    return getPrismaFromContext(ctx).kyc.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: false
  })
  async createKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateKycArgs): Promise<Kyc> {
    return getPrismaFromContext(ctx).kyc.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyKycArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).kyc.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: true
  })
  async deleteKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: true
  })
  async updateKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateKycArgs): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyKycArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).kyc.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyKycArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).kyc.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Kyc, {
    nullable: false
  })
  async upsertKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertKycArgs): Promise<Kyc> {
    return getPrismaFromContext(ctx).kyc.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateKyc, {
    nullable: false
  })
  async aggregateKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateKycArgs): Promise<AggregateKyc> {
    return getPrismaFromContext(ctx).kyc.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [KycGroupBy], {
    nullable: false
  })
  async groupByKyc(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByKycArgs): Promise<KycGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).kyc.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
