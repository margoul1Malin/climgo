import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: Request, { params }: { params?: { id?: string } }) {
  try {
    if (params?.id) {
      const contactQuery = await prismadb.contactQuery.findUnique({
        where: { id: params.id },
      });
      if (!contactQuery) {
        return NextResponse.json({ error: 'Demande de contact non trouvée' }, { status: 404 });
      }
      return NextResponse.json(contactQuery);
    } else {
      const contactQueries = await prismadb.contactQuery.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json(contactQueries);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes de contact:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des demandes de contact' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, email, sujet, message } = body;

    const contactQuery = await prismadb.contactQuery.create({
      data: {
        nom,
        email,
        sujet,
        message,
      },
    });

    return NextResponse.json(contactQuery);
  } catch (error) {
    console.error('Erreur lors de la création de la demande de contact:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de la demande de contact' }, { status: 500 });
  }
} 