
import { PrismaClient } from '@prisma/client';

// Changed 'global' to 'globalThis' to fix TS error and ensure cross-environment compatibility
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
