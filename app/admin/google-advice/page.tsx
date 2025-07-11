'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface GoogleAdvice {
  id: string;
  name: string;
  content: string;
  visitedDate?: string;
  timeAgo: string;
  ratingStar: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminGoogleAdvice() {
  const [advice, setAdvice] = useState<GoogleAdvice[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    visitedDate: '',
    timeAgo: '',
    ratingStar: 5
  });

  // Charger les avis
  const fetchAdvice = async () => {
    try {
      const response = await fetch('/api/google-advice');
      if (response.ok) {
        const data = await response.json();
        setAdvice(data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des avis:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  // Réinitialiser le formulaire
  const resetForm = () => {
    setFormData({
      name: '',
      content: '',
      visitedDate: '',
      timeAgo: '',
      ratingStar: 5
    });
    setEditingId(null);
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingId ? `/api/google-advice/${editingId}` : '/api/google-advice';
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchAdvice();
        resetForm();
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      alert('Erreur lors de la soumission');
    }
  };

  // Modifier un avis
  const handleEdit = (item: GoogleAdvice) => {
    setFormData({
      name: item.name,
      content: item.content,
      visitedDate: item.visitedDate || '',
      timeAgo: item.timeAgo,
      ratingStar: item.ratingStar
    });
    setEditingId(item.id);
  };

  // Supprimer un avis
  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet avis ?')) return;

    try {
      const response = await fetch(`/api/google-advice/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchAdvice();
      } else {
        alert('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      alert('Erreur lors de la suppression');
    }
  };

  // Générer l'initiale pour l'avatar
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Gestion des Avis Google
          </h1>
          
          {/* Formulaire d'ajout/modification */}
          <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Modifier l\'avis' : 'Ajouter un nouvel avis'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du client *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Alice CARDOSO"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Il y a combien de temps *
                </label>
                <Input
                  type="text"
                  value={formData.timeAgo}
                  onChange={(e) => setFormData({ ...formData, timeAgo: e.target.value })}
                  placeholder="Ex: il y a 2 semaines"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de visite (optionnel)
                </label>
                <Input
                  type="text"
                  value={formData.visitedDate}
                  onChange={(e) => setFormData({ ...formData, visitedDate: e.target.value })}
                  placeholder="Ex: Visité en juin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note (étoiles)
                </label>
                <select
                  value={formData.ratingStar}
                  onChange={(e) => setFormData({ ...formData, ratingStar: parseInt(e.target.value) })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={5}>5 étoiles</option>
                  <option value={4}>4 étoiles</option>
                  <option value={3}>3 étoiles</option>
                  <option value={2}>2 étoiles</option>
                  <option value={1}>1 étoile</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu de l&apos;avis *
              </label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Ex: Clim posée avec soin, super rapport qualité-prix. Merci pour le professionnalisme"
                rows={3}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                {editingId ? 'Mettre à jour' : 'Ajouter l&apos;avis'}
              </Button>
              
              {editingId && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                >
                  Annuler
                </Button>
              )}
            </div>
          </form>

          {/* Liste des avis */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Avis existants ({advice.length})
            </h2>
            
            {advice.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Aucun avis Google n&apos;a été ajouté pour le moment.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advice.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                    {/* Header avec avatar et nom */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
                        {getInitial(item.name)}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        <div className="flex items-center text-yellow-400">
                          {[...Array(item.ratingStar)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Temps */}
                    <span className="text-xs text-gray-500 mb-1 block">{item.timeAgo}</span>
                    
                    {/* Contenu */}
                    <p className="text-gray-700 mb-2 text-sm line-clamp-3">
                      {item.content}
                      {item.visitedDate && (
                        <>
                          <br />
                          <span className="text-xs text-gray-400">{item.visitedDate}</span>
                        </>
                      )}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Modifier
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Supprimer
                      </Button>
                    </div>

                    {/* Logo Google */}
                    <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-200">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-xs text-gray-500">Publié sur Google</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 