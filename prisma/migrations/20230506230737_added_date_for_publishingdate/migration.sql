-- AlterTable
ALTER TABLE "DailyPoem" ADD COLUMN     "publish_date" DATE NOT NULL DEFAULT now() + interval '1 day';

-- AlterTable
ALTER TABLE "Verse" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
