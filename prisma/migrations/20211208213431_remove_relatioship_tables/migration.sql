/*
  Warnings:

  - You are about to drop the `ActorOnMovies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GenderOnMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProducerOnMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActorOnMovies" DROP CONSTRAINT "ActorOnMovies_actorsId_fkey";

-- DropForeignKey
ALTER TABLE "ActorOnMovies" DROP CONSTRAINT "ActorOnMovies_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "GenderOnMovie" DROP CONSTRAINT "GenderOnMovie_gendersId_fkey";

-- DropForeignKey
ALTER TABLE "GenderOnMovie" DROP CONSTRAINT "GenderOnMovie_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "ProducerOnMovie" DROP CONSTRAINT "ProducerOnMovie_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "ProducerOnMovie" DROP CONSTRAINT "ProducerOnMovie_producersId_fkey";

-- DropTable
DROP TABLE "ActorOnMovies";

-- DropTable
DROP TABLE "GenderOnMovie";

-- DropTable
DROP TABLE "ProducerOnMovie";

-- CreateTable
CREATE TABLE "_GendersToMovies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActorsToMovies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MoviesToProducers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GendersToMovies_AB_unique" ON "_GendersToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_GendersToMovies_B_index" ON "_GendersToMovies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActorsToMovies_AB_unique" ON "_ActorsToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorsToMovies_B_index" ON "_ActorsToMovies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoviesToProducers_AB_unique" ON "_MoviesToProducers"("A", "B");

-- CreateIndex
CREATE INDEX "_MoviesToProducers_B_index" ON "_MoviesToProducers"("B");

-- AddForeignKey
ALTER TABLE "_GendersToMovies" ADD FOREIGN KEY ("A") REFERENCES "Genders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GendersToMovies" ADD FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorsToMovies" ADD FOREIGN KEY ("A") REFERENCES "Actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorsToMovies" ADD FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesToProducers" ADD FOREIGN KEY ("A") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesToProducers" ADD FOREIGN KEY ("B") REFERENCES "Producers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
