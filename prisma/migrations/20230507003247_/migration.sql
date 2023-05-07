/*
  Warnings:

  - A unique constraint covering the columns `[publish_date]` on the table `DailyPoem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DailyPoem" ADD COLUMN     "finished" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "publish_date" SET DEFAULT now() + interval '1 day';

-- CreateIndex
CREATE UNIQUE INDEX "DailyPoem_publish_date_key" ON "DailyPoem"("publish_date");
