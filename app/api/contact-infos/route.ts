import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

// GET: Récupérer les infos de contact globales
export async function GET() {
  try {
    // On prend la première entrée (il ne doit y en avoir qu'une)
    const contact = await prismadb.contactInfos.findFirst();
    if (!contact) {
      return NextResponse.json({ adress: '', phone: '', mail: '' });
    }
    return NextResponse.json(contact);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des infos de contact.' }, { status: 500 });
  }
}

// PUT: Mettre à jour les infos de contact globales
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    let contact = await prismadb.contactInfos.findFirst();
    if (!contact) {
      // Si aucune entrée, on la crée
      contact = await prismadb.contactInfos.create({
        data: {
          adress: body.adress || '',
          phone: body.phone || '',
          mail: body.mail || '',
        },
      });
    } else {
      // Sinon, on la met à jour
      contact = await prismadb.contactInfos.update({
        where: { id: contact.id },
        data: {
          adress: body.adress || '',
          phone: body.phone || '',
          mail: body.mail || '',
        },
      });
    }
    return NextResponse.json(contact);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour des infos de contact.' }, { status: 500 });
  }
} 