import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pageName = searchParams.get('pageName');
    if (pageName) {
      const seoMetadata = await prismadb.seoMetadata.findUnique({
        where: { pageName },
      });
      if (!seoMetadata) {
        return NextResponse.json({ error: 'Métadonnées SEO non trouvées pour cette page' }, { status: 404 });
      }
      return NextResponse.json(seoMetadata);
    } else {
      const seoMetadatas = await prismadb.seoMetadata.findMany({
        orderBy: { updatedAt: 'desc' },
      });
      
      // Récupérer tous les pageTags pour associer les noms
      let pageTags = [];
      try {
        pageTags = await prismadb.pageTag.findMany();
      } catch (error) {
        console.log(error);
        // Ignorer l'erreur si les pageTags ne peuvent pas être récupérés
      }
      
      // Associer les pageTag aux métadonnées
      const seoWithPageTags = seoMetadatas.map(seo => {
        const pageTag = pageTags.find(tag => tag.name === seo.pageName);
        return {
          ...seo,
          pageTag: pageTag ? { name: pageTag.name } : { name: seo.pageName }
        };
      });
      
      return NextResponse.json(seoWithPageTags);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées SEO:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des métadonnées SEO' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pageName, title, description, keywords, pageTagId } = body;

    // Si pageTagId est fourni, on l'utilise comme pageName
    const finalPageName = pageTagId ? pageTagId : pageName;

    const seoMetadata = await prismadb.seoMetadata.create({
      data: {
        pageName: finalPageName,
        title,
        description,
        keywords,
      },
    });

    return NextResponse.json(seoMetadata);
  } catch (error) {
    console.error('Erreur lors de la création des métadonnées SEO:', error);
    return NextResponse.json({ error: 'Erreur lors de la création des métadonnées SEO' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { pageName: string } }) {
  try {
    const body = await req.json();
    const { title, description, keywords } = body;

    const seoMetadata = await prismadb.seoMetadata.update({
      where: { pageName: params.pageName },
      data: {
        title,
        description,
        keywords,
      },
    });

    return NextResponse.json(seoMetadata);
  } catch (error) {
    console.error('Erreur lors de la mise à jour des métadonnées SEO:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour des métadonnées SEO' }, { status: 500 });
  }
} 