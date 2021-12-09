/*
  Warnings:

  - You are about to drop the column `trailers` on the `Movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "trailers",
ADD COLUMN     "trailer" TEXT;
