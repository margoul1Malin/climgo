import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pompes à Chaleur - ClimGo',
  description: 'Découvrez nos pompes à chaleur innovantes pour un chauffage écologique et économique. Installation, entretien et devis gratuit partout en France.',
  keywords: 'pompes à chaleur, installation pompes à chaleur, entretien pompes à chaleur, devis pompes à chaleur, climatisation Arcachon',
};

export default function PompesAChaleur() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Unique Design */}
        <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20 mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtMi45MS0zLjk5LTMuOTYsOS45NDYsMS41MDYsMTUuMDU2QzE3LjE5NSA1My4yNDYsMzAuNDEsNTQuMTYsMzQuNDYsNDguOTMsMzguNTA5LDQzLjcwMSwzNy41OTMsMzAuNDMsMzIuMTMsMjUuMDMsMjYuNjc2LDE5LjYzLDEzLjE2NSwyMS41MSwxMC4yMjUsNDIuNjh6Ii8+PC9nPjwvZz48L3N2ZyA=')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions de <strong>Pompes à Chaleur</strong> avec ClimGo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Découvrez nos <strong>pompes à chaleur</strong> innovantes pour un chauffage écologique et économique.</p>
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>

        {/* Unique Introduction Section */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Révolutionnez votre chauffage avec une <strong>pompe à chaleur</strong></h2>
          <p className="text-lg text-gray-600 mb-6">Chez ClimGo, nous croyons en des solutions durables. Les <strong>pompes à chaleur</strong> utilisent les <strong>énergies renouvelables</strong> pour chauffer et rafraîchir votre intérieur, tout en réduisant vos factures grâce à une faible consommation d’<strong>électricité</strong>.</p>
          <p className="text-lg text-gray-600">Découvrez comment cette technologie peut transformer votre confort tout en respectant l’environnement.</p>
        </section>

        {/* Key Features Section - Different Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Les atouts des <strong>pompes à chaleur</strong></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Écologique et Renouvelable</h3>
              <p className="text-gray-600">En puisant la chaleur de l’air, de l’eau ou du sol, les <strong>pompes à chaleur</strong> s’appuient sur des <strong>énergies renouvelables</strong>. Elles nécessitent juste un peu d’<strong>électricité</strong> pour fonctionner, ce qui en fait une option verte pour votre maison.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Aides Financières de l’État</h3>
              <p className="text-gray-600">Réduisez vos coûts d’installation grâce aux <strong>aides de l’État</strong> comme <strong>MaPrimeRénov’</strong> (jusqu’à 5 000 €), les <strong>Certificats d’Économie d’Énergie (CEE)</strong> et des crédits d’impôt. ClimGo vous aide à obtenir ces subventions pour économiser dès le départ.</p>
            </div>
          </div>
          <div className="mt-10 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-5xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technologie de Transfert Thermique</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">Les <strong>pompes à chaleur</strong> extraient les calories de l’environnement extérieur (air, eau ou terre) pour chauffer votre espace. Cette énergie est transférée par un fluide caloporteur à un système d’eau qui distribue la chaleur via des radiateurs, des ventilo-convecteurs ou des planchers chauffants.</p>
          </div>
        </section>

        {/* Visual Explanation Section */}
        <section className="mb-16 bg-green-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Un fonctionnement simple et efficace</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌬️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Capture de chaleur</h3>
              <p className="text-gray-600">La <strong>pompe à chaleur</strong> récupère les calories présentes dans l’air extérieur, l’eau ou le sol, même à basse température.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Transfert d’énergie</h3>
              <p className="text-gray-600">Un fluide caloporteur transporte cette chaleur vers un circuit d’eau à l’intérieur de votre système de chauffage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Diffusion de chaleur</h3>
              <p className="text-gray-600">La chaleur est distribuée dans votre maison via des radiateurs, planchers chauffants ou ventilo-convecteurs.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section - Same Structure but Unique Styling */}
        <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tout savoir sur les <strong>Pompes à Chaleur</strong></h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Quel est le prix d’une <strong>pompe à chaleur</strong> ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Le coût varie selon la <strong>puissance</strong>, le <strong>coefficient de performance (COP)</strong>, le type (air-air, air-eau, géothermique) et l’installation. Comptez entre 5 000 € et 15 000 € en moyenne. ClimGo offre un <strong>devis gratuit</strong> pour une estimation précise adaptée à votre projet.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Une <strong>pompe à chaleur</strong> est-elle rentable ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Oui, elle devient rentable en 5 à 10 ans grâce aux économies d’énergie (jusqu’à 60 %). Avec les <strong>aides de l’État</strong> comme <strong>MaPrimeRénov’</strong>, l’investissement initial est réduit, ce qui accélère le retour sur investissement.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Quelles sont les <strong>aides</strong> pour installer une <strong>pompe à chaleur</strong> ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">L’État offre des subventions comme <strong>MaPrimeRénov’</strong> (jusqu’à 5 000 € selon revenus), les <strong>CEE</strong>, et des crédits d’impôt ou prêts à taux zéro. ClimGo vous accompagne pour maximiser ces <strong>aides financières</strong> et réduire vos coûts.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Fonctionne-t-elle par grand froid ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Absolument, les modèles récents sont efficaces jusqu’à -15°C, voire moins, en extrayant la chaleur de l’air ou du sol. ClimGo vous recommande des <strong>pompes à chaleur</strong> adaptées à votre région pour un confort optimal toute l’année.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Unique Visual */}
        <section className="text-center bg-gradient-to-br from-green-700 to-green-900 text-white py-16 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Transformez votre maison avec une <strong>pompe à chaleur</strong></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Bénéficiez d’un chauffage écologique et économique. Demandez dès maintenant votre <strong>devis gratuit</strong> avec ClimGo.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="bg-green-700 border-white text-white cursor-pointer">
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