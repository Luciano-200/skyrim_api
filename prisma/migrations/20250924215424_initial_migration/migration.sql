-- CreateEnum
CREATE TYPE "public"."FactionName" AS ENUM ('STORMCLOACK', 'IMPERIAL');

-- CreateEnum
CREATE TYPE "public"."Race" AS ENUM ('NORD', 'IMPERIAL', 'DUNMER', 'ARGONIAN', 'KHAJIIT', 'BRETON', 'ORC', 'REDGUARD', 'ALTMER', 'BOSMER');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."MoralAlignment" AS ENUM ('EMPIRE_IS_WEAK', 'SKYRIM_FOR_NORDS', 'TALOS_BAN_UNACCEPTABLE', 'EMPIRE_RESTORES_ORDER', 'UNITE_AGAINST_ALTMER', 'ULFRIC_KILLED_HIGH_KING', 'NO_SIDE_IS_RIGHT', 'PEACE_AGREEMENT_PREFERRED', 'NO_OPINION');

-- CreateEnum
CREATE TYPE "public"."Motivation" AS ENUM ('END_EMPIRE', 'END_STORMCLOAKS', 'PEACE_IN_SKYRIM', 'SKYRIM_FOR_NORDS_ONLY', 'NORDS_IGNORE_MY_PEOPLE', 'ULFRIC_IS_KILLER', 'ULFRIC_IS_HIGH_KING', 'MOTIVES_DONT_MATTER');

-- CreateTable
CREATE TABLE "public"."Volunteer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "race" "public"."Race" NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "moralAlignment" "public"."MoralAlignment" NOT NULL,
    "approvalStatus" "public"."ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "motivation" "public"."Motivation" NOT NULL,
    "factionId" INTEGER,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Faction" (
    "id" SERIAL NOT NULL,
    "name" "public"."FactionName" NOT NULL,

    CONSTRAINT "Faction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Volunteer" ADD CONSTRAINT "Volunteer_factionId_fkey" FOREIGN KEY ("factionId") REFERENCES "public"."Faction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
