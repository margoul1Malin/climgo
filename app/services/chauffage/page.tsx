import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Chauffage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 to-orange-700 text-white py-20 mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nos Solutions de <span className="text-orange-300">Chauffage</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Découvrez nos systèmes de <strong>chauffage écologiques</strong> : pompes à chaleur Air/Eau et plancher chauffant pour un confort optimal et des économies d&apos;énergie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" passHref>
                  <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    Obtenir un devis gratuit
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
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
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Solutions de <span className="text-green-600">Chauffage Moderne</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez ClimGo, nous proposons les meilleures solutions de chauffage écologiques et économiques. 
                Nos <strong>pompes à chaleur Air/Eau</strong> et systèmes de <strong>plancher chauffant</strong> 
                vous garantissent un confort optimal tout en respectant l&apos;environnement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Pompe à chaleur Air/Eau</h3>
                    <p className="text-gray-600 text-sm">Jusqu&apos;à 70% d&apos;économies sur vos factures de chauffage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Plancher chauffant</h3>
                    <p className="text-gray-600 text-sm">Confort thermique homogène et chaleur douce</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/PacAirEau.png" 
                  alt="Schéma pompe à chaleur Air/Eau ClimGo"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Solutions de <span className="text-green-600">Chauffage Écologique</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Pompe à Chaleur Air/Eau */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pompe à Chaleur Air/Eau</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                La <strong>pompe à chaleur Air/Eau</strong> capte l&apos;énergie de l&apos;air extérieur pour chauffer l&apos;eau de votre circuit de chauffage. 
                Solution écologique et économique, elle alimente vos radiateurs et votre plancher chauffant.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Économies d&apos;énergie jusqu&apos;à 70%
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fonctionne jusqu&apos;à -15°C
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                  Compatible installations existantes
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/PacAirEauReal.jpg" 
                  alt="Installation pompe à chaleur Air/Eau par ClimGo"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Plancher Chauffant */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Plancher Chauffant</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Le <strong>plancher chauffant</strong> diffuse une chaleur douce et homogène par le sol. 
                Invisible et silencieux, il offre un confort thermique optimal et se marie parfaitement avec une pompe à chaleur Air/Eau.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chaleur douce et homogène
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Économies d&apos;énergie maximales
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                  Invisible et silencieux
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/PlancherChauffant.jpeg" 
                  alt="Installation plancher chauffant avec pompe à chaleur"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 py-12 rounded-2xl">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Comment Fonctionne une Pompe à Chaleur <span className="text-green-600">Air/Eau</span> ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Captation</h3>
                <p className="text-gray-600">L&apos;unité extérieure capte les calories présentes dans l&apos;air, même à -15°C</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">2. Transformation</h3>
                <p className="text-gray-600">Le fluide frigorigène transporte et amplifie cette énergie thermique</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">3. Distribution</h3>
                <p className="text-gray-600">L&apos;eau chauffée alimente vos radiateurs, plancher chauffant ou ballon d&apos;eau chaude</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Installation Professionnelle</h3>
                  <p className="text-gray-700 mb-4">
                    Nos techniciens certifiés ClimGo installent votre pompe à chaleur Air/Eau avec précision. 
                    L&apos;unité extérieure se place dans votre jardin ou sur une terrasse, tandis que l&apos;unité intérieure 
                    se connecte à votre système de chauffage existant.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Installation en 1 journée
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Compatible avec radiateurs existants
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                      Garantie fabricant 5 ans
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image 
                    src="/PacAirEauReal.jpg" 
                    alt="Installation pompe à chaleur Air/Eau par ClimGo"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Applications de la Pompe à Chaleur <span className="text-green-600">Air/Eau</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Radiateurs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Image 
                    src="/FoChofaj.jpg" 
                    alt="Radiateur design"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Chauffage par Radiateurs</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Votre pompe à chaleur Air/Eau alimente directement vos radiateurs existants. 
                Compatible avec tous types de radiateurs : fonte, acier, aluminium.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Montée en température rapide
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Régulation pièce par pièce
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Aucune modification nécessaire
                </li>
              </ul>
            </div>

            {/* Plancher Chauffant */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Plancher Chauffant</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                La pompe à chaleur Air/Eau est parfaite pour alimenter un plancher chauffant. 
                Confort optimal avec une température homogène dans toute la pièce.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chaleur douce et homogène
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Économies d&apos;énergie maximales
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Invisible et silencieux
                </li>
              </ul>
              <div className="mt-6">
                <Image 
                  src="/PlancherChauffant.jpeg" 
                  alt="Installation plancher chauffant avec pompe à chaleur"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Aides Financières */}
        <section className="mb-16 bg-gradient-to-br from-green-100 to-emerald-100 py-12 rounded-2xl">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Financez Votre Pompe à Chaleur <span className="text-green-600">Air/Eau</span></h2>
            <p className="text-xl text-center mb-10 text-gray-700">Profitez des nombreuses aides de l&apos;État pour votre projet écologique</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Jusqu&apos;à 5 000€</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">MaPrimeRénov&apos;</div>
                <p className="text-gray-600 text-sm">Aide de l&apos;État selon vos revenus</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Jusqu&apos;à 4 000€</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">CEE</div>
                <p className="text-gray-600 text-sm">Certificats d&apos;Économie d&apos;Énergie</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Crédit d&apos;Impôt</div>
                <p className="text-gray-600 text-sm">Réduction fiscale immédiate</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">0%</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Éco-PTZ</div>
                <p className="text-gray-600 text-sm">Prêt à taux zéro jusqu&apos;à 50 000€</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">ClimGo vous accompagne dans toutes vos démarches</p>
              <Link href="/devis">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  Calculer mes aides
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Questions Fréquentes sur les Pompes à Chaleur <span className="text-green-600">Air/Eau</span></h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Quelle est la différence entre Air/Air et Air/Eau ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">La pompe à chaleur Air/Eau chauffe l&apos;eau de votre circuit de chauffage (radiateurs, plancher chauffant) et peut produire l&apos;eau chaude sanitaire. L&apos;Air/Air diffuse directement l&apos;air chaud via des unités intérieures. L&apos;<strong>Air/Eau</strong> est plus polyvalente et compatible avec vos installations existantes.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Une pompe à chaleur Air/Eau fonctionne-t-elle par grand froid ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Oui ! Les pompes à chaleur Air/Eau modernes fonctionnent efficacement jusqu&apos;à -15°C, voire -20°C pour certains modèles. Même par grand froid, elles extraient les calories de l&apos;air extérieur. ClimGo sélectionne des modèles <strong>haute performance</strong> adaptés au climat de votre région.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-600" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Combien coûte une pompe à chaleur Air/Eau ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Le prix varie de 8 000€ à 16 000€ selon la puissance et les options (eau chaude sanitaire, etc.). Avec les aides de l&apos;État (MaPrimeRénov&apos;, CEE...), le coût final peut être réduit de 50% ou plus. ClimGo vous propose un <strong>devis gratuit</strong> et vous accompagne pour maximiser vos aides.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-600" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Peut-on installer une pompe à chaleur Air/Eau sur une installation existante ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Absolument ! La pompe à chaleur Air/Eau se connecte facilement à votre système de chauffage existant : radiateurs, plancher chauffant, ballon d&apos;eau chaude. Nos techniciens ClimGo évaluent votre installation et adaptent la <strong>pompe à chaleur</strong> pour un fonctionnement optimal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center bg-gradient-to-br from-red-600 to-orange-700 text-white py-16 rounded-2xl shadow-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Passez à la Pompe à Chaleur <span className="text-orange-300">Air/Eau</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Nos experts ClimGo vous accompagnent de A à Z : étude thermique, installation certifiée, 
              démarches d&apos;aides et service après-vente. Votre confort écologique est notre engagement.
            </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact" passHref>
                <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                  Nous appeler maintenant
              </Button>
            </Link>
            </div>
            <p className="text-sm mt-6 opacity-75">Devis gratuit • Sans engagement • Réponse sous 24h</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 