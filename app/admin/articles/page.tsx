"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import SessionWrapper from '@/components/SessionWrapper';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  image?: string;
  slug: string;
  createdAt: string;
}

export default function Articles() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin');
    } else if (status === 'authenticated') {
      fetchArticles();
    }
    // Ne rien faire si status est 'loading' pour éviter une redirection prématurée
  }, [status, router]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/articles');
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      } else {
        setError('Erreur lors de la récupération des articles');
      }
    } catch (err) {
      setError('Erreur lors de la récupération des articles');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, imageUrl, slug }),
      });
      if (res.ok) {
        const newArticle = await res.json();
        setArticles([...articles, newArticle]);
        setIsCreating(false);
        setTitle('');
        setContent('');
        setImageUrl('');
        setSlug('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de la création de l\'article');
      }
    } catch (err) {
      setError('Erreur lors de la création de l\'article');
      console.error(err);
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEditing) return;
    try {
      const res = await fetch(`/api/articles/${isEditing}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, imageUrl, slug }),
      });
      if (res.ok) {
        const updatedArticle = await res.json();
        setArticles(articles.map(article => article.id === isEditing ? updatedArticle : article));
        setIsEditing(null);
        setTitle('');
        setContent('');
        setImageUrl('');
        setSlug('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de la modification de l\'article');
      }
    } catch (err) {
      setError('Erreur lors de la modification de l\'article');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setArticles(articles.filter(article => article.id !== id));
      } else {
        setError('Erreur lors de la suppression de l\'article');
      }
    } catch (err) {
      setError('Erreur lors de la suppression de l\'article');
      console.error(err);
    }
  };

  const startEditing = (article: Article) => {
    setIsEditing(article.id);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.image);
    setSlug(article.slug);
  };

  if (status === 'loading') {
    return (
      <SessionWrapper>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
            <p className="text-gray-600">Chargement...</p>
          </main>
          <Footer />
        </div>
      </SessionWrapper>
    );
  }

  if (!session) {
    return null; // Redirection gérée par useEffect
  }

  return (
    <SessionWrapper>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Gestion des Articles</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button onClick={() => setIsCreating(true)} className="mb-6 bg-blue-600 text-white hover:bg-blue-700">
            Créer un nouvel article
          </Button>
          <Button onClick={() => router.push('/admin')} variant="outline" className="mb-6 ml-4 text-blue-600 border-blue-600 hover:bg-blue-50">
            Retour au panneau d&apos;administration
          </Button>

          {(isCreating || isEditing) && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Modifier l\'article' : 'Créer un nouvel article'}</h2>
                <form onSubmit={isEditing ? handleEdit : handleCreate} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Titre</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="content">Contenu</Label>
                    <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required className="min-h-[100px]" />
                  </div>
                  <div>
                    <Label htmlFor="imageUrl">URL de l&apos;image (optionnel)</Label>
                    <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug (identifiant unique)</Label>
                    <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">{isEditing ? 'Enregistrer les modifications' : 'Créer'}</Button>
                    <Button type="button" variant="outline" onClick={() => {
                      setIsCreating(false);
                      setIsEditing(null);
                      setTitle('');
                      setContent('');
                      setImageUrl('');
                      setSlug('');
                    }}>Annuler</Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {loading ? (
            <p className="text-gray-600">Chargement des articles...</p>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {articles.map(article => (
                <div key={article.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Slug: {article.slug}</p>
                  <p className="text-sm text-gray-500 mb-2">Créé le: {new Date(article.createdAt).toLocaleDateString('fr-FR')}</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" onClick={() => startEditing(article)}>Modifier</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(article.id)}>Supprimer</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Aucun article trouvé. Créez-en un nouveau !</p>
          )}
        </main>
        <Footer />
      </div>
    </SessionWrapper>
  );
} 