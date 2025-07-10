import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EntretienEtReparation() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Design différent avec dégradé violet */}
        <section className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-24 mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAyMGg4MHYyMEgwem0yMCAwaDIwdjIwSDIwem0yMCAyMGgyMHYyMEg0MHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Garantie Décennale + Engagement 10 ans</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  Entretien & Réparation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Maintenance experte de vos équipements climatiques avec <strong>garantie décennale</strong> et <strong>engagement de service sur 10 ans</strong>. 
                Votre tranquillité d&apos;esprit, notre priorité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis" passHref>
                  <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    Contrat d&apos;entretien gratuit
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-200">
                    Intervention d&apos;urgence
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Garantie Décennale - Section mise en avant */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Garantie Décennale & Engagement 10 ans</h2>
                <p className="text-lg text-gray-600">Votre protection totale avec ClimGo</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🛡️ Garantie Décennale</h3>
                <p className="text-gray-700">
                  Tous nos travaux sont couverts par notre assurance décennale. 
                  Protection complète contre les malfaçons pendant 10 ans après installation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🤝 Engagement Service</h3>
                <p className="text-gray-700">
                  ClimGo s&apos;engage à assurer la maintenance de vos équipements pendant 10 ans. 
                  Intervention garantie, pièces détachées disponibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Services d'Entretien */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Services de <span className="text-purple-600">Maintenance Expert</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Climatisation */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/MaintenanceClim.png" 
                  alt="Maintenance climatisation ClimGo"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Entretien Climatisation</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Nettoyage filtres et évaporateur
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vérification fluide frigorigène
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contrôle performances
                  </li>
                </ul>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Obligatoire annuel
                  </span>
                </div>
              </div>
            </div>

            {/* Pompe à Chaleur */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/MaintenancePompeAChaleur.jpg" 
                  alt="Maintenance pompe à chaleur ClimGo"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Entretien Pompe à Chaleur</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contrôle circuit frigorifique
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vérification compresseur
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optimisation rendement
                  </li>
                </ul>
                <div className="text-center">
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Maintenance préventive
                  </span>
                </div>
              </div>
            </div>

            {/* Eau Chaude Sanitaire */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/MaintenanceEauChaudeSanitaire.jpg" 
                  alt="Maintenance eau chaude sanitaire ClimGo"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0113.803 8l-.43.158a6 6 0 01-3.746 0l-.43-.158A6 6 0 018 4.972L7.757 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Entretien Eau Chaude</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Détartrage ballon
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contrôle anode magnésium
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vérification soupape sécurité
                  </li>
                </ul>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Tous les 2 ans
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>


        

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-16 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Protégez vos équipements avec <span className="text-purple-200">ClimGo</span></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Garantie décennale, engagement 10 ans et maintenance experte. 
            Votre tranquillité d&apos;esprit commence ici.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                Contrat d&apos;entretien gratuit
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-200">
                Intervention d&apos;urgence
              </Button>
            </Link>
        </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 