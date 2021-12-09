/*
  Warnings:

  - You are about to drop the column `release` on the `Movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "release",
ADD COLUMN     "year" INTEGER;
