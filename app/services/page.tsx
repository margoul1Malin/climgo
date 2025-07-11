import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section Ultra Moderne */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat" />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Solutions Énergétiques Innovantes</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                  Nos Services
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Découvrez nos solutions complètes pour votre <strong>confort thermique</strong> toute l&apos;année. 
                Des installations haute performance aux services d&apos;entretien expert.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/devis" passHref>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Devis Gratuit Express
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="border-2 bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white hover:border-blue-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-200">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Pro
              </Button>
            </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards - Design Ultra Moderne */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Expertises</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quatre domaines d&apos;excellence pour votre confort et vos économies d&apos;énergie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              
              {/* Climatisation Card */}
              <Link href="/services/climatisation" className="group block h-full w-full">
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:scale-105 h-[480px]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative p-8 pb-6 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors">
                      Climatisation
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      Systèmes de climatisation haute performance pour un confort optimal. 
                      <strong>Réversible</strong> pour chauffer en hiver et refroidir en été.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Installation murale & cassette
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Technologie inverter
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Contrôle intelligent
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-sm"></span>
                      <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-sm mr-1">Découvrir</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>

              {/* Chauffage Card */}
              <Link href="/services/pompes-a-chaleur" className="group block h-full w-full">
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 transform hover:scale-105 h-[480px]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative p-8 pb-6 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                      Chauffage
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      Pompes à chaleur et planchers chauffants pour un <strong>chauffage écologique</strong> 
                      et économique toute l&apos;année.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Pompe à chaleur Air/Eau
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Plancher chauffant
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Économies jusqu&apos;à 70%
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-semibold text-sm"></span>
                      <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-sm mr-1">Découvrir</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>

              {/* Eau Chaude Sanitaire Card */}
              <Link href="/services/eau-chaude-sanitaire" className="group block h-full w-full">
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:scale-105 h-[480px]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative p-8 pb-6 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0113.803 8l-.43.158a6 6 0 01-3.746 0l-.43-.158A6 6 0 018 4.972L7.757 4z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                      Eau Chaude Sanitaire
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      Ballons thermodynamiques et cumulus électriques pour une <strong>eau chaude</strong> 
                      disponible 24h/24 et économique.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Ballon thermodynamique
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Cumulus électrique
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Aides financières
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold text-sm"></span>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-sm mr-1">Découvrir</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>

              {/* Entretien et Réparation Card */}
              <Link href="/services/entretien-et-reparation" className="group block h-full w-full">
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-105 h-[480px]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon Container */}
                  <div className="relative p-8 pb-6 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">
                      Entretien & Réparation
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      Maintenance experte et <strong>garantie décennale</strong>. 
                      Engagement sur 10 ans pour la tranquillité de vos équipements.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Garantie décennale
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Contrats d&apos;entretien
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Intervention 24h/24
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-semibold text-sm"></span>
                      <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-sm mr-1">Découvrir</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 via-gray-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAyMGg4MHYyMEgwem0yMCAwaDIwdjIwSDIwem0yMCAyMGgyMHYyMEg0MHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">ClimGo</span> ?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Plus de 10 ans d&apos;expertise au service de votre confort et de vos économies d&apos;énergie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Garantie Décennale</h3>
                <p className="opacity-90">Protection totale de vos installations pendant 10 ans</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Aides Financières</h3>
                <p className="opacity-90">Accompagnement pour MaPrimeRénov&apos; et autres subventions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Intervention Rapide</h3>
                <p className="opacity-90">Service d&apos;urgence 24h/24 et 7j/7 pour vos pannes</p>
              </div>
            </div>
          </div>
        </section>

      

        {/* Call to Action Final */}
       
      </main>
      
      <Footer />
    </div>
  );
}
