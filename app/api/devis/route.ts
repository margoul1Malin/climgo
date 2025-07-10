import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, prenom, email, service, message } = body;

    if (!nom || !prenom || !email || !service || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    const devis = await prismadb.devis.create({
      data: {
        nom,
        prenom,
        email,
        service,
        message
      }
    });

    return NextResponse.json(devis);
  } catch (error) {
    console.error('Erreur lors de la création du devis:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la création du devis' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const devis = await prismadb.devis.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(devis);
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des devis' },
      { status: 500 }
    );
  }
} 