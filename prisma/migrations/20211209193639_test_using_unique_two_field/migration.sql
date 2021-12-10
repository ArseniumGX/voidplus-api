/*
  Warnings:

  - A unique constraint covering the columns `[title,year]` on the table `Movies` will be added. If there are existing duplicate values, this will fail.
  - Made the column `year` on table `Movies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movies" ALTER COLUMN "year" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_year_key" ON "Movies"("title", "year");
