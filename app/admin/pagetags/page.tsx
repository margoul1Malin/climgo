"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PageTagsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [pageTags, setPageTags] = useState<any[]>([]);
  const [newTagName, setNewTagName] = useState('');
  const [editingTag, setEditingTag] = useState<any>(null);
  const [editTagName, setEditTagName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin');
    } else if (status === 'authenticated') {
      fetchPageTags();
    }
  }, [status, router]);

  const fetchPageTags = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/pagetags');
      if (res.ok) {
        const data = await res.json();
        setPageTags(data);
      } else {
        setError('Erreur lors de la récupération des tags de page : Route API non trouvée ou erreur serveur');
      }
    } catch (err) {
      setError('Erreur lors de la récupération des tags de page : ' + (err instanceof Error ? err.message : 'Erreur inconnue'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagName) {
      setError('Le nom du tag de page est requis');
      return;
    }

    setSubmitLoading(true);
    setError('');

    try {
      const res = await fetch('/api/pagetags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTagName }),
      });

      if (res.ok) {
        const newTag = await res.json();
        setPageTags([...pageTags, newTag]);
        setNewTagName('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de la création du tag de page');
      }
    } catch (err) {
      setError('Erreur lors de la création du tag de page : ' + (err instanceof Error ? err.message : 'Erreur inconnue'));
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleEdit = (tag: any) => {
    setEditingTag(tag);
    setEditTagName(tag.name);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTagName) {
      setError('Le nom du tag de page est requis');
      return;
    }

    setSubmitLoading(true);
    setError('');

    try {
      const res = await fetch('/api/pagetags', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editingTag.id, name: editTagName }),
      });

      if (res.ok) {
        const updatedTag = await res.json();
        setPageTags(pageTags.map(tag => tag.id === updatedTag.id ? updatedTag : tag));
        setEditingTag(null);
        setEditTagName('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de la modification du tag de page');
      }
    } catch (err) {
      setError('Erreur lors de la modification du tag de page : ' + (err instanceof Error ? err.message : 'Erreur inconnue'));
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce tag de page ?')) {
      return;
    }

    setError('');

    try {
      const res = await fetch(`/api/pagetags?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPageTags(pageTags.filter(tag => tag.id !== id));
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de la suppression du tag de page');
      }
    } catch (err) {
      setError('Erreur lors de la suppression du tag de page : ' + (err instanceof Error ? err.message : 'Erreur inconnue'));
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Tags de Page</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        {/* Formulaire d'ajout */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-100">
          <div className="mb-4">
            <label htmlFor="newTagName" className="block text-gray-700 font-medium mb-2">Nouveau Tag de Page</label>
            <input
              type="text"
              id="newTagName"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Entrez le nom du tag de page"
            />
          </div>
          <button
            type="submit"
            disabled={submitLoading}
            className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 ${submitLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {submitLoading ? 'Ajout en cours...' : 'Ajouter'}
          </button>
        </form>

        {/* Modale d'édition */}
        {editingTag && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">Modifier le Tag de Page</h2>
              <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                  <label htmlFor="editTagName" className="block text-gray-700 font-medium mb-2">Nom du Tag</label>
                  <input
                    type="text"
                    id="editTagName"
                    value={editTagName}
                    onChange={(e) => setEditTagName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Entrez le nom du tag de page"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingTag(null)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={submitLoading}
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${submitLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {submitLoading ? 'Modification...' : 'Modifier'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Tableau des tags */}
        {loading ? (
          <p className="text-gray-600">Chargement des tags de page...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nom du Tag</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date de Création</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pageTags.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-gray-500">Aucun tag de page trouvé.</td>
                    </tr>
                  ) : (
                    pageTags.map((tag) => (
                      <tr key={tag.id} className="hover:bg-gray-50 transition duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tag.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(tag.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleEdit(tag)}
                            className="text-indigo-600 hover:text-indigo-900 transition duration-200 mr-3"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(tag.id)}
                            className="text-red-600 hover:text-red-800 transition duration-200"
                          >
                            Supprimer
                          </button>
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