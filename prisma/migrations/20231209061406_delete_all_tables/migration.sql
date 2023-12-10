/*
  Warnings:

  - You are about to drop the `_genretomovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `moviegenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_genretomovie` DROP FOREIGN KEY `_GenreToMovie_A_fkey`;

-- DropForeignKey
ALTER TABLE `_genretomovie` DROP FOREIGN KEY `_GenreToMovie_B_fkey`;

-- DropForeignKey
ALTER TABLE `moviegenre` DROP FOREIGN KEY `MovieGenre_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `moviegenre` DROP FOREIGN KEY `MovieGenre_movieId_fkey`;

-- DropTable
DROP TABLE `_genretomovie`;

-- DropTable
DROP TABLE `genre`;

-- DropTable
DROP TABLE `movie`;

-- DropTable
DROP TABLE `moviegenre`;
