import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET() {
  try {
    const articles = await prismadb.article.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la récupération des articles' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, imageUrl, slug } = body;

    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Titre, contenu et slug sont requis' }, { status: 400 });
    }

    const existingArticle = await prismadb.article.findUnique({
      where: { slug }
    });

    if (existingArticle) {
      return NextResponse.json({ error: 'Un article avec ce slug existe déjà' }, { status: 409 });
    }

    const article = await prismadb.article.create({
      data: {
        title,
        content,
        image: imageUrl || '',
        slug
      }
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la création de l\'article' }, { status: 500 });
  }
} 