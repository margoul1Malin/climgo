import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const contactQuery = await prismadb.contactQuery.findUnique({
      where: { id: params.id },
    });

    if (!contactQuery) {
      return NextResponse.json({ error: 'Demande de contact non trouvée' }, { status: 404 });
    }

    return NextResponse.json(contactQuery);
  } catch (error) {
    console.error('Erreur lors de la récupération de la demande de contact:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération de la demande de contact' }, { status: 500 });
  }
} 