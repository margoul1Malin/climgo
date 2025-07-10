import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entretien et Réparation - ClimGo',
  description: 'Découvrez nos services d’entretien et de réparation pour vos pompes à chaleur et climatisations. Maintenance et réparation de qualité partout en France.',
  keywords: 'entretien pompes à chaleur, réparation pompes à chaleur, entretien climatisation, réparation climatisation, climatisation Arcachon',
};

export default function EntretienEtReparation() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-xl shadow-lg max-w-2xl border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Entretien et Réparation</h1>
          <p className="text-lg text-gray-600">Je ne sais pas ce que tu voulais mettre ici, donc je laisse vide pour le moment.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 