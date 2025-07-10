import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import prismadb from '@/lib/prismadb';
import ShareLinks from '@/components/ShareLinks';
import Image from 'next/image';

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  const articles = await prismadb.article.findMany({
    select: { slug: true }
  });

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Page avec rendu statique et revalidation
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const article = await prismadb.article.findUnique({
    where: { slug: params.slug }
  });

  // Configurer la revalidation (ISR)
  // Cela peut être fait via des en-têtes ou des configurations dans next.config.js
  // Pour l'instant, on note que c'est statique avec revalidation manuelle ou via déploiement

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">Article Introuvable</h1>
          <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-2xl shadow-2xl p-8 text-center max-w-md w-full backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-6">L&apos;article avec ce slug n&apos;existe pas.</p>
            <Link href="/blog" passHref>
              <Button variant="outline" size="lg" className="text-white border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-full px-8 py-2 shadow-lg hover:shadow-xl">
                Retour au Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="relative mb-12">
          {article.image ? (
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl group">
              <Image 
                width={1000}
                height={1000}
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-2 text-white drop-shadow-lg">{article.title}</h1>
                <p className="text-sm text-gray-300 drop-shadow">Publié le {new Date(article.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-full h-80 md:h-96 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg z-10">{article.title}</h1>
              <p className="text-sm text-gray-200 drop-shadow mt-2 z-10">Publié le {new Date(article.createdAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-800 bg-opacity-80 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-700 backdrop-blur-sm">
          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} className="space-y-6 leading-relaxed" />
          </div>
          <div className="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
            <div>
              <Link href="/blog" passHref>
                <Button variant="outline" size="lg" className="flex items-center gap-2 text-white border-blue-400 bg-transparent hover:bg-blue-400 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg">
                  <ArrowLeft className="w-5 h-5" />
                  Retour au Blog
                </Button>
              </Link>
            </div>
            <ShareLinks title={article.title} url={`https://climgo.fr/blog/${params.slug}`} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 