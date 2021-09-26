import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  TempAccount: crudResolvers.TempAccountCrudResolver,
  Account: crudResolvers.AccountCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Kyc: crudResolvers.KycCrudResolver
};
const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Kyc: relationResolvers.KycRelationsResolver
};
const actionResolversMap = {
  TempAccount: {
    tempAccount: actionResolvers.FindUniqueTempAccountResolver,
    findFirstTempAccount: actionResolvers.FindFirstTempAccountResolver,
    tempAccounts: actionResolvers.FindManyTempAccountResolver,
    createTempAccount: actionResolvers.CreateTempAccountResolver,
    createManyTempAccount: actionResolvers.CreateManyTempAccountResolver,
    deleteTempAccount: actionResolvers.DeleteTempAccountResolver,
    updateTempAccount: actionResolvers.UpdateTempAccountResolver,
    deleteManyTempAccount: actionResolvers.DeleteManyTempAccountResolver,
    updateManyTempAccount: actionResolvers.UpdateManyTempAccountResolver,
    upsertTempAccount: actionResolvers.UpsertTempAccountResolver,
    aggregateTempAccount: actionResolvers.AggregateTempAccountResolver,
    groupByTempAccount: actionResolvers.GroupByTempAccountResolver
  },
  Account: {
    account: actionResolvers.FindUniqueAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    createAccount: actionResolvers.CreateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    deleteAccount: actionResolvers.DeleteAccountResolver,
    updateAccount: actionResolvers.UpdateAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    upsertAccount: actionResolvers.UpsertAccountResolver,
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Kyc: {
    kyc: actionResolvers.FindUniqueKycResolver,
    findFirstKyc: actionResolvers.FindFirstKycResolver,
    kycs: actionResolvers.FindManyKycResolver,
    createKyc: actionResolvers.CreateKycResolver,
    createManyKyc: actionResolvers.CreateManyKycResolver,
    deleteKyc: actionResolvers.DeleteKycResolver,
    updateKyc: actionResolvers.UpdateKycResolver,
    deleteManyKyc: actionResolvers.DeleteManyKycResolver,
    updateManyKyc: actionResolvers.UpdateManyKycResolver,
    upsertKyc: actionResolvers.UpsertKycResolver,
    aggregateKyc: actionResolvers.AggregateKycResolver,
    groupByKyc: actionResolvers.GroupByKycResolver
  }
};
const resolversInfo = {
  TempAccount: ["tempAccount", "findFirstTempAccount", "tempAccounts", "createTempAccount", "createManyTempAccount", "deleteTempAccount", "updateTempAccount", "deleteManyTempAccount", "updateManyTempAccount", "upsertTempAccount", "aggregateTempAccount", "groupByTempAccount"],
  Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Kyc: ["kyc", "findFirstKyc", "kycs", "createKyc", "createManyKyc", "deleteKyc", "updateKyc", "deleteManyKyc", "updateManyKyc", "upsertKyc", "aggregateKyc", "groupByKyc"]
};
const relationResolversInfo = {
  Account: ["user", "kyc"],
  User: ["account"],
  Kyc: ["account"]
};
const modelsInfo = {
  TempAccount: ["id", "email", "phoneNumber", "otp"],
  Account: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  User: ["id", "firstName", "country", "lastName", "accountId"],
  Kyc: ["id", "panNumber", "uidNumber", "accountId"]
};
const inputsInfo = {
  TempAccountWhereInput: ["AND", "OR", "NOT", "id", "email", "phoneNumber", "otp"],
  TempAccountOrderByInput: ["id", "email", "phoneNumber", "otp"],
  TempAccountWhereUniqueInput: ["id"],
  TempAccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "phoneNumber", "otp"],
  AccountWhereInput: ["AND", "OR", "NOT", "id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "user", "kyc"],
  AccountOrderByInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  AccountWhereUniqueInput: ["id", "phoneNumber_email"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "firstName", "country", "lastName", "account", "accountId"],
  UserOrderByInput: ["id", "firstName", "country", "lastName", "accountId"],
  UserWhereUniqueInput: ["id"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "country", "lastName", "accountId"],
  KycWhereInput: ["AND", "OR", "NOT", "id", "panNumber", "uidNumber", "account", "accountId"],
  KycOrderByInput: ["id", "panNumber", "uidNumber", "accountId"],
  KycWhereUniqueInput: ["id"],
  KycScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "panNumber", "uidNumber", "accountId"],
  TempAccountCreateInput: ["id", "email", "phoneNumber", "otp"],
  TempAccountUpdateInput: ["id", "email", "phoneNumber", "otp"],
  TempAccountCreateManyInput: ["id", "email", "phoneNumber", "otp"],
  TempAccountUpdateManyMutationInput: ["id", "email", "phoneNumber", "otp"],
  AccountCreateInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "user", "kyc"],
  AccountUpdateInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "user", "kyc"],
  AccountCreateManyInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  AccountUpdateManyMutationInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  UserCreateInput: ["id", "firstName", "country", "lastName", "account"],
  UserUpdateInput: ["id", "firstName", "country", "lastName", "account"],
  UserCreateManyInput: ["id", "firstName", "country", "lastName", "accountId"],
  UserUpdateManyMutationInput: ["id", "firstName", "country", "lastName"],
  KycCreateInput: ["id", "panNumber", "uidNumber", "account"],
  KycUpdateInput: ["id", "panNumber", "uidNumber", "account"],
  KycCreateManyInput: ["id", "panNumber", "uidNumber", "accountId"],
  KycUpdateManyMutationInput: ["id", "panNumber", "uidNumber"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumLoginNullableFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  KycRelationFilter: ["is", "isNot"],
  AccountPhoneNumberEmailCompoundUniqueInput: ["phoneNumber", "email"],
  EnumLoginNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  AccountRelationFilter: ["is", "isNot"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutAccountInput: ["create", "connectOrCreate", "connect"],
  KycCreateNestedOneWithoutAccountInput: ["create", "connectOrCreate", "connect"],
  NullableEnumLoginFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutAccountInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  KycUpdateOneWithoutAccountInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  AccountCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  AccountUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  AccountCreateNestedOneWithoutKycInput: ["create", "connectOrCreate", "connect"],
  AccountUpdateOneWithoutKycInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumLoginNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumLoginNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserCreateWithoutAccountInput: ["id", "firstName", "country", "lastName"],
  UserCreateOrConnectWithoutAccountInput: ["where", "create"],
  KycCreateWithoutAccountInput: ["id", "panNumber", "uidNumber"],
  KycCreateOrConnectWithoutAccountInput: ["where", "create"],
  UserUpsertWithoutAccountInput: ["update", "create"],
  UserUpdateWithoutAccountInput: ["id", "firstName", "country", "lastName"],
  KycUpsertWithoutAccountInput: ["update", "create"],
  KycUpdateWithoutAccountInput: ["id", "panNumber", "uidNumber"],
  AccountCreateWithoutUserInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "kyc"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountUpsertWithoutUserInput: ["update", "create"],
  AccountUpdateWithoutUserInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "kyc"],
  AccountCreateWithoutKycInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "user"],
  AccountCreateOrConnectWithoutKycInput: ["where", "create"],
  AccountUpsertWithoutKycInput: ["update", "create"],
  AccountUpdateWithoutKycInput: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "user"]
};
const outputsInfo = {
  AggregateTempAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  TempAccountGroupBy: ["id", "email", "phoneNumber", "otp", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "firstName", "country", "lastName", "accountId", "_count", "_min", "_max"],
  AggregateKyc: ["_count", "_min", "_max"],
  KycGroupBy: ["id", "panNumber", "uidNumber", "accountId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TempAccountCountAggregate: ["id", "email", "phoneNumber", "otp", "_all"],
  TempAccountAvgAggregate: ["otp"],
  TempAccountSumAggregate: ["otp"],
  TempAccountMinAggregate: ["id", "email", "phoneNumber", "otp"],
  TempAccountMaxAggregate: ["id", "email", "phoneNumber", "otp"],
  AccountCountAggregate: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType", "_all"],
  AccountAvgAggregate: ["pin"],
  AccountSumAggregate: ["pin"],
  AccountMinAggregate: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  AccountMaxAggregate: ["id", "email", "phoneNumber", "password", "pin", "dob", "loginType"],
  UserCountAggregate: ["id", "firstName", "country", "lastName", "accountId", "_all"],
  UserMinAggregate: ["id", "firstName", "country", "lastName", "accountId"],
  UserMaxAggregate: ["id", "firstName", "country", "lastName", "accountId"],
  KycCountAggregate: ["id", "panNumber", "uidNumber", "accountId", "_all"],
  KycMinAggregate: ["id", "panNumber", "uidNumber", "accountId"],
  KycMaxAggregate: ["id", "panNumber", "uidNumber", "accountId"]
};
const argsInfo = {
  FindUniqueTempAccountArgs: ["where"],
  FindFirstTempAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTempAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTempAccountArgs: ["data"],
  CreateManyTempAccountArgs: ["data", "skipDuplicates"],
  DeleteTempAccountArgs: ["where"],
  UpdateTempAccountArgs: ["data", "where"],
  DeleteManyTempAccountArgs: ["where"],
  UpdateManyTempAccountArgs: ["data", "where"],
  UpsertTempAccountArgs: ["where", "create", "update"],
  AggregateTempAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTempAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAccountArgs: ["data"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  DeleteAccountArgs: ["where"],
  UpdateAccountArgs: ["data", "where"],
  DeleteManyAccountArgs: ["where"],
  UpdateManyAccountArgs: ["data", "where"],
  UpsertAccountArgs: ["where", "create", "update"],
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueKycArgs: ["where"],
  FindFirstKycArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyKycArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateKycArgs: ["data"],
  CreateManyKycArgs: ["data", "skipDuplicates"],
  DeleteKycArgs: ["where"],
  UpdateKycArgs: ["data", "where"],
  DeleteManyKycArgs: ["where"],
  UpdateManyKycArgs: ["data", "where"],
  UpsertKycArgs: ["where", "create", "update"],
  AggregateKycArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByKycArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







