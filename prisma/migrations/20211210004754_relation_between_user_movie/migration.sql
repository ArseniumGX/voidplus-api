/*
  Warnings:

  - You are about to drop the `Genders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GendersToMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GendersToMovies" DROP CONSTRAINT "_GendersToMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_GendersToMovies" DROP CONSTRAINT "_GendersToMovies_B_fkey";

-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "genres" TEXT[];

-- DropTable
DROP TABLE "Genders";

-- DropTable
DROP TABLE "_GendersToMovies";

-- CreateTable
CREATE TABLE "UserWatchedMovie" (
    "userId" TEXT NOT NULL,
    "moviesId" TEXT NOT NULL,
    "watched" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserWatchedMovie_pkey" PRIMARY KEY ("userId","moviesId")
);

-- AddForeignKey
ALTER TABLE "UserWatchedMovie" ADD CONSTRAINT "UserWatchedMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWatchedMovie" ADD CONSTRAINT "UserWatchedMovie_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
