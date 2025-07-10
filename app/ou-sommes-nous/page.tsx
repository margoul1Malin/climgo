"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Corriger les icônes Leaflet pour Next.js (problème de chemin d'icône)

const MapClient = dynamic(() => import('@/components/MapClient'), { ssr: false });

export default function OuSommesNous() {
  useEffect(() => {
    // Assurez-vous que la carte se charge correctement après le montage du composant
  }, []);

  // Coordonnées des villes
  const locations = [
    { name: 'Arcachon', lat: 44.6586, lng: -1.1686 },
    { name: 'Bordeaux', lat: 44.8378, lng: -0.5792 },
    { name: 'Libourne', lat: 44.9120, lng: -0.2437 },
    { name: 'Pessac', lat: 44.8010, lng: -0.6415 },
    { name: 'Andernos-les-Bains', lat: 44.7439, lng: -1.1071 },
    { name: 'La Teste-de-Buch', lat: 44.6256, lng: -1.1440 },
    { name: 'Gujan-Mestras', lat: 44.6286, lng: -1.0826 },
    { name: 'Le Teich', lat: 44.6355, lng: -1.0174 },
    { name: 'Biganos', lat: 44.6475, lng: -0.9798 },
    { name: 'Marcheprime', lat: 44.6931, lng: -0.9086 },
    { name: 'Mios', lat: 44.5794, lng: -0.9791 },
    { name: 'Salles', lat: 44.5486, lng: -0.8762 },
    { name: 'Belin-Béliet', lat: 44.5005, lng: -0.7764 },
    { name: 'Le Barp', lat: 44.6434, lng: -0.7736 },
    { name: 'Audenge', lat: 44.7035, lng: -1.0147 },
    { name: 'Arès', lat: 44.7749, lng: -1.1216 },
    { name: 'Lanton', lat: 44.7299, lng: -1.0482 },
    { name: 'Lège-Cap-Ferret', lat: 44.7767, lng: -1.2083 },
    { name: 'Cestas', lat: 44.7478, lng: -0.6722 },
    { name: 'Mérignac', lat: 44.8312, lng: -0.6436 }
  ];
  

  // Interface pour les données des cartes de localisation
  interface LocationCard {
    name: string;
    description: string;
  }

  // Données des cartes de localisation
  const locationCards: LocationCard[] = [
    { name: 'Arcachon', description: 'Retrouvez-nous dans cette ville pour tous vos besoins en climatisation et chauffage.' },
    { name: 'Bordeaux', description: 'Retrouvez-nous dans cette ville pour tous vos besoins en climatisation et chauffage.' },
    { name: 'Andernos', description: 'Retrouvez-nous dans cette ville pour tous vos besoins en climatisation et chauffage.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">Où Sommes-Nous ?</h1>
        <p className="text-gray-700 text-lg mb-8 max-w-3xl">Découvrez nos emplacements à Arcachon, Bordeaux et Libourne. Nous sommes là pour vous servir dans toute la région.</p>

        <div className="relative w-full h-[60vh] rounded-2xl shadow-2xl overflow-hidden border border-blue-200 backdrop-blur-sm mb-12">
          <MapClient locations={locations} />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto mb-12">
          {locationCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-blue-200 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{card.name}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="flex gap-2">
                <Link href="/" className="">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded-full px-6 py-1 shadow-md hover:shadow-lg">
                    Voir la page
                  </Button>
                </Link>
                
                <Link href="/contact" className="">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded-full px-6 py-1 shadow-md hover:shadow-lg">
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 