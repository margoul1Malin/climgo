"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function DeleteSeoPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [pageName, setPageName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
      return;
    }
    
    if (status === 'authenticated') {
      const fetchSeoData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/seo/${id}`);
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données SEO');
          }
          const data = await response.json();
          if (data.pageTag) {
            setPageName(data.pageTag.name);
          } else {
            setPageName('Page inconnue');
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Erreur inconnue');
        } finally {
          setLoading(false);
        }
      };

      fetchSeoData();
    }
  }, [status, router, id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/seo/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'entrée SEO');
      }
      router.push('/admin/seochecklist');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen bg-gray-50">Chargement...</div>;
  if (error) return <div className="text-red-500 text-center p-4 bg-gray-50">Erreur : {error}</div>;
  if (!session) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Supprimer une Entrée SEO</h1>
          <p className="text-sm mt-2">Confirmez la suppression pour {pageName}</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-700 mb-6">Êtes-vous sûr de vouloir supprimer cette entrée SEO pour {pageName} ? Cette action est irréversible.</p>
          <div className="flex justify-end gap-3">
            <Link href="/admin/seochecklist" className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Annuler
            </Link>
            <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Supprimer
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}