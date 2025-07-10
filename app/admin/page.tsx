"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      // Si l'utilisateur est connecté, rediriger ou afficher le panneau admin
      router.push('/admin');
    }
  }, [status, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
      if (result?.error) {
        setError('Nom d\'utilisateur ou mot de passe incorrect');
      } else {
        router.push('/admin');
      }
    } catch (err) {
      setError('Erreur lors de la connexion');
      console.error(err);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const result = await signIn('credentials', {
          redirect: false,
          username,
          password,
        });
        if (result?.error) {
          setError('Erreur lors de la connexion après enregistrement');
        } else {
          router.push('/admin');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Erreur lors de l\'enregistrement');
      }
    } catch (err) {
      setError('Erreur lors de l\'enregistrement');
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/admin');
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

  if (status !== 'authenticated') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{isRegistering ? 'Enregistrement Administrateur' : 'Connexion Administrateur'}</h1>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="block mb-2 text-gray-700">Nom d&apos;utilisateur</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Entrez votre nom d'utilisateur"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-2 text-gray-700">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                {isRegistering ? 'S\'enregistrer et se connecter' : 'Se connecter'}
              </Button>
            </form>
            <Button 
              variant="outline" 
              onClick={() => setIsRegistering(!isRegistering)} 
              className="w-full mt-4 text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              {isRegistering ? 'Déjà un compte ? Se connecter' : 'Pas de compte ? S\'enregistrer'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Panneau d&apos;administration</h1>
        <p className="text-lg text-gray-600 mb-8">Bienvenue, {session.user?.name || 'Utilisateur'}. Ici, vous pouvez gérer les articles de blog et autres contenus.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="grid grid-rows-3 h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-indigo-300 text-center">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Gestion des Articles</h2>
            <p className="text-gray-600 mb-4">Créer, modifier ou supprimer des articles pour le blog.</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/admin/articles')}
              className="text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Gérer les Articles
            </Button>
          </div>
          <div className="grid grid-rows-3 h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-green-300 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Gestion des Devis</h2>
            <p className="text-gray-600 mb-4">Voir et gérer les demandes de devis des clients.</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/admin/devis')}
              className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Gérer les Devis
            </Button>
          </div>
          <div className="grid grid-rows-3 h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-violet-300 text-center">
            <h2 className="text-2xl font-bold mb-4 text-violet-700">Gestion des Contacts</h2>
            <p className="text-gray-600 mb-4">Voir et gérer les demandes de contact des visiteurs.</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/admin/contact')}
              className="text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Gérer les Contacts
            </Button>
          </div>
          <div className="grid grid-rows-3 h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-violet-300 text-center">
            <h2 className="text-2xl font-bold mb-4 text-violet-700">Gestion SEO</h2>
            <p className="text-gray-600 mb-4">La gestion On-Page & Checklist Off-Page</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/admin/seochecklist')}
              className="text-violet-700 border-violet-700 hover:bg-violet-700 hover:text-white transition-all duration-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Gérer le SEO
            </Button>
          </div>
        </div>
        <Button 
          onClick={handleLogout} 
          variant="destructive" 
          className="mt-8 bg-red-500 text-white hover:bg-red-600"
        >
          Se déconnecter
        </Button>
      </main>
      <Footer />
    </div>
  );
} 