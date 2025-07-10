import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EauChaudeSanitaire() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nos Solutions d&apos;Eau Chaude Sanitaire
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Découvrez nos systèmes d&apos;eau chaude écologiques : ballons thermodynamiques et cumulus pour un confort optimal et des économies d&apos;énergie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis" passHref>
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    Obtenir un devis gratuit
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction avec image */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Solutions d&apos;Eau Chaude Moderne</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez ClimGo, nous proposons les meilleures solutions d&apos;eau chaude sanitaire pour votre confort. 
                Nos <strong>ballons thermodynamiques</strong> et <strong>cumulus</strong> 
                vous garantissent une eau chaude constante tout en respectant l&apos;environnement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ballon thermodynamique</h3>
                    <p className="text-gray-600 text-sm">Économies d&apos;énergie jusqu&apos;à 70%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cumulus électrique</h3>
                    <p className="text-gray-600 text-sm">Fiabilité et simplicité d&apos;installation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/OChode.webp" 
                  alt="Schéma ballon thermodynamique ClimGo"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nos Solutions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Solutions d&apos;Eau Chaude Sanitaire</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Ballon Thermodynamique */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Ballon Thermodynamique</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Le <strong>ballon thermodynamique</strong> utilise une pompe à chaleur intégrée pour chauffer l&apos;eau. 
                Solution écologique et économique, il capte les calories de l&apos;air pour produire votre eau chaude.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Économies d&apos;énergie jusqu&apos;à 70%
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Éligible aux aides financières
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Respectueux de l&apos;environnement
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/BallonThermodynamique.png" 
                  alt="Ballon thermodynamique installation ClimGo"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Cumulus Électrique */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cumulus Électrique</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Le <strong>cumulus électrique</strong> est la solution classique et fiable pour votre eau chaude. 
                Simple d&apos;installation et d&apos;entretien, il garantit une eau chaude constante pour votre foyer.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Installation simple et rapide
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fiabilité éprouvée
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entretien minimal requis
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/PylaCumulus.jpeg" 
                  alt="Installation cumulus électrique par ClimGo"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Comment fonctionne votre <span className="text-blue-600">Eau Chaude Sanitaire</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">1. Captation d&apos;énergie</h3>
              <p className="text-gray-600 leading-relaxed">
                Le ballon thermodynamique capte les calories de l&apos;air ambiant grâce à sa pompe à chaleur intégrée.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-indigo-500">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">2. Chauffage de l&apos;eau</h3>
              <p className="text-gray-600 leading-relaxed">
                L&apos;énergie captée est transmise à l&apos;eau du ballon via un échangeur thermique très efficace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-cyan-500">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0113.803 8l-.43.158a6 6 0 01-3.746 0l-.43-.158A6 6 0 018 4.972L7.757 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">3. Distribution</h3>
              <p className="text-gray-600 leading-relaxed">
                L&apos;eau chaude est stockée et distribuée instantanément vers tous vos points de puisage.
              </p>
            </div>
          </div>
        </section>

        {/* Installation avec image */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/PylaCumulus.jpeg" 
                  alt="Installation eau chaude sanitaire par ClimGo"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Installation <span className="text-blue-600">Professionnelle</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre équipe d&apos;experts ClimGo assure une installation rapide et professionnelle de votre système d&apos;eau chaude sanitaire. 
                Nous respectons les normes en vigueur et vous garantissons un service de qualité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Étude de vos besoins</h4>
                    <p className="text-gray-600 text-sm">Dimensionnement optimal selon votre consommation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Installation certifiée</h4>
                    <p className="text-gray-600 text-sm">Techniciens qualifiés pour une pose aux normes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Accompagnement aides</h4>
                    <p className="text-gray-600 text-sm">Aide aux démarches pour les subventions disponibles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Questions fréquentes sur l&apos;Eau Chaude Sanitaire</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quelle capacité de ballon choisir ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La capacité dépend du nombre d&apos;occupants et de vos habitudes de consommation. 
                Comptez environ 50L par personne pour un ballon thermodynamique. Nos experts ClimGo vous conseillent pour le dimensionnement optimal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Combien coûte un ballon thermodynamique ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le prix varie entre 2 000€ et 4 500€ installation comprise selon la capacité et la marque. 
                Les aides financières (MaPrimeRénov&apos;, CEE) peuvent réduire significativement ce coût.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quelles économies avec un ballon thermodynamique ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un ballon thermodynamique permet d&apos;économiser jusqu&apos;à 70% sur vos factures d&apos;eau chaude par rapport à un chauffe-eau électrique classique. 
                L&apos;investissement est rentabilisé en 4 à 6 ans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quel entretien pour mon système d&apos;eau chaude ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un entretien annuel est recommandé pour les ballons thermodynamiques (vérification du fluide frigorigène, nettoyage des filtres). 
                ClimGo propose des contrats d&apos;entretien pour maintenir les performances optimales.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Prêt pour votre nouvelle <span className="text-blue-300">Eau Chaude Sanitaire</span> ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez ClimGo dès aujourd&apos;hui pour un devis personnalisé et profitez d&apos;économies durables sur vos factures d&apos;eau chaude.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                Nous appeler
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 