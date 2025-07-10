import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eau Chaude Sanitaire - ClimGo',
  description: 'Découvrez nos solutions d’eau chaude sanitaire économiques et écologiques. Installation, entretien et devis gratuit partout en France.',
  keywords: 'eau chaude sanitaire, installation eau chaude sanitaire, entretien eau chaude sanitaire, devis eau chaude sanitaire, climatisation Arcachon',
};

export default function EauChaudeSanitaire() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Unique Design for Eau Chaude Sanitaire */}
        <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20 mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtMi45MS0zLjk5LTMuOTYsOS45NDYsMS41MDYsMTUuMDU2QzE3LjE5NSA1My4yNDYsMzAuNDEsNTQuMTYsMzQuNDYsNDguOTMsMzguNTA5LDQzLjcwMSwzNy41OTMsMzAuNDMsMzIuMTMsMjUuMDMsMjYuNjc2LDE5IjYzLDEzLjE2NSwyMS41MSwxMC4yMjUsNDIuNjh6Ii8+PC9nPjwvZz48L3N2ZyA=')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions d’<strong>Eau Chaude Sanitaire</strong> avec ClimGo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Profitez d’une eau chaude économique et écologique grâce à nos systèmes innovants.</p>
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pourquoi choisir nos solutions d’<strong>eau chaude sanitaire</strong> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Économie d’énergie</h3>
              <p className="text-gray-600">Réduisez vos factures grâce à des systèmes performants comme les chauffe-eau thermodynamiques.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Écologique</h3>
              <p className="text-gray-600">Utilisez des énergies renouvelables pour produire votre eau chaude et diminuer votre empreinte carbone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Confort au quotidien</h3>
              <p className="text-gray-600">Bénéficiez d’une eau chaude constante, adaptée aux besoins de votre foyer.</p>
            </div>
          </div>
        </section>

        {/* How It Works - Unique Visual */}
        <section className="mb-16 bg-green-50 py-12 rounded-xl border border-green-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Comment fonctionne un système d’<strong>eau chaude sanitaire</strong> ?</h2>
          <div className="max-w-4xl mx-auto space-y-6 px-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Captation de l’énergie</h3>
                <p className="text-gray-600">Nos systèmes, comme les chauffe-eau thermodynamiques, captent les calories présentes dans l’air pour chauffer l’eau.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Transfert de chaleur</h3>
                <p className="text-gray-600">Cette énergie est transférée à l’eau via un fluide caloporteur, garantissant une montée en température efficace.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Distribution</h3>
                <p className="text-gray-600">L’eau chaude est stockée et distribuée selon vos besoins, pour la douche, la cuisine ou le chauffage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO Friendly */}
        <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tout savoir sur l’<strong>eau chaude sanitaire</strong></h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Qu’est-ce qu’un chauffe-eau thermodynamique ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">C’est un système qui utilise une <strong>pompe à chaleur</strong> intégrée pour chauffer l’eau en captant les calories de l’air. Il est très économique et écologique. ClimGo propose des installations adaptées à votre logement.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Combien coûte un système d’<strong>eau chaude sanitaire</strong> ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Le prix varie entre 1 500 € et 5 000 € selon le modèle (thermodynamique, solaire) et l’installation. Des <strong>aides financières</strong> peuvent réduire ce coût. Contactez ClimGo pour un <strong>devis gratuit</strong>.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Quelles aides pour l’<strong>eau chaude sanitaire</strong> écologique ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Des dispositifs comme MaPrimeRénov’ ou les CEE (Certificats d’Économie d’Énergie) peuvent financer une partie de votre installation de chauffe-eau thermodynamique ou solaire. ClimGo vous accompagne dans ces démarches.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 h-52" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-semibold mb-3 text-green-800" itemProp="name">Quel entretien pour un chauffe-eau thermodynamique ?</h3>
                <div className="text-gray-700" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">Un contrôle tous les 1 à 2 ans est recommandé pour vérifier le fluide frigorigène et nettoyer les filtres, garantissant performance et longévité. ClimGo propose des contrats d’<strong>entretien</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Unique Visual */}
        <section className="text-center bg-gradient-to-br from-green-700 to-green-900 text-white py-16 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Passez à une solution d’<strong>eau chaude sanitaire</strong> écologique</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Réduisez vos factures et votre impact environnemental. Demandez dès maintenant votre <strong>devis gratuit</strong> avec ClimGo.</p>
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