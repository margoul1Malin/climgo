import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 });
    }

    // Logique de suppression réelle avec Prisma
    const review = await prismadb.review.delete({
      where: { id }
    });

    return NextResponse.json({ id: review.id, status: 'deleted' });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'avis:", error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
