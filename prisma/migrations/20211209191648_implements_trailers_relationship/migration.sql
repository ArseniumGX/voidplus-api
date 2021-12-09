/*
  Warnings:

  - You are about to drop the column `actors` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `genders` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `producers` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `trailer` on the `Movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "actors",
DROP COLUMN "genders",
DROP COLUMN "producers",
DROP COLUMN "trailer";

-- CreateTable
CREATE TABLE "Trailers" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "url" TEXT NOT NULL,
    "moviesId" TEXT,

    CONSTRAINT "Trailers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trailers" ADD CONSTRAINT "Trailers_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
