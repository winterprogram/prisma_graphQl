/*
  Warnings:

  - You are about to drop the column `role` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone_number,email]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login_type` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Login" AS ENUM ('GOOGLE', 'APPLE', 'EMAIL');

-- DropIndex
DROP INDEX "account_index";

-- DropIndex
DROP INDEX "accounts.username_email_unique";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "role",
DROP COLUMN "status",
DROP COLUMN "username",
ADD COLUMN     "login_type" "Login" NOT NULL,
ADD COLUMN     "phone_number" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "country" TEXT NOT NULL DEFAULT E'IN';

-- CreateTable
CREATE TABLE "temp_accounts" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "phone_number" TEXT,
    "otp" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_kycs" (
    "id" TEXT NOT NULL,
    "pan_number" TEXT NOT NULL,
    "uid_number" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_kycs_accountId_unique" ON "user_kycs"("accountId");

-- CreateIndex
CREATE INDEX "account_index" ON "accounts"("id", "phone_number", "email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts.phone_number_email_unique" ON "accounts"("phone_number", "email");

-- AddForeignKey
ALTER TABLE "user_kycs" ADD FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
