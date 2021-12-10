-- CreateTable
CREATE TABLE "Genders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GendersToMovies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Genders_name_key" ON "Genders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GendersToMovies_AB_unique" ON "_GendersToMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_GendersToMovies_B_index" ON "_GendersToMovies"("B");

-- AddForeignKey
ALTER TABLE "_GendersToMovies" ADD FOREIGN KEY ("A") REFERENCES "Genders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GendersToMovies" ADD FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
