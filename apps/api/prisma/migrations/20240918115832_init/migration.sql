-- CreateEnum
CREATE TYPE "status" AS ENUM ('ongoing', 'canceled', 'released', 'finished');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setting" (
    "userId" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "setting_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "tmdbRating" DOUBLE PRECISION,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "releaseDate" TIMESTAMP(3),
    "overview" TEXT,
    "runtime" INTEGER,
    "genreId" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMovie" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    "watchedDate" TIMESTAMP(3),
    "watched" BOOLEAN NOT NULL,

    CONSTRAINT "userMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMovieReview" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    "rating" INTEGER,
    "review" TEXT,

    CONSTRAINT "userMovieReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "show" (
    "id" SERIAL NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "tmdbRating" DOUBLE PRECISION,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "releaseDate" TIMESTAMP(3),
    "overview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userShow" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "showId" INTEGER NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "watchedDate" TIMESTAMP(3),
    "watched" BOOLEAN NOT NULL,

    CONSTRAINT "userShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userShowReview" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "showId" INTEGER NOT NULL,
    "rating" INTEGER,
    "review" TEXT,

    CONSTRAINT "userShowReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "season" (
    "id" SERIAL NOT NULL,
    "seasonNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "releaseDate" TIMESTAMP(3),
    "overview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "showId" INTEGER,

    CONSTRAINT "season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episode" (
    "id" SERIAL NOT NULL,
    "episodeNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT,
    "runtime" INTEGER,
    "releaseDate" TIMESTAMP(3),
    "seasonId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_genreTomovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_genreToshow" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "movie_tmdbId_key" ON "movie"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "userMovie_userId_movieId_key" ON "userMovie"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "userMovieReview_userId_movieId_key" ON "userMovieReview"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "show_tmdbId_key" ON "show"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "userShow_userId_showId_episodeId_key" ON "userShow"("userId", "showId", "episodeId");

-- CreateIndex
CREATE UNIQUE INDEX "userShowReview_userId_showId_key" ON "userShowReview"("userId", "showId");

-- CreateIndex
CREATE UNIQUE INDEX "season_showId_seasonNumber_key" ON "season"("showId", "seasonNumber");

-- CreateIndex
CREATE UNIQUE INDEX "episode_seasonId_episodeNumber_key" ON "episode"("seasonId", "episodeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_genreTomovie_AB_unique" ON "_genreTomovie"("A", "B");

-- CreateIndex
CREATE INDEX "_genreTomovie_B_index" ON "_genreTomovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_genreToshow_AB_unique" ON "_genreToshow"("A", "B");

-- CreateIndex
CREATE INDEX "_genreToshow_B_index" ON "_genreToshow"("B");

-- AddForeignKey
ALTER TABLE "setting" ADD CONSTRAINT "setting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMovie" ADD CONSTRAINT "userMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMovie" ADD CONSTRAINT "userMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMovieReview" ADD CONSTRAINT "userMovieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userMovieReview" ADD CONSTRAINT "userMovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userShow" ADD CONSTRAINT "userShow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userShow" ADD CONSTRAINT "userShow_showId_fkey" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userShow" ADD CONSTRAINT "userShow_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userShowReview" ADD CONSTRAINT "userShowReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userShowReview" ADD CONSTRAINT "userShowReview_showId_fkey" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "season" ADD CONSTRAINT "season_showId_fkey" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode" ADD CONSTRAINT "episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_genreTomovie" ADD CONSTRAINT "_genreTomovie_A_fkey" FOREIGN KEY ("A") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_genreTomovie" ADD CONSTRAINT "_genreTomovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_genreToshow" ADD CONSTRAINT "_genreToshow_A_fkey" FOREIGN KEY ("A") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_genreToshow" ADD CONSTRAINT "_genreToshow_B_fkey" FOREIGN KEY ("B") REFERENCES "show"("id") ON DELETE CASCADE ON UPDATE CASCADE;
