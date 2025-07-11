import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

// GET - Récupérer tous les avis Google
export async function GET() {
  try {
    const googleAdvice = await prisma.googleAdvice.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(googleAdvice);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des avis Google' }, { status: 500 });
  }
}

// POST - Créer un nouvel avis Google
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, content, visitedDate, timeAgo, ratingStar } = body;

    // Validation des champs requis
    if (!name || !content || !timeAgo) {
      return NextResponse.json({ error: 'Les champs nom, contenu et timeAgo sont requis' }, { status: 400 });
    }

    const googleAdvice = await prisma.googleAdvice.create({
      data: {
        name,
        content,
        visitedDate,
        timeAgo,
        ratingStar: ratingStar || 5
      }
    });

    return NextResponse.json(googleAdvice);
  } catch (error) {
    console.error('Erreur lors de la création de l\'avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de l\'avis Google' }, { status: 500 });
  }
}

// DELETE - Supprimer tous les avis Google (pour les tests)
export async function DELETE() {
  try {
    await prisma.googleAdvice.deleteMany();
    return NextResponse.json({ message: 'Tous les avis Google ont été supprimés' });
  } catch (error) {
    console.error('Erreur lors de la suppression des avis Google:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression des avis Google' }, { status: 500 });
  }
} 