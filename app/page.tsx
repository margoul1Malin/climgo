'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';




export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/sdb-pyla.jpeg",
    "/climcauderan.jpeg"
  ];

  // Animation de fond avec crossfade corrigée
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Attendre que la transition commence, puis changer l'image
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        setIsTransitioning(false);
      }, 1000); // Durée de la transition crossfade
    }, 5000); // 5 secondes par image

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section avec carrousel d'images corrigé */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Images de fond avec système de crossfade */}
          {bgImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('${image}')`,
                opacity: currentIndex === index ? 1 : 0,
                transform: 'scale(1.05)', // Effet Ken Burns léger
                animation: currentIndex === index ? 'kenBurns 5s ease-in-out infinite alternate' : 'none'
              }}
            />
          ))}
          
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          <div className="relative z-20 text-center text-white px-4 md:px-8 animate-fade-in-up">
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
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
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
          
          {/* Animation Ken Burns en CSS */}
          <style jsx>{`
            @keyframes kenBurns {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15); }
            }
            
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 1s ease-out;
            }
          `}</style>
        </section>


        {/* Section Présentation ClimGO moderne */}
        <section className="container mx-auto py-16 my-12 bg-white backdrop-blur-md shadow-lg rounded-3xl mx-2 md:mx-auto  max-w-5xl flex flex-col items-center">
          <div className="w-full max-w-3xl px-6 md:px-12 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ClimGO est votre partenaire local entre Bordeaux et le Bassin d&apos;Arcachon</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Pour tous vos projets de chauffage, climatisation et confort thermique. Basée entre Bordeaux et le Bassin d’Arcachon, l&apos;entreprise ClimGO, certifiée RGE, vous accompagne dans tous vos projets d’installation, de dépannage et de maintenance en pompe à chaleur, chauffage, climatisation, eau chaude sanitaire et énergies renouvelables.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Notre mission est simple : vous garantir confort, performance et sérénité, jour après jour. Grâce à notre savoir-faire, nous vous proposons des solutions durables, soignées et parfaitement adaptées à vos besoins. En complément, nous sélectionnons des équipements fiables et performants, à haute efficacité énergétique. C&apos;est pourquoi chaque installation bénéficie d&apos;un suivi rigoureux, dans le respect des délais et de vos attentes.
            </p>
            <Link href="/devis">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg mb-8 transition duration-300 ease-in-out transform hover:scale-105">
                Obtenir un devis personnalisé
              </Button>
            </Link>
            <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-4">Notre savoir-faire :</h3>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Chez ClimGO, nous vous accompagnons dans tous les domaines du confort thermique et sanitaire : chauffage, climatisation, eau chaude sanitaire et maintenance. Nos solutions sont pensées pour allier performance, durabilité, économies d&apos;énergie et sérénité, année après année.
            </p>
          </div>
        </section>

      {/* Section Services */}
      <section className="py-12 md:py-16 bg-gray-50 container mx-auto">
      <div className="w-full grid grid-cols-2 md:flex justify-center items-center gap-8">
            {/* Eau Chaude Sanitaire */}
            <Link href="/services/eau-chaude-sanitaire" className="flex flex-col w-full items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow w-1/4">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">Eau Chaude Sanitaire ↪</span>
            </Link>
            {/* Chauffage */}
            <Link href="/services/chauffage" className="flex flex-col w-full items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow w-1/4">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-orange-100 rounded-full">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 017 7c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 017-7zm0 0v20"/></svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">Chauffage ↪</span>
            </Link>
            {/* Climatisation */}
            <Link href="/services/climatisation" className="flex flex-col w-full items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow w-1/4">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-100 rounded-full">
                <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12h16M12 4v16m7.07-7.07l-2.83-2.83M6.93 6.93l2.83 2.83m0 0l2.83-2.83m-2.83 2.83l-2.83 2.83"/></svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">Climatisation ↪</span>
            </Link>
            {/* Maintenance */}
            <Link href="/services/entretien-et-reparation" className="flex flex-col w-full items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow w-1/4">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg mb-1">Maintenance ↪</span>
            </Link>
          </div>
      </section>

      {/* Section Nos Engagements */}
      <section className="py-16 bg-white container mx-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nos Engagements</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Nos engagements sont simples : <span className="font-semibold text-black">qualité</span>, <span className="font-semibold text-black">clarté</span>, et <span className="font-semibold text-black">respect du client</span> à chaque étape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qualité */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Qualité</h3>
              <p className="text-gray-600">Des installations, rigoureusement sélectionnées et contrôlées.</p>
            </div>
            {/* Service personnalisé */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Service personnalisé</h3>
              <p className="text-gray-600">Un accompagnement sur mesure, discret et à votre écoute.</p>
            </div>
            {/* Ponctualité & rigueur */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-yellow-100 rounded-full">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 017 7c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 017-7zm0 0v20"/></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Ponctualité & rigueur</h3>
              <p className="text-gray-600">Intervention à l&apos;heure et respect des délais annoncés.</p>
            </div>
            {/* Efficacité & Propreté */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-cyan-100 rounded-full">
                <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12h16M12 4v16m7.07-7.07l-2.83-2.83M6.93 6.93l2.83 2.83m0 0l2.83-2.83m-2.83 2.83l-2.83 2.83"/></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Efficacité & Propreté</h3>
              <p className="text-gray-600">Une intervention rapide, soignée, et sans surprise.</p>
            </div> 
          </div>
        </div>
      </section>

      <section className="p-12 bg-gray-50 my-24">
        <div className="w-full mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Nos marques partenaires</h2>
          <CarouselMarques />
        </div>
      </section>

       
        {/* About Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="w-full mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Pourquoi choisir ClimGo&nbsp;?</h1>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Votre confort mérite une attention particulière, nous avons développé une approche élégante et sur-mesure pour chacun de nos clients. Choisir ClimGO, c’est opter pour&nbsp;:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Expertise */}
              <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"/></svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Expertise</h3>
                <p className="text-gray-600 text-center">Chaque projet est unique. Notre savoir-faire technique et notre maîtrise des dernières innovations garantissent une qualité irréprochable, adaptée à vos attentes les plus exigeantes.</p>
              </div>
              {/* Accompagnement Personnalisé */}
              <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Accompagnement Personnalisé</h3>
                <p className="text-gray-600 text-center">Nous prenons le temps de vous écouter pour comprendre précisément vos besoins. Chaque installation est conçue sur mesure, pour un résultat impeccable à votre image.</p>
              </div>
              {/* Discrétion et Confiance */}
              <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-yellow-100 rounded-full">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 0v4m0-4v-4"/></svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Discrétion et Confiance</h3>
                <p className="text-gray-600 text-center">Votre intimité est précieuse. ClimGO s’engage à intervenir dans le plus grand respect de votre vie privée et à assurer une totale confidentialité.</p>
              </div>
              {/* Engagement Durable */}
              <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-cyan-100 rounded-full">
                  <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Engagement Durable</h3>
                <p className="text-gray-600 text-center">Nous privilégions des solutions à haute performance énergétique, respectueuses de l’environnement et pensées pour durer. Choisir ClimGO, c’est investir sereinement dans l’avenir.</p>
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
                <Link href="/devis">Obtenir un Devis</Link>
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

        {/* Fondateur Section */}
        <section className="text-center bg-gray-50 py-12 md:py-16">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
            {/* Avatar ou photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shadow-md mx-auto md:mx-0">
                {/* Remplace l'image ci-dessous par ta photo si tu veux */}
                <svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
              </div>
            </div>
            {/* Texte */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fondateur de ClimGO</h2>
              <p className="text-lg text-gray-700 mb-4">Passionné par mon métier depuis plus de 10 ans, je mets mon expérience et mon savoir-faire à votre disposition pour assurer votre confort au quotidien. Proximité, sérieux et qualité guident chacun de mes projets.</p>
              <p className="text-base text-gray-600 mb-6">Je serai ravi de vous rencontrer.</p>
              <Link href="/a-propos" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">Notre histoire &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

const CarouselMarques: React.FC = () => {
  const images: { src: string; alt: string }[] = [
    { src: "/HeiwaLogo.png", alt: "Heiwa" },
    { src: "/DaikinLogo.png", alt: "Daikin" },
    { src: "/Mitsubishi-Electric-Logo.png", alt: "Mitsubishi Electric" },
  ];
  
  const [index, setIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      
      // Délai pour le fade out, puis changement d'image
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 300); // 300ms pour le fade out
      
    }, 4000); // 5 secondes par image
    
    return () => clearInterval(timer);
  }, [images.length]); // Seulement dépendant de images.length

  return (
    <div className="carousel-container relative min-h-[320px] max-w-2xl mx-auto flex items-center justify-center">
        <Image
          width={1000}
          height={500}
          src={images[index].src}
          alt={images[index].alt}
          className={`carousel-image ${isFading ? 'fade-out' : 'fade-in'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
            max-h-32 max-w-xs 
            sm:max-h-40 sm:max-w-md 
            md:max-h-[320px] md:max-w-[1000px] 
            w-auto h-auto select-none`}
          style={{
            opacity: isFading ? 0 : 1,
            transition: 'opacity 300ms ease-in-out',
          }}
        />
      </div>
  );
};
