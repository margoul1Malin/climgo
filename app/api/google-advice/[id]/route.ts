import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

// GET - Récupérer un avis Google par ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const googleAdvice = await prisma.googleAdvice.findUnique({
      where: { id: params.id }
    });

    if (!googleAdvice) {
      return NextResponse.json({ error: 'Avis Google non trouvé' }, { status: 404 });
    }

    return NextResponse.json(googleAdvice);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération de l\'avis Google' }, { status: 500 });
  }
}

// PUT - Mettre à jour un avis Google
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { name, content, visitedDate, timeAgo, ratingStar } = body;

    const googleAdvice = await prisma.googleAdvice.update({
      where: { id: params.id },
      data: {
        name,
        content,
        visitedDate,
        timeAgo,
        ratingStar
      }
    });

    return NextResponse.json(googleAdvice);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'avis Google' }, { status: 500 });
  }
}

// DELETE - Supprimer un avis Google
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.googleAdvice.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: 'Avis Google supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression de l\'avis Google' }, { status: 500 });
  }
} 