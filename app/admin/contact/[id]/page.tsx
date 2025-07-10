"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactQueryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [contactQuery, setContactQuery] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactQuery = async () => {
      try {
        const response = await fetch(`/api/contact/${id}`);
        if (response.ok) {
          const data = await response.json();
          setContactQuery(data);
        } else {
          setError('Erreur lors de la récupération de la demande de contact.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la demande de contact:', error);
        setError('Une erreur s\'est produite lors de la récupération des données.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactQuery();
  }, [id]);

  const handleBack = () => {
    router.push('/admin/contact');
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-600">Chargement des détails de la demande de contact...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !contactQuery) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
          <div className="flex justify-center items-center h-64">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl text-center max-w-md">
              <p className="text-lg">{error || 'Demande de contact non trouvée.'}</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
              className="text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg"
            >
              Retour à la liste
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50 flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:border-indigo-300">
          <h1 className="text-3xl font-extrabold mb-6 text-indigo-700 text-center">Détails de la Demande de Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Informations de Contact</h2>
              <p className="text-gray-700 mb-2"><span className="font-medium">Nom:</span> {contactQuery.nom}</p>
              <p className="text-gray-700 mb-2"><span className="font-medium">Email:</span> {contactQuery.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Détails de la Demande</h2>
              <p className="text-gray-700 mb-2"><span className="font-medium">Sujet:</span> {contactQuery.sujet}</p>
              <p className="text-gray-700 mb-2"><span className="font-medium">Date de création:</span> {new Date(contactQuery.createdAt).toLocaleString()}</p>
            </div>
            <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Message</h2>
              <p className="text-gray-700 whitespace-pre-line">{contactQuery.message}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
              className="text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg"
            >
              Retour à la liste
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 