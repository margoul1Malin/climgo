import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Devis() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Design engageant */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtMi45MS0zLjk5LTMuOTYsOS45NDYsMS41MDYsMTUuMDU2QzE3LjE5NSA1My4yNDYsMzAuNDEsNTQuMTYsMzQuNDYsNDguOTMsMzguNTA5LDQzLjcwMSwzNy41OTMsMzAuNDMsMzIuMTMsMjUuMDMsMjYuNjc2LDE5LjYzLDEzLjE2NSwyMS41MSwxMC4yMjUsNDIuNjh6Ii8+PC9nPjwvZz48L3N2ZyA=')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Demander un <strong>Devis Gratuit</strong> avec ClimGo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Obtenez une estimation personnalisée pour vos projets de <strong>climatisation</strong>, <strong>chauffage</strong> ou <strong>eau chaude sanitaire</strong> en quelques minutes.</p>
          </div>
        </section>
        
        
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center">     

          <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Formulaire de demande de <strong>devis</strong></h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-700">Votre email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@domaine.com"
                    className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="block mb-2 text-gray-700">Type de service</Label>
                  <Select defaultValue="climatisation">
                    <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="climatisation">Climatisation</SelectItem>
                      <SelectItem value="pompes-a-chaleur">Pompes à Chaleur</SelectItem>
                      <SelectItem value="eau-chaude-sanitaire">Eau Chaude Sanitaire</SelectItem>
                      <SelectItem value="entretien-reparation">Entretien et Réparation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="demande" className="block mb-2 text-gray-700">Votre demande</Label>
                  <textarea
                    id="demande"
                    placeholder="Décrivez votre projet ou vos besoins spécifiques..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 w-full md:w-auto px-6 py-2">
                  Envoyer ma demande de devis
                </Button>
                <p className="text-sm text-gray-500 mt-2">En soumettant ce formulaire, vous acceptez que ClimGo traite vos données pour répondre à votre demande.</p>
              </div>
            </form>
          </section>

        {/* Introduction - Contenu SEO */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Un <strong>devis personnalisé</strong> pour vos besoins en <strong>confort thermique</strong></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">Chez ClimGo, nous savons que chaque projet est unique. Que vous souhaitiez installer une <strong>pompe à chaleur</strong> pour un chauffage écologique, une <strong>climatisation réversible</strong> pour rester au frais, ou un système d’<strong>eau chaude sanitaire</strong> économique, notre équipe est là pour vous fournir une estimation précise et adaptée. Remplissez le formulaire ci-dessous pour recevoir un <strong>devis gratuit</strong> sans engagement, et découvrez comment nos solutions peuvent transformer votre maison tout en réduisant vos factures énergétiques.</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Nous intervenons partout en France avec plus de <strong>10 ans d’expérience</strong> dans les <strong>solutions énergétiques</strong>. Profitez également de notre accompagnement pour obtenir des <strong>aides financières</strong> comme MaPrimeRénov’ ou l’Éco-PTZ.</p>
          </section>
        </section>


        {/* Pourquoi demander un devis - Contenu SEO */}
        <section className="mb-16 text-center bg-blue-50 py-12 rounded-xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi demander un <strong>devis</strong> chez ClimGo ?</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 px-4">
            <p>Demander un <strong>devis gratuit</strong> chez ClimGo, c’est la première étape pour concrétiser votre projet de <strong>confort thermique</strong>. Nos experts analysent vos besoins pour vous proposer une solution sur mesure, qu’il s’agisse d’une <strong>installation de climatisation</strong>, d’une <strong>pompe à chaleur écologique</strong> ou d’un système d’<strong>eau chaude sanitaire performant</strong>. Vous recevez une estimation claire et détaillée, sans frais ni engagement.</p>
            <p>Avec plus de <strong>10 ans d’expérience</strong>, nous vous garantissons un service de qualité et un accompagnement complet, y compris pour obtenir des <strong>subventions</strong> comme MaPrimeRénov’ ou les Certificats d’Économies d’Énergie (CEE). Faites confiance à ClimGo pour transformer votre maison en un espace de bien-être tout en réduisant vos <strong>factures énergétiques</strong>.</p>
          </div>
          <Link href="/a-propos" passHref>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-6">
              En savoir plus sur ClimGo
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
} 