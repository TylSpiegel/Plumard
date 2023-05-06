-- CreateTable
CREATE TABLE "DailyPoem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "targetLength" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Verse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "poemId" INTEGER NOT NULL,
    "sentence" TEXT,
    CONSTRAINT "Verse_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "DailyPoem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastPing" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waiting" BOOLEAN NOT NULL DEFAULT true,
    "writing" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");
