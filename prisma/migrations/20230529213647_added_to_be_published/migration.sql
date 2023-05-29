-- AlterTable
ALTER TABLE "DailyPoem" ADD COLUMN     "to_be_published" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "publish_date" SET DEFAULT now() + interval '1 day';

-- AlterTable
ALTER TABLE "PoemProposition" ALTER COLUMN "targetLength" SET DEFAULT 14;
