'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EauChaudeSanitaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/sdb-toulouse.png",
    "/Cumulus_cropped.jpeg"
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
      
      {/* Main Content */}
      <main className="mb-12 flex-grow">
        {/* Hero Section */}
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">ClimGO - Eau Chaude Sanitaire</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">Installation de ballons d&apos;eau chaude</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link 
                href="/devis" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
              >
                Demander un Devis
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
          <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
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
        {/* Introduction avec image */}
        <section className="my-8 sm:my-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/AnimeThermodynamy.webp" 
                  alt="Schéma pompe à chaleur Air/Eau ClimGo"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 w-full">Chauffe-Eau <span className="text-blue-600">Thermodynamique</span></h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                <strong>Une eau chaude sanitaire économique et écoresponsable</strong><br/>
                Ce système capte les calories de l’air ambiant pour chauffer l’eau de votre ballon. Idéal pour les maisons avec un local ventilé, il combine performance énergétique et confort au quotidien.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Ce que vous y gagnez</h3>
                    <div className="text-gray-600 text-sm space-y-2">
                      <p>Jusqu&apos;à 70% d&apos;économie d&apos;énergie</p>
                      <p>Éligible aux aides (CEE, MaPrimeRénov&apos;)</p>
                      <p>Eau chaude disponible en continu</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/devis" className="block w-full">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full py-3 px-6 transition-all duration-300 cursor-pointer">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8 sm:my-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="relative">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/AnimeChauffeEauElec.webp" 
                  alt="Schéma pompe à chaleur Air/Eau ClimGo"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-red-600">Chauffe-Eau Electrique</h2>
              <div className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                <strong>Une solution d&apos;eau chaude sanitaire simple et fiable pour votre quotidien</strong><br/>
                Le chauffe-eau électrique classique assure une production d&apos;eau chaude constante pour toute la maison. Discret, facile à installer et adapté aux petits budgets, c&apos;est une valeur sûre.
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Ce que vous y gagnez</h3>
                    <div className="text-gray-600 text-sm space-y-2">
                      <p>Eau chaude disponible à toute heure</p>
                      <p>Installation rapide et sans contraintes</p>
                      <p>Solution économique à l&apos;achat et à l&apos;entretien</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/devis" className="block w-full">
                    <Button className="bg-red-600 text-white hover:bg-red-700 w-full py-3 px-6 transition-all duration-300 cursor-pointer">Demander un devis</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8 sm:my-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/AnimeChauffeEauExtraPet.webp" 
                  alt="Schéma pompe à chaleur Air/Eau ClimGo"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-green-600">Chauffe-Eau Extra Plat</h2>
              <div className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                <strong>Un maximum de confort dans un minimum d&apos;espace pour votre eau chaude sanitaire</strong><br/>
                Parfait pour les petits logements ou les espaces optimisés, le chauffe-eau extra plat s&apos;intègre facilement dans un placard ou au-dessus d&apos;une machine à laver. Design, discret et performant, il allie confort et gain de place.
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Ce que vous y gagnez</h3>
                    <div className="text-gray-600 text-sm space-y-2">
                      <p>Format compact, idéal pour les petits espaces</p>
                      <p>Consommation maîtrisée et intelligente</p>
                      <p>Confort quotidien, sans compromis</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/devis" className="block w-full">
                    <Button className="bg-green-600 text-white hover:bg-green-700 w-full py-3 px-6 transition-all duration-300 cursor-pointer">Demander un devis</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8 sm:mb-16 bg-gradient-to-br from-green-100 to-emerald-100 py-8 sm:py-12 rounded-2xl mx-4 sm:mx-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">Pourquoi Choisir ClimGo ?</h2>
            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-10 text-gray-700 font-bold">Un savoir-faire maîtrisé, au service de votre confort toute l&apos;année.</p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">Chez ClimGO, chaque installation est pensée pour durer. Nous sélectionnons les équipements les plus performants, et nous les posons avec rigueur, précision et discrétion.</p>
            <div className="text-center mt-8">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-700 mb-4">Notre engagement ?</h2> 
              <p className="text-base sm:text-lg text-gray-700 mb-4">Que votre eau chaude soit toujours au rendez-vous, sans mauvaise surprise, avec un système bien posé, bien réglé, et prêt à tenir sur la durée.</p>               <Link href="/devis">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* FAQ */} <>
        <section className="mb-8 sm:mb-16 px-4 sm:px-6" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">FAQ - Eau Chaude Sanitaire</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">
                    Quel type de chauffe-eau choisir ?
                  </h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">
                    Ça dépend de votre logement et de vos besoins. On vous conseille selon votre consommation et l&apos;espace disponible.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">
                    Est-ce qu&apos;il y a des aides pour l&apos;installation ?
                  </h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">
                    Oui, certains modèles sont éligibles aux aides comme MaPrimeRénov&apos; ou la TVA réduite.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">
                    Combien de temps dure un chauffe-eau ?
                  </h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">
                    En moyenne 15 ans, s&apos;il est bien entretenu.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">
                    Faut-il un entretien régulier ?
                  </h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">
                    Oui, surtout pour les chauffe-eaux thermodynamiques. Un petit check-up évite les pannes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .flip-card {
            background-color: transparent;
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
          .flip-card-front {
            background: #2563eb;
            color: white;
          }
          .flip-card-back {
            background: #16a34a;
            color: white;
            transform: rotateY(180deg);
          }
          .flip-card-front h3 {
            margin: 0;
            font-weight: 600;
            line-height: 1.4;
          }
          .flip-card-back p {
            margin: 0;
            line-height: 1.5;
            text-align: center;
          }
          @media (max-width: 640px) {
            .flip-card-front, .flip-card-back {
              padding: 0.75rem;
            }
          }
        `}</style></>
        {/* Call to Action Final */}
     
      </main>
      
      <Footer />
    </div>
  );
} 