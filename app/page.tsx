import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClimGo - Solutions de Climatisation et Pompes à Chaleur en France',
  description: 'Découvrez les solutions de climatisation et pompes à chaleur de ClimGo pour un confort optimal. Installation, entretien et devis gratuit partout en France.',
  keywords: 'climatisation France, pompes à chaleur, installation climatisation, devis gratuit climatisation, entretien pompes à chaleur',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4 md:mb-6">Solutions de Climatisation et Pompes à Chaleur</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">Des installations efficaces et durables pour votre confort toute l’année.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 md:py-3 md:px-6 text-base md:text-lg">
                <Link href="/devis">Demander un devis</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 md:py-3 md:px-6 text-base md:text-lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
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
            <h1 className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Pourquoi choisir ClimGo ?</h1>
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
