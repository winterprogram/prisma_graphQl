-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "login_type" DROP NOT NULL;
