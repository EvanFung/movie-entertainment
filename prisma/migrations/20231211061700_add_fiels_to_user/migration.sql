-- AlterTable
ALTER TABLE `user` ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `birthday` DATETIME(3) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `pronouns` VARCHAR(191) NULL;