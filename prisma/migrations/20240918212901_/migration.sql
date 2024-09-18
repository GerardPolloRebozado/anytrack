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
CREATE TABLE "movieGenre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "movieGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "coverId" TEXT,
    "totalRating" DOUBLE PRECISION,
    "totalRatingCount" INTEGER,
    "firstReleaseDate" TIMESTAMP(3),
    "parentGameId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameGenre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "gameGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userGame" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "startedTime" TIMESTAMP(3),
    "finishedTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_movieTomovieGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_movieGenreToshow" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_gameTogameGenre" (
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
CREATE UNIQUE INDEX "movieGenre_name_key" ON "movieGenre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "gameGenre_name_key" ON "gameGenre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_movieTomovieGenre_AB_unique" ON "_movieTomovieGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_movieTomovieGenre_B_index" ON "_movieTomovieGenre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_movieGenreToshow_AB_unique" ON "_movieGenreToshow"("A", "B");

-- CreateIndex
CREATE INDEX "_movieGenreToshow_B_index" ON "_movieGenreToshow"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_gameTogameGenre_AB_unique" ON "_gameTogameGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_gameTogameGenre_B_index" ON "_gameTogameGenre"("B");

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
ALTER TABLE "game" ADD CONSTRAINT "game_parentGameId_fkey" FOREIGN KEY ("parentGameId") REFERENCES "game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGame" ADD CONSTRAINT "userGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGame" ADD CONSTRAINT "userGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieTomovieGenre" ADD CONSTRAINT "_movieTomovieGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieTomovieGenre" ADD CONSTRAINT "_movieTomovieGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "movieGenre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieGenreToshow" ADD CONSTRAINT "_movieGenreToshow_A_fkey" FOREIGN KEY ("A") REFERENCES "movieGenre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieGenreToshow" ADD CONSTRAINT "_movieGenreToshow_B_fkey" FOREIGN KEY ("B") REFERENCES "show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_gameTogameGenre" ADD CONSTRAINT "_gameTogameGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_gameTogameGenre" ADD CONSTRAINT "_gameTogameGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "gameGenre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
