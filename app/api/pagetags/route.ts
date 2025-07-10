import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET() {
  try {
    const pageTags = await prismadb.pageTag.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    return NextResponse.json(pageTags);
  } catch (error) {
    console.error('Erreur lors de la récupération des tags de page:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des tags de page' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Le nom du tag de page est requis' },
        { status: 400 }
      );
    }

    const existingTag = await prismadb.pageTag.findUnique({
      where: { name }
    });

    if (existingTag) {
      return NextResponse.json(
        { error: 'Un tag de page avec ce nom existe déjà' },
        { status: 409 }
      );
    }

    const pageTag = await prismadb.pageTag.create({
      data: {
        name
      }
    });

    return NextResponse.json(pageTag);
  } catch (error) {
    console.error('Erreur lors de la création du tag de page:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du tag de page' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name } = body;

    if (!id || !name) {
      return NextResponse.json(
        { error: 'L\'ID et le nom du tag de page sont requis' },
        { status: 400 }
      );
    }

    const existingTag = await prismadb.pageTag.findUnique({
      where: { name }
    });

    if (existingTag && existingTag.id !== id) {
      return NextResponse.json(
        { error: 'Un tag de page avec ce nom existe déjà' },
        { status: 409 }
      );
    }

    const pageTag = await prismadb.pageTag.update({
      where: { id },
      data: { name }
    });

    return NextResponse.json(pageTag);
  } catch (error) {
    console.error('Erreur lors de la modification du tag de page:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification du tag de page' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'L\'ID du tag de page est requis' },
        { status: 400 }
      );
    }

    const pageTag = await prismadb.pageTag.delete({
      where: { id }
    });

    return NextResponse.json(pageTag);
  } catch (error) {
    console.error('Erreur lors de la suppression du tag de page:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du tag de page' },
      { status: 500 }
    );
  }
} 