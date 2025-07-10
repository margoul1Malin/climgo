'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';




export default function Home() {
  const [scaleIn, setScaleIn] = useState(false);

  useEffect(() => {
    setScaleIn(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image and Scale Transition */}
        <section
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Image de fond animée */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[3200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${scaleIn ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: "url('/sdb-pyla.jpeg')" }}
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4 md:px-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ClimGO - Chauffage & Climatisation
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Installation, entretien et réparation de climatisation, pompes à chaleur et eau chaude sanitaire.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/devis" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Demander un Devis
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <svg
              className="w-12 h-12 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Nos Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7.618 9.084a8.126 8.126 0 011.356-2.342M16.382 9.084a8.126 8.126 0 00-1.356-2.342M7.618 14.916a8.126 8.126 0 001.356 2.342m7.408-2.342a8.126 8.126 0 011.356 2.342M9 11a8.09 8.09 0 01-.876-1.916M15 11a8.09 8.09 0 00.876-1.916M9 13a8.09 8.09 0 00-.876 1.916m6.876-1.916a8.09 8.09 0 01.876 1.916" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center md:text-left">Climatisation</h3>
                <p className="text-gray-600 text-center md:text-left">Installation et maintenance de systèmes de climatisation pour un confort optimal en été.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center md:text-left">Pompes à chaleur</h3>
                <p className="text-gray-600 text-center md:text-left">Solutions écologiques et économiques pour chauffer votre maison ou bureau toute l’année.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center md:text-left">Entretien & Réparation</h3>
                <p className="text-gray-600 text-center md:text-left">Services d’entretien régulier et de réparation pour garantir la longévité de vos équipements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="w-fullmx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Pourquoi choisir ClimGo ?</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="md:w-5/12 bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Expertise & Qualité</h3>
                <p className="text-gray-600 mb-4">Avec des années d’expérience, ClimGo s’engage à fournir des solutions adaptées à vos besoins spécifiques, avec des produits de haute qualité.</p>
                <p className="text-gray-600">Nous sommes une entreprise SAS dédiée à la satisfaction de nos clients, en offrant un service personnalisé et des conseils d’experts.</p>
              </div>
              <div className="md:w-7/12">
                <Image width={800} height={600} src="/InstallClim.jpg" alt="Installation de climatisation" className="w-full rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Reproduction des avis google ici */}
        <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Titre de la section */}
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          Parce qu&apos;ils nous font confiance.
        </h1>
        
        {/* Résumé avec logo Google */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            {/* Logo Google */}
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-lg font-semibold text-gray-700">Google</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-yellow-500">5,0</span>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm mt-1">3 avis</span>
            </div>
            
            <div className="hidden md:block border-l h-16 mx-6 border-gray-200"></div>
            
            
          </div>
          
          <a 
            href="https://www.google.com/maps/place/ClimGo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 md:py-3 md:px-6 text-base md:text-lg rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Rédiger un avis
          </a>
        </div>
        
        {/* Liste des avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Avis 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">A</div>
              <div>
                <span className="font-semibold text-gray-800">Alice CARDOSO</span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mb-1">il y a 2 semaines</span>
            <p className="text-gray-700 mb-2 flex-grow">
              Clim posée avec soin, super rapport qualité-prix. Merci pour le professionnalisme
              <br />
              <span className="text-xs text-gray-400">Visité en juin</span>
            </p>
            {/* Logo Google dans chaque avis */}
            <div className="flex items-center gap-1 mt-auto pt-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xs text-gray-500">Publié sur Google</span>
            </div>
          </div>
          
          {/* Avis 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">P</div>
              <div>
                <span className="font-semibold text-gray-800">Philippe RIVAIN</span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mb-1">il y a une semaine</span>
            <p className="text-gray-700 mb-2 flex-grow">
              Intervention rapide et efficace sur un changement de carte électronique sur la commune de LANTON
              <br />
              <span className="text-xs text-gray-400">Visité en juillet</span>
            </p>
            <div className="flex items-center gap-1 mt-auto pt-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xs text-gray-500">Publié sur Google</span>
            </div>
          </div>
          
          {/* Avis 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">M</div>
              <div>
                <span className="font-semibold text-gray-800">Manuela Nunes</span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-500 mb-1">il y a 3 jours</span>
            <p className="text-gray-700 mb-2 flex-grow">
              Installation d&apos;une clim Daikin au top à Salles
              <br />
              Après avoir comparé plusieurs devis, j&apos;ai choisi Benjamin de ClimGO pour … Plus
              <br />
              <span className="text-xs text-gray-400">Visité en juillet</span>
            </p>
            <div className="flex items-center gap-1 mt-auto pt-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xs text-gray-500">Publié sur Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4 md:mb-6 text-gray-800">Prêt à améliorer votre confort ?</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd’hui pour un devis gratuit ou pour en savoir plus sur nos solutions.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Button asChild variant="default" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 md:py-3 md:px-6 text-base md:text-lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 md:py-3 md:px-6 text-base md:text-lg">
                <Link href="/services">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Aides de l'État */}
        <section className="text-center bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 md:mb-8 text-gray-800">Profitez des <strong>aides de l&apos;État</strong> pour vos travaux</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mt-6 md:mt-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-700">MaPrimeRénov’</h3>
                <p className="text-base text-gray-600">Une aide significative pour vos travaux d&apos;<strong>économie d&apos;énergie</strong>.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-700">TVA réduite</h3>
                <p className="text-base text-gray-600">Bénéficiez d’un taux réduit à <strong>5,5%</strong> pour vos installations.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Certificats d&apos;Économies d&apos;Énergie (CEE)</h3>
                <p className="text-base text-gray-600">Obtenez un soutien financier complémentaire.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Éco-prêt à taux zéro (Éco-PTZ)</h3>
                <p className="text-base text-gray-600">Financez vos travaux sans intérêts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Questions Fréquentes sur la <strong>Climatisation</strong> et les <strong>Pompes à Chaleur</strong></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              <div className="space-y-6 md:space-y-0 md:flex md:flex-col md:gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Quel est le coût d’installation d’une <strong>climatisation</strong> ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Le coût d’installation d’une <strong>climatisation</strong> varie en fonction de plusieurs facteurs, comme la taille de la pièce, le type de système (split, multi-split, etc.) et la complexité de l’installation. En moyenne, cela peut aller de 1 500 € à 5 000 €. Chez ClimGo, nous offrons un <strong>devis gratuit</strong> pour évaluer vos besoins spécifiques.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Les <strong>pompes à chaleur</strong> sont-elles vraiment économiques ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Oui, les <strong>pompes à chaleur</strong> sont très économiques à long terme. Elles utilisent l’énergie de l’air ou du sol pour chauffer ou refroidir votre maison, ce qui réduit considérablement les coûts énergétiques par rapport aux systèmes traditionnels. Elles sont également éligibles à des <strong>aides financières</strong> en France, comme <strong>MaPrimeRénov’</strong>.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">À quelle fréquence faut-il entretenir une <strong>climatisation</strong> ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Il est recommandé d’entretenir votre <strong>climatisation</strong> au moins une fois par an pour garantir son bon fonctionnement et prolonger sa durée de vie. Cela inclut le nettoyage des filtres, la vérification des niveaux de réfrigérant et l’inspection des composants. ClimGo propose des <strong>contrats d’entretien</strong> adaptés à vos besoins.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Puis-je installer une <strong>pompe à chaleur</strong> dans une maison ancienne ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Oui, il est tout à fait possible d’installer une <strong>pompe à chaleur</strong> dans une maison ancienne, mais cela peut nécessiter des travaux d’adaptation, notamment pour l’isolation ou le système de distribution de chaleur. Nos experts chez ClimGo peuvent évaluer votre situation et vous proposer la meilleure solution.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 md:space-y-0 md:flex md:flex-col md:gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Quelle est la <strong>rentabilité</strong> d’une <strong>pompe à chaleur</strong> par rapport à un chauffage classique ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">La <strong>rentabilité</strong> d’une <strong>pompe à chaleur</strong> est souvent atteinte en 5 à 10 ans, grâce à des économies d’énergie pouvant atteindre 60 % par rapport à un chauffage électrique ou au gaz. Avec les <strong>aides financières</strong> comme <strong>MaPrimeRénov’</strong>, le coût initial est réduit, rendant l’investissement encore plus attractif.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Combien de temps faut-il pour rentabiliser une <strong>climatisation réversible</strong> ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">La <strong>rentabilité</strong> d’une <strong>climatisation réversible</strong> dépend de son utilisation et des économies réalisées sur le chauffage et la climatisation. En général, elle peut être rentabilisée en 3 à 7 ans, surtout si vous remplacez un système coûteux comme des radiateurs électriques. ClimGo vous aide à choisir le modèle le plus adapté pour maximiser vos économies.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Quelle est la durée de vie d’une <strong>climatisation</strong> ou d’une <strong>pompe à chaleur</strong> ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Avec un <strong>entretien régulier</strong>, une <strong>climatisation</strong> peut durer entre 10 et 15 ans, tandis qu’une <strong>pompe à chaleur</strong> peut fonctionner jusqu’à 15-20 ans. Chez ClimGo, nos services d’<strong>entretien</strong> garantissent une longévité optimale de vos équipements.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-full h-64" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800" itemProp="name">Quelles sont les meilleures marques de <strong>climatisation</strong> et de <strong>pompes à chaleur</strong> ?</h3>
                  <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Des marques comme Daikin, Mitsubishi, Atlantic et Hitachi sont reconnues pour leur fiabilité et leur performance en matière de <strong>climatisation</strong> et de <strong>pompes à chaleur</strong>. Chez ClimGo, nous travaillons avec les meilleurs fabricants pour vous offrir des solutions de qualité adaptées à vos besoins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
