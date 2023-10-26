-- CreateTable
CREATE TABLE "MerkHandphone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MerkHandphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipeHandphone" (
    "id" SERIAL NOT NULL,
    "merkId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TipeHandphone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MerkHandphone_name_key" ON "MerkHandphone"("name");

-- AddForeignKey
ALTER TABLE "TipeHandphone" ADD CONSTRAINT "TipeHandphone_merkId_fkey" FOREIGN KEY ("merkId") REFERENCES "MerkHandphone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
