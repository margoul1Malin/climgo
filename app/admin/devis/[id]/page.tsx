import prismadb from '@/lib/prismadb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function DevisDetail({ params }: { params: { id: string } }) {
  try {
    const devis = await prismadb.devis.findUnique({
      where: { id: params.id }
    });

    if (!devis) {
      return (
        <div className="flex flex-col min-h-screen bg-gray-50">
          <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Demande de Devis Introuvable</h1>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center max-w-md w-full">
              <p className="text-gray-600">La demande de devis avec cet ID n&apos;existe pas.</p>
            </div>
            <Link href="/admin/devis" passHref>
              <Button variant="outline" size="lg" className="mt-6 text-blue-600 border-blue-600 hover:bg-blue-50">
                Retour à la liste des devis
              </Button>
            </Link>
          </main>
        </div>
      );
    }

    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Détails de la Demande de Devis</h1>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{devis.nom} {devis.prenom}</h2>
            <p className="text-gray-600 mb-3">Email: <a href={`mailto:${devis.email}`} className="text-blue-600 hover:underline">{devis.email}</a></p>
            <p className="text-gray-600 mb-3">Service: <span className="font-medium">{devis.service}</span></p>
            <p className="text-gray-600 mb-5">Message: </p>
            <blockquote className="bg-gray-100 border-l-4 border-gray-300 pl-4 py-2 text-gray-700 italic">{devis.message}</blockquote>
            <p className="text-sm text-gray-500 mt-4">Reçu le: {new Date(devis.createdAt).toLocaleDateString()} à {new Date(devis.createdAt).toLocaleTimeString()}</p>
          </div>
          <Link href="/admin/devis" passHref>
            <Button variant="outline" size="lg" className="mt-6 text-blue-600 border-blue-600 hover:bg-blue-50">
              Retour à la liste des devis
            </Button>
          </Link>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération du devis:', error);
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Erreur</h1>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md w-full">
            <p>Une erreur s&apos;est produite lors de la récupération des détails du devis. Veuillez réessayer plus tard.</p>
          </div>
          <Link href="/admin/devis" passHref>
            <Button variant="outline" size="lg" className="mt-6 text-blue-600 border-blue-600 hover:bg-blue-50">
              Retour à la liste des devis
            </Button>
          </Link>
        </main>
      </div>
    );
  }
} 