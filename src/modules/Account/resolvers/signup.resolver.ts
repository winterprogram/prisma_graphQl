import { GraphQLResolveInfo } from 'graphql';
import { Mutation, Ctx, Resolver, Info, Args } from 'type-graphql';
import random from 'randomatic';
import {
  Account,
  AccountCrudResolver,
  CreateAccountArgs,
  CreateTempAccountArgs,
  CreateUserArgs,
  Kyc,
  KycCrudResolver,
  TempAccount,
  TempAccountCrudResolver,
  User,
  UserCrudResolver,
} from '../../../generated/type-graphql';
import bcryptjs from 'bcryptjs';
import { ApolloError } from 'apollo-server-core';
import { getPrismaFromContext } from '../../../generated/type-graphql/helpers';
import { TempAccountArg } from '../../../types/testAccount.customArgs';
import { TempAccountArgT } from '../../../types/kyc.customArgs';
import { mailSender } from '../../../helper/nodemailer';
import { Communication } from '../../../types/enums';
import { sendSms } from '../../../helper/twillio';

@Resolver()
export default class TestAccountSignupResolver extends TempAccountCrudResolver {
  @Mutation(() => TempAccount, { nullable: false })
  async sendOtpTempAccounts(
    @Ctx() ctx: any,
    @Args() args: CreateTempAccountArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<TempAccount> {
    try {
      args.data.otp = +random('0', 6);
      const { email, phoneNumber } = args.data;
      if (email) {
        await mailSender(email, Communication.OTP, args.data.otp);
      } else {
        await sendSms(phoneNumber, `Your OTP is ${args.data.otp}`);
      }
      return await this.createTempAccount(ctx, info, args);
    } catch (err) {
      console.error(err);
      throw new ApolloError('Internal Server Error!');
    }
  }
  @Mutation(() => Account, { nullable: false })
  async verifyPhoneNumber(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: TempAccountArg,
  ): Promise<TempAccount | null> {
    try {
      const { phoneNumber, otp, email } = args.data;
      const findData: TempAccount = await getPrismaFromContext(
        ctx,
      ).tempAccount.findFirst({
        where: { phoneNumber },
      });
      if (otp === findData?.otp) {
        await getPrismaFromContext(ctx).tempAccount.delete({
          where: {
            id: findData?.id,
          },
        });
        delete args.data.otp;
        return getPrismaFromContext(ctx).account.update({
          where: {
            email,
          },
          data: {
            phoneNumber,
          },
        });
      } else {
        throw new ApolloError('OTP not matched.');
      }
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }

  @Mutation(() => Account, { nullable: false })
  async verifyEmail(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: TempAccountArg,
  ): Promise<TempAccount | null> {
    try {
      const { email, otp } = args.data;
      const findData: TempAccount = await getPrismaFromContext(
        ctx,
      ).tempAccount.findFirst({
        where: { email },
      });
      if (otp === findData?.otp) {
        await getPrismaFromContext(ctx).tempAccount.delete({
          where: {
            id: findData?.id,
          },
        });
        delete args.data.otp;
        args.data.loginType = 'EMAIL';
        return await getPrismaFromContext(ctx).account.create(args);
      } else {
        throw new ApolloError('OTP not matched.');
      }
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }
}

@Resolver()
export class AccountResolver extends AccountCrudResolver {
  @Mutation(() => Account, { nullable: false })
  async updatePassword(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: CreateAccountArgs,
  ) {
    try {
      const { password, email } = args.data,
        encryptPassword = bcryptjs.hashSync(password, 12),
        findData: Account = await getPrismaFromContext(ctx).account.findFirst({
          where: {
            email,
          },
        }),
        { id } = findData;
      return getPrismaFromContext(ctx).account.update({
        where: {
          id,
        },
        data: {
          password: encryptPassword,
        },
      });
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }
  @Mutation(() => Account, { nullable: false })
  async updatePin(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: CreateAccountArgs,
  ): Promise<Account> {
    try {
      const { pin, email } = args.data,
        findData: Account = await getPrismaFromContext(ctx).account.findFirst({
          where: {
            email,
          },
        }),
        { id } = findData;
      return getPrismaFromContext(ctx).account.update({
        where: {
          id,
        },
        data: {
          pin,
        },
      });
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }

  @Mutation(() => Account, { nullable: false })
  async dob(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: CreateAccountArgs,
  ): Promise<Account> {
    try {
      const { dob, email } = args.data,
        findData: Account = await getPrismaFromContext(ctx).account.findFirst({
          where: {
            email,
          },
        }),
        { id } = findData;
      return getPrismaFromContext(ctx).account.update({
        where: {
          id,
        },
        data: {
          dob,
        },
      });
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }
}

@Resolver()
export class KycResolver extends KycCrudResolver {
  @Mutation(() => Kyc, {
    nullable: false,
  })
  async kycUpdate(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: TempAccountArgT,
  ) {
    try {
      const { panNumber, uidNumber, email } = args.data;
      const findData: Account = await getPrismaFromContext(
          ctx,
        ).account.findFirst({
          where: {
            email,
          },
        }),
        { id } = findData;
      await getPrismaFromContext(ctx).account.update({
        where: {
          id,
        },
        data: {
          kyc: {
            create: {
              panNumber,
              uidNumber,
            },
          },
        },
      });
      const [t] = await getPrismaFromContext(ctx).kyc.findMany({
        where: {
          panNumber,
        },
      });
      return t;
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }
}
@Resolver()
export class UserResolver extends UserCrudResolver {
  @Mutation(() => User, { nullable: false })
  async userDetails(
    @Ctx() ctx: any,
    @Info() _info: GraphQLResolveInfo,
    @Args() args: CreateUserArgs,
  ): Promise<User> {
    try {
      const { firstName, lastName, country } = args.data;
      const findData: Account = await getPrismaFromContext(
          ctx,
        ).account.findFirst({
          where: {
            email: 'emails',
          },
        }),
        { id } = findData;
      await getPrismaFromContext(ctx).account.update({
        where: {
          id,
        },
        data: {
          user: {
            create: {
              firstName,
              lastName,
              country: country ?? 'IN',
            },
          },
        },
      });
      // console.log(
      //   await getPrismaFromContext(ctx).account.findUnique({
      //     where: {
      //       id,
      //     },
      //       select: {
      //         user: {
      //           select: {
      //             firstName: true,
      //           },
      //         },
      //       },
      //   }),
      // );
      const [t] = await getPrismaFromContext(ctx).user.findMany({
        where: {
          firstName,
        },
      });
      return t;
    } catch (err) {
      console.error(err);
      throw new ApolloError(err, 'Internal Srver Error');
    }
  }
}
