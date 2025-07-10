import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation - ClimGo',
  description: 'Découvrez nos solutions de climatisation performantes et économes en énergie. Installation, entretien et devis gratuit partout en France.',
  keywords: 'climatisation, installation climatisation, entretien climatisation, devis climatisation, climatisation Arcachon',
};

export default function Climatisation() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Unique Design for Climatisation */}
        <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20 mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtMi45MS0zLjk5LTMuOTYsOS45NDYsMS41MDYsMTUuMDU2QzE3LjE5NSA1My4yNDYsMzAuNDEsNTQuMTYsMzQuNDYsNDguOTMsMzguNTA5LDQzLjcwMSwzNy41OTMsMzAuNDMsMzIuMTMsMjUuMDMsMjYuNjc2LDE5LjYzLDEzLjE2NSwyMS41MSwxMC4yMjUsNDIuNjh6Ii8+PC9nPjwvZz48L3N2ZyA=')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions de <strong>Climatisation</strong> avec ClimGo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Restez au frais toute l’année avec nos systèmes de <strong>climatisation</strong> performants et économes en énergie.</p>
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>

        {/* Unique Introduction Section */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Rafraîchissez votre espace avec une <strong>climatisation</strong> moderne</h2>
          <p className="text-lg text-gray-600 mb-6">Chez ClimGo, nous vous proposons des solutions de <strong>climatisation</strong> adaptées à vos besoins, pour un confort optimal en été comme en hiver, tout en optimisant votre consommation énergétique.</p>
          <p className="text-lg text-gray-600">Découvrez nos systèmes innovants qui allient performance, silence et respect de l’environnement.</p>
        </section>

        {/* Key Features Section - Different Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Les avantages de nos <strong>climatisations</strong></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8a2.5 2.5 0 012.5 2.5c0 1.186-.474 2.252-1.232 3.03a17.249 17.249 0 014.231 5.951c.108.365.162.75.162 1.145v1.826a.616.616 0 01-.17.422.575.575 0 01-.417.17H8.424a.578.578 0 01-.578-.578V20.62c0-.398.052-.789.156-1.162a17.212 17.212 0 014.064-5.758A9.546 9.546 0 0111 10.5c0-4.694-3.478-8.553-7.945-9.256a.525.525 0 01-.428-.404A.58.58 0 013.04 3.04l-.011.395h-.976l-.01-.395c-.01.128-.122.24-.25.25H1.25a.25.25 0 010-.5h.543c.397 0 .727-.288.793-.678A10.178 10.178 0 012.25 1.25a.25.25 0 010-.5c.458 0 .91.122 1.305.356.39-.494.86-.846 1.384-1.046a.25.25 0 01.284.108c.025.035.278.395.278.395s-.152-.17-.395-.278a5.561 5.561 0 011.976-.353c2.88.09 5.295 2.505 5.386 5.386v1.879a2 2 0 012 2 2 2 0 002 2h1.232a.616.616 0 01.616.616v2a.578.578 0 01-.578.578H15.5a.578.578 0 01-.578-.578v-2a.616.616 0 01.616-.616H17a2 2 0 002-2 2 2 0 012-2h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Confort et Performance</h3>
              <p className="text-gray-600">Nos systèmes de <strong>climatisation</strong> offrent un refroidissement rapide et uniforme, avec des options réversibles pour chauffer en hiver. Profitez d’un confort toute l’année sans compromis.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Économie d’Énergie</h3>
              <p className="text-gray-600">Grâce à des technologies avancées comme l’inverter, nos <strong>climatisations</strong> ajustent leur puissance pour minimiser la consommation d’<strong>électricité</strong>, réduisant ainsi vos factures tout en respectant l’environnement.</p>
            </div>
          </div>
          <div className="mt-10 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-5xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0113.803 8l-.43.158a6 6 0 01-3.746 0l-.43-.158A6 6 0 018 4.972L7.757 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Installation et Entretien Simplifiés</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">ClimGo assure une installation professionnelle et un <strong>entretien</strong> régulier de votre <strong>climatisation</strong> pour garantir une performance optimale et une durée de vie prolongée de votre équipement.</p>
          </div>
        </section>

        {/* Visual Explanation Section */}
        <section className="mb-16 bg-green-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Comment fonctionne une <strong>climatisation</strong> ?</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Absorption de chaleur</h3>
              <p className="text-gray-600">L’unité intérieure absorbe la chaleur de l’air ambiant grâce à un fluide frigorigène qui circule dans le système.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Transfert vers l’extérieur</h3>
              <p className="text-gray-600">La chaleur est transférée à l’unité extérieure via le fluide frigorigène et expulsée à l’extérieur de votre maison.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌬️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Diffusion d’air frais</h3>
              <p className="text-gray-600">L’air refroidi est redistribué dans votre espace, maintenant une température agréable et constante.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section - Same Structure but Unique Styling */}
        <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tout savoir sur la <strong>Climatisation</strong></h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Combien coûte une <strong>climatisation</strong> ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Le prix d’un système de <strong>climatisation</strong> varie selon le type (monosplit, multisplit), la puissance et l’installation. Comptez entre 1 500 € et 8 000 € en moyenne. ClimGo propose un <strong>devis gratuit</strong> pour une estimation adaptée à vos besoins.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Une <strong>climatisation</strong> consomme-t-elle beaucoup d’énergie ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Non, surtout avec les modèles à technologie inverter qui ajustent leur puissance selon la température souhaitée, réduisant la consommation d’<strong>électricité</strong> de 30 à 50 % par rapport aux anciens systèmes. ClimGo vous conseille sur les options les plus économes.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Quels sont les avantages d’une <strong>climatisation</strong> réversible ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Une <strong>climatisation réversible</strong> refroidit en été et chauffe en hiver, offrant une solution tout-en-un. Elle est plus économique qu’un chauffage classique et peut réduire vos factures énergétiques. ClimGo installe des modèles performants adaptés à votre espace.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">L’entretien d’une <strong>climatisation</strong> est-il obligatoire ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Oui, pour les systèmes contenant plus de 2 kg de fluide frigorigène, un entretien annuel par un professionnel est obligatoire. Même sans obligation, un <strong>entretien</strong> régulier garantit performance et longévité. ClimGo propose des contrats d’entretien sur mesure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Unique Visual */}
        <section className="text-center bg-gradient-to-br from-green-700 to-green-900 text-white py-16 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Améliorez votre confort avec une <strong>climatisation</strong></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Restez au frais cet été. Demandez dès maintenant votre <strong>devis gratuit</strong> avec ClimGo.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="bg-green-700 border-white text-white hover:bg-green-700 cursor-pointer">
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
