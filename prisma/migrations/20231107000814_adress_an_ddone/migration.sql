/*
  Warnings:

  - Added the required column `adress` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `done` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "adress" TEXT NOT NULL,
ADD COLUMN     "done" BOOLEAN NOT NULL;
