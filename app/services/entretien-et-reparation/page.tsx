"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EntretienEtReparation() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 ">
      <Header />
      <main className="flex-grow px-4 sm:px-6 my-24 ">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-700">Prolongez la durée de vie de vos équipements</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-2">Chez ClimGO, la maintenance, ce n’est pas une formalité, c’est une garantie.</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">Une clim bien entretenue, une PAC bien réglée ou un chauffe-eau bien suivi, c’est moins de pannes, plus de performance, et une vraie sérénité toute l’année.<br/>Un entretien régulier prolonge la durée de vie de vos équipements.</p>
        </section>
        {/* Maintenance ClimGO */}
        <section className="my-8 sm:my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-800">Maintenance</h2>
              <div className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                <strong>Entretenez vos équipements pour durer</strong><br/>
                Chez ClimGO, on ne se contente pas d’installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Pourquoi entretenir vos équipements ?</h3>
                    <div className="text-gray-600 text-sm space-y-2">
                      <p>Prolonger leur durée de vie</p>
                      <p>Maintenir leur performance</p>
                      <p>Respecter les garanties fabricants</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/devis" className="block w-full">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full py-3 px-6 transition-all duration-300 cursor-pointer">Demander un devis</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex items-center justify-center min-h-[220px]">
              <Image 
                width={500}
                height={500}
                src="/MaintenanceClim.png" 
                alt="Entretien climatisation ClimGO" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-lg" 
                style={{ aspectRatio: '1.2/1' }}
              />
            </div>
          </div>
        </section>
        {/* Pourquoi choisir ClimGO */}
        <section className="mb-8 sm:mb-16 bg-gradient-to-br from-green-100 to-emerald-100 py-8 sm:py-12 rounded-2xl mx-4 sm:mx-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">Pourquoi choisir ClimGO pour l’entretien de vos équipements ?</h2>
            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-10 text-gray-700 font-bold">Un suivi fiable, pour un confort durable.</p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">Chez ClimGO, on ne vous laisse pas tomber une fois le matériel posé.<br/>On assure un entretien sérieux et régulier pour faire durer vos équipements, éviter les pannes et garantir des performances optimales toute l’année.</p>
            <div className="text-center mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Notre engagement ?</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4">Vous offrir la tranquillité d’esprit. Un système bien entretenu, c’est un confort préservé, une facture maîtrisée et un client satisfait.<br/>Et surtout, un interlocuteur disponible quand vous en avez besoin.</p>
              <Link href="/devis">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* FAQ flip cards */}
        <section className="mb-8 sm:mb-16 px-4 sm:px-6" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">FAQ maintenance ClimGO</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Q1 */}
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-green-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">À quelle fréquence faut-il entretenir une climatisation ou une pompe à chaleur ?</h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">Une fois par an est recommandé pour assurer le bon fonctionnement et allonger la durée de vie de l’équipement.</p>
                </div>
              </div>
            </div>
            {/* Q2 */}
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-blue-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">L’entretien est-il obligatoire ?</h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">Oui, dès que l’équipement contient plus de 2 kg de fluide frigorigène (PAC ou clim). C’est une obligation légale pour des raisons de sécurité et d’environnement.</p>
                </div>
              </div>
            </div>
            {/* Q3 */}
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-emerald-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">L’entretien est-il pris en charge par ClimGO ?</h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">Bien sûr. Nous proposons des contrats sur mesure ou des interventions ponctuelles, selon vos besoins.</p>
                </div>
              </div>
            </div>
            {/* Q4 */}
            <div className="flip-card h-40 sm:h-48" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-yellow-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white px-2" itemProp="name">Quels sont les risques en cas d&apos;absence d&apos;entretien ?</h3>
                </div>
                <div className="flip-card-back" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-white text-sm sm:text-base px-2" itemProp="text">Des pannes, des surconsommations, des risques d&apos;inconfort, et des coûts supplémentaires. Un entretien régulier évite tout ça.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Styles flip */}
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
          .flip-card-front {
            color: white;
          }
          .flip-card-back {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            transform: rotateY(180deg);
          }
          .flip-card-front h2, .flip-card-front h3 {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.4;
          }
          .flip-card-back p, .flip-card-back ul {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.5;
            text-align: center;
          }
          @media (max-width: 640px) {
            .flip-card-front, .flip-card-back {
              padding: 0.75rem;
            }
          }
        `}</style>
      </main>
      <Footer />
    </div>
  );
} 