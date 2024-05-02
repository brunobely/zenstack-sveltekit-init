import { PrismaClient } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export function getEnhancedPrisma(user?: User) {
  return enhance(prisma, { user });
}

export default prisma;
