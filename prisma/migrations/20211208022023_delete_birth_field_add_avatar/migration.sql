/*
  Warnings:

  - You are about to drop the column `birth` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birth",
ADD COLUMN     "avatar" TEXT;
