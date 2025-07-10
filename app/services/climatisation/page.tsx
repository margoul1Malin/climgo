import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Climatisation() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20 mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nos Solutions de <span className="text-green-300">Climatisation</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Découvrez nos systèmes de <strong>climatisation performants</strong> : unités murales, cassettes et consoles pour un confort optimal toute l&apos;année.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" passHref>
                  <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    Obtenir un devis gratuit
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
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
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Solutions de <span className="text-green-600">Climatisation Moderne</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez ClimGo, nous proposons les meilleures solutions de climatisation pour votre confort. 
                Nos <strong>climatiseurs muraux</strong>, <strong>cassettes</strong> et <strong>consoles</strong> 
                vous garantissent un air frais et pur tout en respectant l&apos;environnement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Climatisation murale</h3>
                    <p className="text-gray-600 text-sm">Installation simple et design discret</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cassettes & Consoles</h3>
                    <p className="text-gray-600 text-sm">Solutions professionnelles haute performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/ClimAnime.png" 
                  alt="Schéma climatisation ClimGo"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Solutions de <span className="text-green-600">Climatisation</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Climatisation Murale */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Climatisation Murale</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                La <strong>climatisation murale</strong> est la solution idéale pour les habitations. 
                Discrète et efficace, elle s&apos;intègre parfaitement dans votre décoration tout en offrant un confort optimal.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Design moderne et discret
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Installation rapide et facile
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fonction réversible chaud/froid
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/ClimMurale.png" 
                  alt="Climatisation murale installation ClimGo"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Cassettes & Consoles */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cassettes & Consoles</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Les <strong>cassettes</strong> et <strong>consoles</strong> sont parfaites pour les espaces commerciaux et les grandes surfaces. 
                Invisibles au plafond ou élégantes au sol, elles offrent une diffusion d&apos;air optimale.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Diffusion d&apos;air 360° (cassettes)
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Haute performance énergétique
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                  Idéal pour grandes surfaces
                </li>
              </ul>
              <div className="relative">
                <Image 
                  src="/CassetClimAnime.png" 
                  alt="Cassette climatisation professionnelle"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Comment fonctionne votre <span className="text-green-600">Climatisation</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">1. Aspiration de l&apos;air</h3>
              <p className="text-gray-600 leading-relaxed">
                L&apos;unité intérieure aspire l&apos;air chaud de votre pièce et le fait passer à travers l&apos;évaporateur contenant le fluide frigorigène.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">2. Refroidissement</h3>
              <p className="text-gray-600 leading-relaxed">
                Le fluide frigorigène absorbe la chaleur et s&apos;évapore, puis est comprimé et refroidi dans l&apos;unité extérieure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">3. Diffusion d&apos;air frais</h3>
              <p className="text-gray-600 leading-relaxed">
                L&apos;air refroidi est diffusé dans votre espace, créant une température agréable et un confort optimal.
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
                  src="/climcauderan.jpeg" 
                  alt="Installation climatisation par ClimGo à Caudéran"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Installation <span className="text-green-600">Professionnelle</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre équipe d&apos;experts ClimGo assure une installation rapide et professionnelle de votre climatisation. 
                Nous respectons les normes en vigueur et vous garantissons un service de qualité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Étude personnalisée</h4>
                    <p className="text-gray-600 text-sm">Analyse de vos besoins et conseils sur la solution optimale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
              </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Installation certifiée</h4>
                    <p className="text-gray-600 text-sm">Techniciens qualifiés RGE pour une installation aux normes</p>
            </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Garantie et SAV</h4>
                    <p className="text-gray-600 text-sm">Garantie constructeur et service après-vente réactif</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Questions fréquentes sur la <span className="text-green-600">Climatisation</span></h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quelle puissance de climatisation choisir ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La puissance dépend de la surface à climatiser, de l&apos;isolation et de l&apos;exposition. 
                Comptez environ 100W par m² pour une pièce bien isolée. Nos experts ClimGo vous conseillent pour choisir la puissance optimale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Combien coûte l&apos;installation d&apos;une climatisation ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le prix varie selon le type d&apos;appareil et la complexité de l&apos;installation. 
                Comptez entre 1 500€ et 4 000€ pour une climatisation murale. Demandez votre devis gratuit pour une estimation précise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Une climatisation réversible peut-elle remplacer le chauffage ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, une climatisation réversible peut être une solution de chauffage efficace, surtout dans les régions tempérées. 
                Elle consomme moins qu&apos;un chauffage électrique classique et offre un excellent confort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">À quelle fréquence entretenir sa climatisation ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un entretien annuel est recommandé pour maintenir les performances et la durée de vie de votre climatisation. 
                ClimGo propose des contrats d&apos;entretien pour un suivi optimal de votre installation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Prêt pour votre nouvelle <span className="text-green-300">Climatisation</span> ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez ClimGo dès aujourd&apos;hui pour un devis personnalisé et profitez d&apos;un confort optimal toute l&apos;anné
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
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
