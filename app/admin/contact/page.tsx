"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import prismadb from '@/lib/prismadb';

export default function ContactQueriesPage() {
  const router = useRouter();
  const [contactQueries, setContactQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactQueries = async () => {
      try {
        const response = await fetch('/api/contact');
        if (response.ok) {
          const data = await response.json();
          setContactQueries(data);
        } else {
          setError('Erreur lors de la récupération des demandes de contact.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des demandes de contact:', error);
        setError('Une erreur s\'est produite lors de la récupération des données.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactQueries();
  }, []);

  const handleViewDetails = (id: string) => {
    router.push(`/admin/contact/${id}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-600">Chargement des demandes de contact...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-red-600">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Gestion des Demandes de Contact</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactQueries.length === 0 ? (
            <div className="col-span-full text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200">
              <p className="text-gray-600 text-lg">Aucune demande de contact trouvée.</p>
            </div>
          ) : (
            contactQueries.map((query) => (
              <div key={query.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300">
                <h2 className="text-xl font-semibold mb-2 text-indigo-700">{query.nom}</h2>
                <p className="text-gray-600 mb-1"><span className="font-medium">Email:</span> {query.email}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Sujet:</span> {query.sujet}</p>
                <p className="text-gray-600 mb-4 line-clamp-2"><span className="font-medium">Message:</span> {query.message}</p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(query.id)}
                    className="text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300 rounded-full px-6 py-1 shadow-md hover:shadow-lg"
                  >
                    Voir Détails
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 