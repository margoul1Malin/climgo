import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export interface Review {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getReviews(): Promise<Review[]> {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
} 