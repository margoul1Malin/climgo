import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ClimGo</h3>
            <p className="text-gray-400">Solutions de climatisation et chauffage pour particuliers et professionnels.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/climatisation" className="text-gray-400 hover:text-white transition-colors">Climatisation</Link></li>
              <li><Link href="/services/pompes-a-chaleur" className="text-gray-400 hover:text-white transition-colors">Pompes à chaleur</Link></li>
              <li><Link href="/services/eau-chaude-sanitaire" className="text-gray-400 hover:text-white transition-colors">Eau Chaude Sanitaire</Link></li>
              <li><Link href="/services/entretien-et-reparation" className="text-gray-400 hover:text-white transition-colors">Entretien & Réparation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/devis" className="text-gray-400 hover:text-white transition-colors">Devis Gratuit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.478a2 2 0 011.94 1.555l1.109 5.546a2 2 0 01-.44 1.608l-1.25 1.25a2 2 0 00-.439 1.152l.43 2.946a2 2 0 01-1.614 2.13l-2.487.621a2 2 0 01-2.284-1.386L3 15.284v-1.572a2 2 0 011-1.732l.433-.216a2 2 0 011.385-.067l2.484.827a2 2 0 002.284-.572l.428-.856a2 2 0 011.102-1.278l1.247-.416a2 2 0 001.463-.198l1.493-.746a2 2 0 001.104-1.278l.43-1.718A2 2 0 0017.522 3H21a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span className="text-gray-400">01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">contact@climgo.fr</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">123 Rue du Climat, 75000 Paris</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 justify-end mb-8 text-center text-sm w-full">
              <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">Mentions Légales</Link>
        </div>
       
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClimGo. Tous droits réservés.</p>
        </div>
        
      </div>
      
    </footer>
  );
} 