import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';


export default function APropos() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de <strong>ClimGo S.A.S</strong></h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Découvrez l’histoire d’une entreprise passionnée par le <strong>confort</strong> et les <strong>solutions énergétiques</strong> innovantes.</p>
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 cursor-pointer">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>

        {/* Histoire de ClimGo - Contenu riche pour SEO */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre histoire : Plus de 10 ans d&apos;<strong>expertise</strong> en <strong>chauffage</strong> et <strong>climatisation</strong></h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>ClimGo S.A.S est une entreprise française fondée par un entrepreneur passionné, fort de plus de <strong>10 ans d&apos;expérience</strong> dans le domaine des <strong>solutions énergétiques</strong> et du <strong>confort thermique</strong>. Depuis ses débuts, notre fondateur a consacré sa carrière à offrir des services de qualité en <strong>installation de climatisation</strong>, de <strong>pompes à chaleur</strong> et de systèmes d&apos;<strong>eau chaude sanitaire</strong>, avec pour mission de rendre les foyers plus confortables et économes en énergie.</p>
            <p>Animé par une véritable passion pour les <strong>technologies innovantes</strong> et les <strong>énergies renouvelables</strong>, il a bâti ClimGo sur des valeurs d’excellence, de proximité et de durabilité. Chaque projet est pour nous une opportunité de transformer votre maison en un espace de bien-être, tout en réduisant votre empreinte carbone grâce à des équipements performants et respectueux de l&apos;environnement.</p>
            <p>Au fil des années, ClimGo S.A.S s’est imposé comme un acteur de confiance dans le secteur du <strong>chauffage écologique</strong> et de la <strong>climatisation réversible</strong>. Basés sur une approche client personnalisée, nous intervenons partout en France pour des <strong>installations sur mesure</strong>, des services d’<strong>entretien</strong> et des <strong>réparations rapides</strong>. Notre objectif ? Vous accompagner à chaque étape, de la conception de votre projet jusqu’à l’obtention des <strong>aides financières</strong> comme MaPrimeRénov&apos; ou l’Éco-PTZ.</p>
          </div>
        </section>

        {/* Nos Valeurs - Contenu engageant et SEO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nos <strong>valeurs</strong> au service de votre confort</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Passion et Expertise</h3>
              <p className="text-gray-600">Avec plus de <strong>10 ans d&apos;expérience</strong>, notre fondateur et notre équipe mettent leur savoir-faire et leur passion au service de vos projets de <strong>chauffage</strong> et de <strong>climatisation</strong>. Nous restons à la pointe des innovations pour vous offrir le meilleur.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Engagement Écologique</h3>
              <p className="text-gray-600">Nous croyons en un avenir durable. C&apos;est pourquoi nous privilégions des solutions à base d&apos;<strong>énergies renouvelables</strong> comme les <strong>pompes à chaleur</strong> et les chauffe-eau thermodynamiques pour réduire votre impact environnemental.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Satisfaction Client</h3>
              <p className="text-gray-600">Votre <strong>confort</strong> est notre priorité. Nous vous offrons un accompagnement personnalisé, des conseils d&apos;experts et un service après-vente réactif pour garantir votre satisfaction sur chaque <strong>installation</strong> ou <strong>réparation</strong>.</p>
            </div>
          </div>
        </section>

        {/* Notre Mission - Contenu SEO */}
        <section className="mb-16 text-center bg-blue-50 py-12 rounded-xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre mission : Votre <strong>confort durable</strong></h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 px-4">
            <p>Chez ClimGo S.A.S, nous avons une mission claire : rendre votre maison plus confortable tout en respectant l&apos;environnement. Nous nous engageons à fournir des solutions de <strong>chauffage écologique</strong>, de <strong>climatisation performante</strong> et d&apos;<strong>eau chaude sanitaire économique</strong> qui répondent aux besoins des particuliers et des professionnels. Grâce à notre expertise, nous vous aidons à réduire vos factures énergétiques avec des systèmes innovants et durables.</p>
            <p>Nous croyons que chaque foyer mérite des équipements fiables et adaptés. C&apos;est pourquoi nous travaillons avec des marques reconnues et des technologies de pointe pour garantir la qualité de nos <strong>installations</strong>. De plus, notre équipe vous guide dans les démarches pour bénéficier des <strong>subventions</strong> et <strong>aides de l&apos;État</strong>, rendant vos projets de rénovation énergétique plus accessibles.</p>
          </div>
          <Link href="/contact" passHref>
            <Button variant="default" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 mt-6">
              Nous contacter
            </Button>
          </Link>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Faites confiance à <strong>ClimGo</strong> pour vos projets</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Avec plus de <strong>10 ans d&apos;expérience</strong>, nous sommes prêts à transformer votre maison. Demandez dès maintenant votre <strong>devis gratuit</strong>.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 cursor-pointer">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-blue-500 cursor-pointer">
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