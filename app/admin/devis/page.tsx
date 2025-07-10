"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DevisPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [devis, setDevis] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin');
    } else if (status === 'authenticated') {
      fetchDevis();
    }
  }, [status, router]);

  const fetchDevis = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/devis');
      if (res.ok) {
        const data = await res.json();
        setDevis(data);
      } else {
        setError('Erreur lors de la récupération des devis : Route API non trouvée ou erreur serveur');
      }
    } catch (err) {
      setError('Erreur lors de la récupération des devis : ' + (err instanceof Error ? err.message : 'Erreur inconnue'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <p className="text-gray-600">Chargement...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!session) {
    return null; // Redirection gérée par useEffect
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Devis</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {loading ? (
          <p className="text-gray-600">Chargement des devis...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Téléphone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {devis.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-gray-500">Aucun devis trouvé.</td>
                    </tr>
                  ) : (
                    devis.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name || item.nom || 'Nom non disponible'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email || 'Email non disponible'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.phone || item.telephone || 'Téléphone non disponible'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link href={`/admin/devis/${item.id}`} className="text-indigo-600 hover:text-indigo-900 transition duration-200">Voir Détails</Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <button onClick={() => router.push('/admin')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Retour au panneau d&apos;administration</button>
      </main>
      <Footer />
    </div>
  );
} 