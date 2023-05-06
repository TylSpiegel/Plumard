-- CreateTable
CREATE TABLE "DailyPoem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "targetLength" INTEGER NOT NULL,

    CONSTRAINT "DailyPoem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verse" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "poemId" INTEGER NOT NULL,
    "sentence" TEXT,

    CONSTRAINT "Verse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastPing" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waiting" BOOLEAN NOT NULL DEFAULT true,
    "writing" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- AddForeignKey
ALTER TABLE "Verse" ADD CONSTRAINT "Verse_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "DailyPoem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
