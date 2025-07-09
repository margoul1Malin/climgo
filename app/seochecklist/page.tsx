import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Constante pour les phrases de la checklist SEO
const SEO_CHECKLIST_ITEMS = [
  "Balise <title>",
  "Balise <meta>",
  "<h1> & <h2>",
  "Contenu riche",
  "Urls Uniques",
  "KeyWord MiniStuffing",
  "Description Alternative des Images",
  "Quelques variantes de localisation",
  "MAP Interactive pour le Ou Somme Nous ?",
  "Rajouter un Blog",
  "PageSpeed",
  "Bing Webmaster Tools & Google Search Console",
  "Sitemap.xml & Robots.txt",
  "OpenGraph & Twitter Card",
  "Inscriptions : PagesJaunes, Houzz, TrustPilot, Yelp",
  "Google Business Profile",
  "Backlinking Strategy",
  "Demander aux clients de faire des avis google",
  "Activité sur les comptes réseaux sociaux"

];

export default function SEOChecklist() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Checklist SEO pour ClimGo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cette page est dédiée aux développeurs pour suivre les tâches SEO à accomplir afin d’optimiser le référencement du site. Cochez les éléments au fur et à mesure de leur réalisation.</p>
        </section>

        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tâches SEO à réaliser</h2>
          <div className="space-y-4">
            {SEO_CHECKLIST_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-white border border-gray-300 rounded-md flex items-center justify-center text-gray-500 font-bold text-sm">{index + 1}</div>
                <p className="text-gray-700 text-base flex-grow">{item}</p>
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 