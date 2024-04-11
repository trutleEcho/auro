-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ProductName" TEXT NOT NULL,
    "ProductDescription" TEXT NOT NULL,
    "catagoryId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "product_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "catagories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "catagories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "catagories_name_key" ON "catagories"("name");
