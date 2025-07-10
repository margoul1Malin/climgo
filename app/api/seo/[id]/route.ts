import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

// DELETE - Supprimer des métadonnées SEO
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedSeoData = await prismadb.seoMetadata.delete({
      where: { id: params.id }
    });

    return NextResponse.json(deletedSeoData);
  } catch (error) {
    console.error('Erreur lors de la suppression des métadonnées SEO:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la suppression des métadonnées SEO' }, { status: 500 });
  }
}   

// PUT - Mettre à jour des métadonnées SEO existantes
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { title, description, keywords } = body;

    const updatedSeoData = await prismadb.seoMetadata.update({
      where: { id: params.id },
      data: {
        title,
        description,
        keywords
      }
    });

    return NextResponse.json(updatedSeoData);
  } catch (error) {
    console.error('Erreur lors de la mise à jour des métadonnées SEO:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la mise à jour des métadonnées SEO' }, { status: 500 });
  }
}

// GET - Récupérer une entrée SEO spécifique
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const seoData = await prismadb.seoMetadata.findUnique({
      where: { id: params.id }
    });
    if (!seoData) {
      return NextResponse.json({ error: 'Entrée SEO non trouvée' }, { status: 404 });
    }
    
    // Récupérer le pageTag correspondant au pageName
    let pageTag = null;
    try {
      pageTag = await prismadb.pageTag.findUnique({
        where: { name: seoData.pageName }
      });
    } catch (error) {
      console.log(error);
      // Ignorer l'erreur si le pageTag n'existe pas
    }
    
    return NextResponse.json({
      ...seoData,
      pageTag: pageTag ? { name: pageTag.name } : { name: seoData.pageName }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'entrée SEO:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de la récupération de l\'entrée SEO' }, { status: 500 });
  }
} 