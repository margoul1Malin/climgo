"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { signOut } from 'next-auth/react';

export default function AdminPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/admin');
    }
  }, [status, router]);

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
      <div className="flex justify-end container mx-auto px-4 mt-4 mt-24">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Se déconnecter
        </button>
      </div>
      <main className="flex-grow container mx-auto px-4 py-8 my-40">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Panneau d&apos;Administration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/articles" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion des Articles</h2>
            <p className="text-gray-600">Créer, modifier ou supprimer des articles du blog.</p>
          </Link>
          <Link href="/admin/devis" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion des Devis</h2>
            <p className="text-gray-600">Voir et gérer les demandes de devis.</p>
          </Link>
          <Link href="/admin/contact" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion des Contacts</h2>
            <p className="text-gray-600">Voir et gérer les messages de contact.</p>
          </Link>
          <Link href="/admin/seochecklist" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion SEO</h2>
            <p className="text-gray-600">Gérer les métadonnées SEO pour les pages du site.</p>
          </Link>
          <Link href="/admin/pagetags" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion des Tags de Page</h2>
            <p className="text-gray-600">Ajouter et gérer les tags de page pour le SEO.</p>
          </Link>
          <Link href="/admin/contact-infos" className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestion des Infos de Contact</h2>
            <p className="text-gray-600">Modifier les informations de contact.</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 