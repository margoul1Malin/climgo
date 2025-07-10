"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditSeoPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
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
          setTitle(data.title);
          setDescription(data.description);
          setKeywords(data.keywords);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/seo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, keywords }),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'entrée SEO');
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
          <h1 className="text-3xl font-bold">Modifier une Entrée SEO</h1>
          <p className="text-sm mt-2">Mettez à jour les métadonnées pour {pageName}</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input 
                type="text" 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                rows={3} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">Mots-clés (séparés par des virgules)</label>
              <input 
                type="text" 
                id="keywords" 
                value={keywords} 
                onChange={(e) => setKeywords(e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
                required 
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Link href="/admin/seochecklist" className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Annuler
              </Link>
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Mettre à jour
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}