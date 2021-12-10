/*
  Warnings:

  - You are about to drop the `UserWatchedMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserWatchedMovie" DROP CONSTRAINT "UserWatchedMovie_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "UserWatchedMovie" DROP CONSTRAINT "UserWatchedMovie_userId_fkey";

-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "actors" TEXT[],
ADD COLUMN     "producer" TEXT[],
ADD COLUMN     "watched" BOOLEAN DEFAULT false;

-- DropTable
DROP TABLE "UserWatchedMovie";
