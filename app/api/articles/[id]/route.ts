import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const identifier = resolvedParams.id;

    let article;
    // Vérifier si l'identifiant est un ID ou un slug
    try {
      article = await prismadb.article.findUnique({
        where: { id: identifier }
      });
    } catch (e) {
      console.log(e);
      // Si ce n'est pas un ID, essayer comme slug
      article = await prismadb.article.findUnique({
        where: { slug: identifier }
      });
    }

    if (!article) {
      return NextResponse.json({ error: 'Article introuvable' }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la récupération de l\'article' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await req.json();
    const { title, content, imageUrl, slug } = body;

    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Titre, contenu et slug sont requis' }, { status: 400 });
    }

    const resolvedParams = await params;
    const articleId = resolvedParams.id;

    const existingArticle = await prismadb.article.findUnique({
      where: { slug },
      select: { id: true }
    });

    if (existingArticle && existingArticle.id !== articleId) {
      return NextResponse.json({ error: 'Un autre article avec ce slug existe déjà' }, { status: 409 });
    }

    const article = await prismadb.article.update({
      where: { id: articleId },
      data: {
        title,
        content,
        image: imageUrl || '',
        slug
      }
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la mise à jour de l\'article' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const articleId = resolvedParams.id;

    await prismadb.article.delete({
      where: { id: articleId }
    });
    return NextResponse.json({ message: 'Article supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la suppression de l\'article' }, { status: 500 });
  }
} 