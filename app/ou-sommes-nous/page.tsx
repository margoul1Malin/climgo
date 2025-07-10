"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Link from 'next/link';

// Corriger les icônes Leaflet pour Next.js (problème de chemin d'icône)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function OuSommesNous() {
  useEffect(() => {
    // Assurez-vous que la carte se charge correctement après le montage du composant
  }, []);

  // Coordonnées des villes
  const locations = [
    { name: 'Arcachon', lat: 44.6586, lng: -1.1686 },
    { name: 'Bordeaux', lat: 44.8378, lng: -0.5792 },
    { name: 'Libourne', lat: 44.9120, lng: -0.2437 },
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
    { name: 'Libourne', description: 'Retrouvez-nous dans cette ville pour tous vos besoins en climatisation et chauffage.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">Où Sommes-Nous ?</h1>
        <p className="text-gray-700 text-lg mb-8 max-w-3xl">Découvrez nos emplacements à Arcachon, Bordeaux et Libourne. Nous sommes là pour vous servir dans toute la région.</p>

        <div className="relative w-full h-[60vh] rounded-2xl shadow-2xl overflow-hidden border border-blue-200 backdrop-blur-sm mb-12">
          <MapContainer 
            center={[44.8378, -0.5792]} 
            zoom={9} 
            style={{ height: '100%', width: '100%' }} 
            className="z-10"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((loc, index) => (
              <Marker key={index} position={[loc.lat, loc.lng]}>
                <Popup>
                  <span className="font-bold text-blue-700">{loc.name}</span><br />
                  Nous sommes ici pour vous aider !
                </Popup>
              </Marker>
            ))}
          </MapContainer>
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