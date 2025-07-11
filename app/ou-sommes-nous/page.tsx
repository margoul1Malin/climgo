"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    { name: 'Mérignac', lat: 44.8312, lng: -0.6436 },
  
    // Ajouts :
    { name: 'Gradignan', lat: 44.7737, lng: -0.6336 },
    { name: 'Canéjan', lat: 44.7542, lng: -0.6444 },
    { name: 'Lormont', lat: 44.8740, lng: -0.5191 },
    { name: 'Cenon', lat: 44.8556, lng: -0.5247 },
    { name: 'Floirac', lat: 44.8266, lng: -0.5242 },
    { name: 'Bruges', lat: 44.8846, lng: -0.6066 },
    { name: 'Eysines', lat: 44.8791, lng: -0.6553 },
    { name: 'Talence', lat: 44.8077, lng: -0.5963 },
    { name: 'Villenave-d’Ornon', lat: 44.7733, lng: -0.5489 },
    { name: 'Artigues-près-Bordeaux', lat: 44.8574, lng: -0.5009 },
    { name: 'Le Haillan', lat: 44.8585, lng: -0.6781 },
    { name: 'Blanquefort', lat: 44.9014, lng: -0.6315 },
    { name: 'Le Bouscat', lat: 44.8590, lng: -0.5982 },
    { name: 'Bouliac', lat: 44.8161, lng: -0.4983 },
    { name: 'Cadaujac', lat: 44.7303, lng: -0.5311 },
    { name: 'Lugos', lat: 44.4877, lng: -0.8964 },
    { name: 'Val de l\'Eyre', lat: 44.5250, lng: -0.8380 } // approximation géographique
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 bg-white my-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">Où Sommes-Nous ?</h1>
        <p className="text-gray-700 text-lg mb-8 max-w-3xl">Découvrez nos emplacements à Arcachon, Bordeaux et Libourne. Nous sommes là pour vous servir dans toute la région.</p>

        <div className="relative w-full h-[60vh] rounded-2xl shadow-2xl overflow-hidden border border-blue-200 backdrop-blur-sm mb-12">
          <MapClient locations={locations} />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        

        {/* Zones desservies par ClimGO */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-xl p-8 mb-16 border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">Zones desservies par ClimGO</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6"><strong>Chez ClimGO</strong>, nous intervenons sur un large périmètre autour de Marcheprime, pour accompagner vos projets de chauffage, climatisation, pompes à chaleur ou chauffe-eau.<br/><strong>Notre objectif : offrir un service sur mesure, rapide et fiable, où que vous soyez.</strong><br/>Nous desservons l’ensemble du <strong>Bassin d’Arcachon</strong>, du <strong>Sud Gironde</strong> jusqu’aux abords de <strong>Bordeaux</strong>, avec une connaissance pointue des spécificités locales.<br/><strong>Nos équipes se déplacent directement chez vous, avec un service calibré au millimètre, quelle que soit votre commune.</strong><br/>Retrouvez ci-dessous la liste des principales villes où nous intervenons.<br/>Chaque lien vous redirige vers une page dédiée, avec nos prestations détaillées pour votre secteur.</p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Bassin d'Arcachon */}
            <div className="bg-white rounded-xl shadow p-6 border border-blue-100 hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Bassin d&apos;Arcachon</h3>
              <p className="text-gray-600 mb-2 text-sm space-y-4">ClimGO intervient dans tout le Bassin d&apos;Arcachon et ses environs. Chaque ville dispose d&apos;une page dédiée pour découvrir nos services de climatisation, chauffage et pompe à chaleur :</p>
              <ul className="space-y-4 mt-6">
                {['Arcachon','La Teste-de-Buch','Gujan-Mestras','Le Teich','Biganos','Marcheprime','Audenge','Lège-Cap-Ferret','Lanton','Arès','Andernos-les-Bains'].map(ville => (
                  <li key={ville}>
                    <Link href={`/villes/${ville.toLowerCase().replace(/ /g,'-').replace(/’/g,'')}`} className="text-blue-700 hover:text-green-600 font-medium transition underline underline-offset-2">{ville}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Val de l'Eyre */}
            <div className="bg-white rounded-xl shadow p-6 border border-green-100 hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-3">Val de l&apos;Eyre</h3>
              <p className="text-gray-600 mb-2 text-sm space-y-4">ClimGO intervient  dans toutes les communes du Val de l&apos;Eyre et ses environs. Chaque ville dispose d&apos;une page dédiée pour découvrir nos services en climatisation, chauffage et pompe à chaleur :</p>
              <ul className="space-y-4 mt-6">
                {['Belin-Béliet','Salles','Le Barp','Lugos','Mios'].map(ville => (
                  <li key={ville}>
                    <Link href={`/villes/${ville.toLowerCase().replace(/ /g,'-').replace(/’/g,'')}`} className="text-green-700 hover:text-blue-600 font-medium transition underline underline-offset-2">{ville}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Agglomération Bordelaise */}
            <div className="bg-white rounded-xl shadow p-6 border border-yellow-100 hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">Agglomération Bordelaise</h3>
              <p className="text-gray-600 mb-2 text-sm space-y-4">ClimGO intervient également dans toute l&apos;agglomération bordelaise et les communes voisines. Chaque ville dispose de sa propre page dédiée pour découvrir nos services de chauffage, climatisation et pompe à chaleur :</p>
              <ul className="space-y-4 mt-6 grid grid-cols-2">
                {['Bordeaux','Mérignac','Pessac','Gradignan','Canéjan','Cestas','Lormont','Cenon','Floirac','Bruges','Eysines','Talence','Villenave-d’Ornon','Artigues-près-Bordeaux','Le Haillan','Blanquefort','Le Bouscat','Bouliac','Cadaujac'].map(ville => (
                  <li key={ville}>
                    <Link href={`/villes/${ville.toLowerCase().replace(/ /g,'-').replace(/’/g,'')}`} className="text-yellow-700 hover:text-blue-700 font-medium transition underline underline-offset-2">{ville}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 