-- AlterTable
ALTER TABLE "DailyPoem" ALTER COLUMN "publish_date" SET DEFAULT now() + interval '1 day';

-- CreateTable
CREATE TABLE "PoemProposition" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "targetLength" INTEGER NOT NULL,

    CONSTRAINT "PoemProposition_pkey" PRIMARY KEY ("id")
);
