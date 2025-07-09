import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">
        {/* Hero Section - Transition de couleur */}
        <section className="relative bg-gradient-to-br from-blue-700 to-green-700 text-white py-20 mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtMi45MS0zLjk5LTMuOTYsOS45NDYsMS41MDYsMTUuMDU2QzE3LjE5NSA1My4yNDYsMzAuNDEsNTQuMTYsMzQuNDYsNDguOTMsMzguNTA5LDQzLjcwMSwzNy41OTMsMzAuNDMsMzIuMTMsMjUuMDMsMjYuNjc2LDE5LjYzLDEzLjE2NSwyMS41MSwxMC4yMjUsNDIuNjh6Ii8+PC9nPjwvZz48L3N2ZyA=')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos <strong>Services</strong> chez ClimGo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Découvrez notre gamme complète de solutions pour le <strong>chauffage</strong>, la <strong>climatisation</strong> et l’<strong>eau chaude sanitaire</strong>. Chez ClimGo, nous vous accompagnons dans l’installation, l’entretien et la réparation de vos systèmes pour un confort optimal toute l’année.</p>
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 cursor-pointer">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>

        {/* Introduction - Contenu riche pour SEO */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Des solutions adaptées à vos besoins en <strong>énergie</strong> et <strong>confort</strong></h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">Chez ClimGo, nous comprenons l’importance d’un foyer confortable et économe en énergie. C’est pourquoi nous proposons une large gamme de <strong>services</strong> pour répondre à vos besoins spécifiques, que vous cherchiez à installer une <strong>climatisation</strong> pour l’été, une <strong>pompe à chaleur</strong> pour un chauffage écologique, ou un système d’<strong>eau chaude sanitaire</strong> performant. Nos experts interviennent dans toute la France pour vous offrir des installations de qualité, un <strong>entretien régulier</strong> et des <strong>réparations rapides</strong> en cas de panne. Grâce à notre expertise, vous pouvez réduire vos factures énergétiques tout en respectant l’environnement avec des solutions utilisant des <strong>énergies renouvelables</strong>.</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">Nous travaillons avec les meilleures marques et technologies pour garantir la fiabilité et la durabilité de vos équipements. De plus, nous vous accompagnons dans l’obtention des <strong>aides de l’État</strong> comme MaPrimeRénov’ ou l’Éco-PTZ pour rendre vos projets plus accessibles. Explorez ci-dessous nos différents services et découvrez comment ClimGo peut transformer votre maison en un espace de confort et d’efficacité énergétique.</p>
        </section>

        {/* Services Section - Maillage interne */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nos <strong>services</strong> pour votre confort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/services/climatisation" passHref>
                <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Climatisation</h3>
                <p className="text-gray-600 mb-4">Restez au frais avec nos systèmes de <strong>climatisation</strong> performants, adaptés à tous types de logements. Que ce soit pour une installation monosplit ou multisplit, nous vous offrons des solutions sur mesure pour un confort optimal durant les chaudes journées d’été. Nos modèles réversibles vous permettent également de chauffer votre maison en hiver, réduisant ainsi vos dépenses énergétiques.</p>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">En savoir plus</Button>
                </div>
            </Link>

            <Link href="/services/pompes-a-chaleur" passHref>
                <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pompes à Chaleur</h3>
                <p className="text-gray-600 mb-4">Optez pour une solution de <strong>chauffage écologique</strong> avec nos <strong>pompes à chaleur</strong> air-eau ou air-air. Ces systèmes captent les calories de l’air extérieur pour chauffer votre intérieur, offrant une alternative économique et respectueuse de l’environnement aux chaudières traditionnelles. Profitez des <strong>aides financières</strong> pour réduire le coût d’installation.</p>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">En savoir plus</Button>
                </div>
            </Link>


            <Link href="/services/eau-chaude-sanitaire" passHref>
                <div className="bg-white p-6 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Eau Chaude Sanitaire</h3>
                <p className="text-gray-600 mb-4">Découvrez nos solutions pour l’<strong>eau chaude sanitaire</strong>, comme les chauffe-eau thermodynamiques qui utilisent l’énergie de l’air pour chauffer votre eau. Économiques et écologiques, ces systèmes réduisent vos factures tout en garantissant un approvisionnement constant en eau chaude pour votre foyer.</p>
                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">En savoir plus</Button>
                </div>
            </Link>

            <Link href="/services/entretien-et-reparation" passHref>
                <div className="bg-white p-6 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Entretien et Réparation</h3>
                <p className="text-gray-600 mb-4">Assurez la longévité de vos équipements avec nos services d’<strong>entretien</strong> et de <strong>réparation</strong>. Un contrôle régulier de votre <strong>climatisation</strong> ou de votre <strong>pompe à chaleur</strong> permet d’éviter les pannes et de maintenir une performance optimale. En cas de problème, nos techniciens interviennent rapidement pour des réparations efficaces.</p>
                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">En savoir plus</Button>
                </div>
            </Link>

          </div>
        </section>

        {/* Pourquoi choisir ClimGo - Contenu SEO */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-50 to-green-50 py-12 rounded-xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Pourquoi choisir <strong>ClimGo</strong> pour vos projets ?</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">Avec plus de 10 ans d’expérience dans le domaine des <strong>solutions énergétiques</strong>, ClimGo s’engage à fournir des services de qualité supérieure à ses clients. Nos équipes sont formées aux dernières technologies pour vous offrir des installations de <strong>climatisation</strong>, de <strong>pompes à chaleur</strong> et de systèmes d’<strong>eau chaude sanitaire</strong> à la pointe de l’innovation. Nous mettons un point d’honneur à respecter les délais et à proposer des tarifs compétitifs, tout en vous guidant dans les démarches pour obtenir des <strong>subventions</strong> et des <strong>aides financières</strong>.</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">Que vous soyez un particulier ou un professionnel, nous personnalisons nos prestations pour répondre à vos attentes. Notre service client est à votre écoute pour toute question concernant l’<strong>installation</strong>, l’<strong>entretien</strong> ou la <strong>réparation</strong> de vos équipements. En choisissant ClimGo, vous optez pour un partenaire de confiance qui place votre <strong>confort</strong> et votre <strong>satisfaction</strong> au cœur de ses priorités. Faites le choix d’une entreprise locale qui valorise les <strong>énergies renouvelables</strong> et contribue à un avenir plus durable.</p>
          <Link href="/contact" passHref>
            <Button variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700">Nous contacter</Button>
          </Link>
        </section>

        {/* Call to Action - Transition de couleur */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Transformez votre maison avec nos <strong>solutions énergétiques</strong></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Réduisez vos factures et votre impact environnemental. Demandez dès maintenant votre <strong>devis gratuit</strong> avec ClimGo.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 cursor-pointer">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 border-white text-white hover:bg-blue-500 cursor-pointer">
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
