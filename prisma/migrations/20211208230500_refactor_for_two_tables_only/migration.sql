/*
  Warnings:

  - You are about to drop the `Actors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trailers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLikesMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActorsToMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GendersToMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MoviesToProducers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trailers" DROP CONSTRAINT "Trailers_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikesMovies" DROP CONSTRAINT "UserLikesMovies_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikesMovies" DROP CONSTRAINT "UserLikesMovies_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ActorsToMovies" DROP CONSTRAINT "_ActorsToMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActorsToMovies" DROP CONSTRAINT "_ActorsToMovies_B_fkey";

-- DropForeignKey
ALTER TABLE "_GendersToMovies" DROP CONSTRAINT "_GendersToMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_GendersToMovies" DROP CONSTRAINT "_GendersToMovies_B_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesToProducers" DROP CONSTRAINT "_MoviesToProducers_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoviesToProducers" DROP CONSTRAINT "_MoviesToProducers_B_fkey";

-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "actors" TEXT[],
ADD COLUMN     "cover" TEXT,
ADD COLUMN     "genders" TEXT[],
ADD COLUMN     "producers" TEXT[],
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "trailers" TEXT;

-- DropTable
DROP TABLE "Actors";

-- DropTable
DROP TABLE "Genders";

-- DropTable
DROP TABLE "Producers";

-- DropTable
DROP TABLE "Trailers";

-- DropTable
DROP TABLE "UserLikesMovies";

-- DropTable
DROP TABLE "_ActorsToMovies";

-- DropTable
DROP TABLE "_GendersToMovies";

-- DropTable
DROP TABLE "_MoviesToProducers";
