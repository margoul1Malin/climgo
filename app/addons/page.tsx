"use client";

import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';

// Définir une interface pour le type Review
export interface Review {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Addons() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des avis:', error);
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const deleteReview = async (id: string) => {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setReviews(reviews.filter(review => review.id !== id));
      } else {
        console.error('Erreur lors de la suppression de l\'avis');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'avis:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        const newReview = await res.json();
        setReviews([newReview, ...reviews]);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error('Erreur lors de la soumission de l\'avis');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission de l\'avis:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="w-fullmx-auto px-4 py-8 flex-grow">
        {/* Phrase explicative pour l'ami */}
        <section className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Zone de feedback pour le site</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Salut, c&apos;est ici que tu peux mettre les corrections ou suggestions que tu veux apporter au site. Utilise le formulaire à gauche pour ajouter tes commentaires, ils apparaîtront à droite.</p>
        </section>

        {/* Conteneur principal avec formulaire à gauche et avis à droite */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {/* Formulaire à gauche */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Ajouter une suggestion ou correction</h2>
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2 text-gray-700 text-sm">Titre de la suggestion</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Résumé de la correction"
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block mb-2 text-gray-700 text-sm">Détails</label>
                <textarea
                  id="content"
                  name="content"
                  placeholder="Expliquez ce qui doit être corrigé ou amélioré..."
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 min-h-[120px]"
                  required
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 w-full md:w-auto px-4 py-2 text-sm">
                  Soumettre
                </Button>
              </div>
            </form>
          </div>

          {/* Liste des avis à droite - Prend toute la largeur */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 w-full md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Suggestions et corrections</h2>
            {loading ? (
              <p className="text-gray-500 text-sm w-full text-center">Chargement des suggestions...</p>
            ) : reviews.length > 0 ? (
              <div className="space-y-4 max-h-[400px] overflow-y-auto w-full">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-3 last:border-b-0 w-full flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-gray-800 mb-1">{review.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{review.content}</p>
                      <p className="text-xs text-gray-400">Ajouté le {new Date(review.createdAt).toLocaleDateString('fr-FR')}</p>
                    </div>
                    <Button 
                      onClick={() => deleteReview(review.id)} 
                      variant="destructive" 
                      size="sm" 
                      className="text-white bg-red-500 hover:bg-red-600"
                    >
                      Supprimer
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm w-full text-center">Aucune suggestion pour le moment. Ajoutez-en une via le formulaire !</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 