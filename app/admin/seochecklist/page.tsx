import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClimGo - Checklist SEO pour Climatisation et Pompes à Chaleur',
  description: 'Checklist SEO pour optimiser le référencement de ClimGo. Suivez nos tâches pour améliorer la visibilité de votre site sur la climatisation et les pompes à chaleur.',
  keywords: 'SEO climatisation, optimisation référencement pompes à chaleur, checklist SEO ClimGo, visibilité site web climatisation',
};

// Définition des éléments de la checklist SEO avec un état isChecked
const SEO_CHECKLIST_ITEMS = [
  { id: 1, text: 'Balise <title>', isChecked: true },
  { id: 2, text: 'Balise <meta>', isChecked: true },
  { id: 3, text: '<h1> & <h2>', isChecked: true },
  { id: 4, text: 'Contenu riche', isChecked: true },
  { id: 5, text: 'Urls Uniques (Arcachon, etc..)', isChecked: false },
  { id: 6, text: 'KeyWord MiniStuffing', isChecked: true },
  { id: 7, text: 'Description Alternative des Images', isChecked: true },
  { id: 9, text: 'MAP Interactive pour le Ou Somme Nous ?', isChecked: false },
  { id: 10, text: 'Rajouter un Blog', isChecked: true },
  { id: 11, text: 'PageSpeed', isChecked: true },
  { id: 12, text: 'Bing Webmaster Tools & Google Search Console', isChecked: false },
  { id: 13, text: 'Sitemap.xml & Robots.txt', isChecked: true },
  { id: 14, text: 'OpenGraph & Twitter Card', isChecked: false },
  { id: 15, text: 'Inscriptions : PagesJaunes, Houzz, TrustPilot, Yelp', isChecked: false },
  { id: 16, text: 'Google Business Profile', isChecked: false },
  { id: 17, text: 'Backlinking Strategy', isChecked: false },
  { id: 18, text: 'Demander aux clients de faire des avis google', isChecked: false },
  { id: 19, text: 'Activité sur les comptes réseaux sociaux', isChecked: false },
];

export default function SeoChecklist() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Checklist SEO pour ClimGo</h1>
        <p className="text-lg text-gray-600 mb-8">Suivez ces étapes pour optimiser le référencement de votre site et améliorer sa visibilité sur les moteurs de recherche.</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tâches à accomplir</h2>
          <ul className="space-y-3">
            {SEO_CHECKLIST_ITEMS.map(item => (
              <li key={item.id} className="flex items-start">
                <span className={`w-6 h-6 rounded-full mr-3 mt-1 flex-shrink-0 ${item.isChecked ? 'bg-green-500' : 'bg-gray-300'}
                  flex items-center justify-center text-white`}>
                  {item.isChecked && '✓'}
                </span>
                <span className={`text-gray-700 ${item.isChecked ? 'line-through text-gray-400' : ''}`}>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">Modifiez le code pour mettre à jour l&apos;état isChecked de chaque élément.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 