-- DropIndex
DROP INDEX "DailyPoem_publish_date_key";

-- AlterTable
ALTER TABLE "DailyPoem" ALTER COLUMN "publish_date" SET DEFAULT now() + interval '1 day';
