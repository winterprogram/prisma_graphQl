import { ApolloError } from 'apollo-server-core';
import { GraphQLResolveInfo } from 'graphql';
import { Mutation, Ctx, Resolver, Info, Args, Query } from 'type-graphql';
import {
  Account,
  FindUniqueKycArgs,
  Kyc,
} from '../../../generated/type-graphql';
import { getPrismaFromContext } from '../../../generated/type-graphql/helpers';
import { mailSender } from '../../../helper/nodemailer';
import { Communication } from '../../../types/enums';
import { ForgotPasswordArgs } from '../../../types/forgotpassword.customArgs';

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => Boolean, { nullable: false })
  async forgotPassword(
    @Ctx() ctx: any,
    @Args() args: ForgotPasswordArgs,
    @Info() _info: GraphQLResolveInfo,
  ): Promise<Boolean> {
    try {
      const { email, dob, panNumber } = args.data,
        findData: Account = await getPrismaFromContext(ctx).account.findFirst({
          where: {
            email,
          },
        });
      if (findData?.id) {
        const { dob: oldDob, id } = findData;
        const kycDetails = await getPrismaFromContext(ctx).account.findUnique({
            where: {
              id,
            },
            select: {
              kyc: {
                select: {
                  panNumber: true,
                },
              },
            },
          }),
          { panNumber: oldPan } = kycDetails;
        await mailSender(email, Communication.RESET, 0, 'google.com');
        if (dob) {
          // sendEmail
          return dob === oldDob;
        } else {
          // sendEmail
          return oldPan === panNumber;
        }
      } else {
        console.log('test');
        throw new ApolloError('Record not found!');
      }
    } catch (err) {
      console.error(err);
      throw new ApolloError('Internal Server Error!');
    }
  }
  @Query((_returns) => Kyc, {
    nullable: true,
  })
  async kyc(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindUniqueKycArgs,
  ): Promise<Kyc | null> {
    return getPrismaFromContext(ctx).kyc.findUnique(args);
  }
}
