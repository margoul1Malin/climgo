"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SeoMetadata {
  id: string;
  title: string;
  description: string;
  keywords: string;
  pageName: string;
  pageTag?: { name: string };
}

// Définition des éléments de la checklist SEO avec un état isChecked
const SEO_CHECKLIST_ITEMS = [
  { id: 1, text: 'Balise <title>', isChecked: true },
  { id: 2, text: 'Balise <meta>', isChecked: true },
  { id: 3, text: '<h1> & <h2>', isChecked: true },
  { id: 4, text: 'Contenu riche', isChecked: true },
  { id: 5, text: 'Urls Uniques (Arcachon, etc..)', isChecked: false },
  { id: 6, text: 'KeyWord MiniStuffing', isChecked: true },
  { id: 7, text: 'Description Alternative des Images', isChecked: true },
  { id: 9, text: 'MAP Interactive pour le Ou Somme Nous ?', isChecked: true },
  { id: 10, text: 'Rajouter un Blog', isChecked: true },
  { id: 11, text: 'PageSpeed', isChecked: true },
  { id: 12, text: 'Bing Webmaster Tools & Google Search Console', isChecked: false },
  { id: 13, text: 'Sitemap.xml & Robots.txt', isChecked: true },
  { id: 14, text: 'OpenGraph & Twitter Card', isChecked: false },
  { id: 15, text: 'Inscriptions : PagesJaunes, Houzz, TrustPilot, Yelp', isChecked: false },
  { id: 16, text: 'Google Business Profile', isChecked: false },
  { id: 17, text: 'Backlinking Strategy', isChecked: false },
  { id: 18, text: 'Demander aux clients de faire des avis google', isChecked: false },
  { id: 19, text: 'Activité sur les comptes réseaux sociaux', isChecked: false },
];

export default function SeoChecklistPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [seoData, setSeoData] = useState<SeoMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    } else if (status === 'authenticated') {
      fetchSeoData();
    }
  }, [status, router]);

  const fetchSeoData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/seo');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données SEO');
      }
      const data = await response.json();
      setSeoData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen bg-gray-50">Chargement...</div>;
  if (error) return <div className="text-red-500 text-center p-4 bg-gray-50">Erreur : {error}</div>;
  if (!session) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Gestion SEO</h1>
          <p className="text-sm mt-2">Gérez les métadonnées SEO de vos pages</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 pb-8 flex justify-center">
        <button onClick={() => window.location.href = '/admin'} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Retour au panneau d&apos;administration</button>
      </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Métadonnées SEO des Pages</h2>
            <Link 
              href="/admin/seochecklist/add" 
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ajouter une Page
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {loading ? (
            <p className="text-gray-600">Chargement des métadonnées...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {seoData.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-gray-500">Aucune donnée SEO trouvée.</td>
                    </tr>
                  ) : (
                    seoData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.pageTag?.name || item.pageName || 'Non défini'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 line-clamp-2">{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link href={`/admin/seochecklist/edit/${item.id}`} className="text-indigo-600 hover:text-indigo-900 transition duration-200 mr-2">Modifier</Link>
                          <Link href={`/admin/seochecklist/delete/${item.id}`} className="text-red-600 hover:text-red-800 transition duration-200">Supprimer</Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checklist SEO</h2>
          <p className="text-lg text-gray-600 mb-6">Suivez ces étapes pour optimiser le référencement de votre site et améliorer sa visibilité sur les moteurs de recherche.</p>
          <ul className="space-y-3">
            {SEO_CHECKLIST_ITEMS.map(item => (
              <li key={item.id} className="flex items-start">
                <span className={`w-6 h-6 rounded-full mr-3 mt-1 flex-shrink-0 ${item.isChecked ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center text-white`}>
                  {item.isChecked && '✓'}
                </span>
                <span className={`text-gray-700 ${item.isChecked ? 'line-through text-gray-400' : ''}`}>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">Modifiez le code pour mettre à jour l&apos;état isChecked de chaque élément.</p>
        </div>
      </main>
    </div>
  );
} 