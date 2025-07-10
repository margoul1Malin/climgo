import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import prismadb from '@/lib/prismadb';
import Image from 'next/image';

// Interface pour le type Article
export interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  createdAt: Date;
}

// Props pour la page
export type BlogProps = {
  articles: Article[];
};

// Configuration pour ISR
export const dynamic = 'force-static';
export const revalidate = 3600; // Révalider toutes les heures (3600 secondes)

export default async function Blog() {
  let articles: Article[] = [];
  try {
    articles = await prismadb.article.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Blog ClimGo</h1>
        <p className="text-lg text-gray-600 mb-8">Découvrez nos derniers articles sur la climatisation et les pompes à chaleur.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <Image src={article.image} alt={article.title} className="w-full h-48 object-cover" width={500} height={500} />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.content}</p>
                  <p className="text-xs text-gray-400 mb-4">Publié le {new Date(article.createdAt).toLocaleDateString('fr-FR')}</p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                    <a href={`/blog/${article.slug}`}>Lire plus</a>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">Aucun article pour le moment. Revenez bientôt !</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
