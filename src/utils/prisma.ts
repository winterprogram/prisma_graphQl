import { PrismaClient } from '@prisma/client';

export interface UserPayload {
  accountId?: string;
  userId?: string;
  role?: string;
}

export interface Context extends UserPayload {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

export default prisma;
