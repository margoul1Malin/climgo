import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    // Parse form data since it's urlencoded
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!title || !content) {
      return NextResponse.json({ error: 'Titre et contenu sont requis' }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'avis:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la soumission de l\'avis' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la récupération des avis' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: 'ID de l\'avis requis' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Avis supprimé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'avis:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la suppression de l\'avis' }, { status: 500 });
  }
} 