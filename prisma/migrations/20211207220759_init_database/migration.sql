-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "birth" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLikesMovies" (
    "userId" TEXT NOT NULL,
    "moviesId" TEXT NOT NULL,
    "like" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLikesMovies_pkey" PRIMARY KEY ("userId","moviesId")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "release" TIMESTAMP(3),
    "duration" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trailers" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "url" TEXT NOT NULL,
    "moviesId" TEXT,

    CONSTRAINT "Trailers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth" TIMESTAMP(3),

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActorOnMovies" (
    "actorsId" TEXT NOT NULL,
    "moviesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActorOnMovies_pkey" PRIMARY KEY ("actorsId","moviesId")
);

-- CreateTable
CREATE TABLE "Genders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenderOnMovie" (
    "gendersId" TEXT NOT NULL,
    "moviesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GenderOnMovie_pkey" PRIMARY KEY ("gendersId","moviesId")
);

-- CreateTable
CREATE TABLE "Producers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "site" TEXT,
    "address" TEXT,

    CONSTRAINT "Producers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProducerOnMovie" (
    "producersId" TEXT NOT NULL,
    "moviesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProducerOnMovie_pkey" PRIMARY KEY ("producersId","moviesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Actors_name_key" ON "Actors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genders_name_key" ON "Genders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Producers_name_key" ON "Producers"("name");

-- AddForeignKey
ALTER TABLE "UserLikesMovies" ADD CONSTRAINT "UserLikesMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikesMovies" ADD CONSTRAINT "UserLikesMovies_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trailers" ADD CONSTRAINT "Trailers_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorOnMovies" ADD CONSTRAINT "ActorOnMovies_actorsId_fkey" FOREIGN KEY ("actorsId") REFERENCES "Actors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorOnMovies" ADD CONSTRAINT "ActorOnMovies_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenderOnMovie" ADD CONSTRAINT "GenderOnMovie_gendersId_fkey" FOREIGN KEY ("gendersId") REFERENCES "Genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenderOnMovie" ADD CONSTRAINT "GenderOnMovie_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProducerOnMovie" ADD CONSTRAINT "ProducerOnMovie_producersId_fkey" FOREIGN KEY ("producersId") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProducerOnMovie" ADD CONSTRAINT "ProducerOnMovie_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
