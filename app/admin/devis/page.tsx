import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default async function DevisAdmin() {
  try {
    const devisList = await prismadb.devis.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Gestion des Demandes de Devis</h1>
          <Button className="mb-6 bg-blue-600 text-white hover:bg-blue-700" disabled>
            Nouvelle demande (non disponible)
          </Button>
          <Link href="/admin" passHref>
            <Button variant="outline" className="mb-6 ml-4 text-blue-600 border-blue-600 hover:bg-blue-50">
              Retour au panneau d&apos;administration
            </Button>
          </Link>

          {devisList.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">Aucune demande de devis pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {devisList.map((devis) => (
                <div key={devis.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{devis.nom} {devis.prenom}</h2>
                  <p className="text-gray-600 mb-2">Email: {devis.email}</p>
                  <p className="text-gray-600 mb-2">Service: {devis.service}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">Message: {devis.message}</p>
                  <p className="text-sm text-gray-500">Reçu le: {new Date(devis.createdAt).toLocaleDateString()}</p>
                  <div className="mt-4">
                    <Link href={`/admin/devis/${devis.id}`} passHref>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">Voir les détails</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Erreur</h1>
          <Link href="/admin" passHref>
            <Button variant="outline" className="mb-6 text-blue-600 border-blue-600 hover:bg-blue-50">
              Retour au panneau d\'administration
            </Button>
          </Link>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Une erreur s'est produite lors de la récupération des demandes de devis. Veuillez réessayer plus tard.</p>
          </div>
        </main>
      </div>
    );
  }
} 