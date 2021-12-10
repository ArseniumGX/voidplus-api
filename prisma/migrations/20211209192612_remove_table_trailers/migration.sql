/*
  Warnings:

  - You are about to drop the `Trailers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trailers" DROP CONSTRAINT "Trailers_moviesId_fkey";

-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "trailer" TEXT;

-- DropTable
DROP TABLE "Trailers";
