import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow">

        {/* Section d'introduction - Contenu SEO avec mise en page unique */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Une question sur nos <strong>solutions thermiques</strong> ? Contactez-nous !</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 px-4">
            <p>Chez ClimGo, votre satisfaction est notre priorité. Que vous ayez une question sur l&apos;installation d&apos;une <strong>pompe à chaleur</strong>, un projet de <strong>climatisation réversible</strong>, ou besoin d&apos;informations sur nos services d&apos;<strong>entretien</strong> et de <strong>réparation</strong>, notre équipe est là pour vous répondre. Basés en France, avec plus de <strong>10 ans d&apos;expérience</strong> dans les <strong>énergies renouvelables</strong>, nous vous offrons un accompagnement personnalisé pour tous vos besoins en <strong>confort thermique</strong>.</p>
            <p>N&apos;hésitez pas à nous contacter pour un <strong>devis gratuit</strong>, des conseils sur les <strong>aides financières</strong> comme MaPrimeRénov&apos;, ou simplement pour échanger sur votre projet. Remplissez le formulaire ci-dessous ou appelez-nous directement.</p>
          </div>
        </section>

        {/* Mise en page innovante : Formulaire et infos côte à côte avec style distinct */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Formulaire de contact - Colonne de gauche (3/5) */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Label htmlFor="nom" className="block mb-2 text-gray-700">Votre nom</Label>
                  <Input
                    id="nom"
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-700">Votre email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@domaine.com"
                    className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sujet" className="block mb-2 text-gray-700">Sujet</Label>
                  <Input
                    id="sujet"
                    type="text"
                    placeholder="Objet de votre message"
                    className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block mb-2 text-gray-700">Votre message</Label>
                  <textarea
                    id="message"
                    placeholder="Décrivez votre demande ou question..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[150px]"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700 w-full md:w-auto px-6 py-2">
                  Envoyer mon message
                </Button>
                <p className="text-sm text-gray-500 mt-2">En soumettant ce formulaire, vous acceptez que ClimGo traite vos données pour répondre à votre demande.</p>
              </div>
            </form>
          </div>
          {/* Informations de contact - Colonne de droite (2/5) avec style visuel innovant */}
          <div className="md:col-span-2 bg-teal-50 p-8 rounded-xl border border-teal-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-600 rounded-bl-full opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-600 rounded-tr-full opacity-30"></div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 relative z-10">Informations de contact</h2>
            <div className="space-y-6 text-gray-700 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Adresse</h3>
                  <p>ClimGo S.A.S<br />123 Rue de l&apos;Énergie<br />75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.775a11.226 11.226 0 004.098 4.098l.774-1.549a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Téléphone</h3>
                  <p>01 23 45 67 89<br />Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p>contact@climgo.fr</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-teal-200 relative z-10">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Horaires d&apos;ouverture</h3>
              <p className="text-gray-700">Lundi - Vendredi : 9h00 - 18h00<br />Samedi : 10h00 - 14h00<br />Dimanche : Fermé</p>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous contacter - Contenu SEO avec style visuel distinct */}
        <section className="mb-16 text-center bg-teal-50 py-12 rounded-xl border border-teal-200 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-16 h-16 bg-teal-600 rounded-full opacity-20 -translate-y-1/2"></div>
          <div className="absolute bottom-1/3 right-0 w-24 h-24 bg-teal-600 rounded-full opacity-20"></div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 relative z-10">Pourquoi contacter <strong>ClimGo</strong> ?</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 px-4 relative z-10">
            <p>Chez ClimGo, nous croyons en un service client d&apos;excellence. Que vous soyez prêt à lancer un projet d&apos;installation de <strong>climatisation</strong> ou de <strong>pompe à chaleur</strong>, que vous ayez besoin d&apos;un <strong>entretien</strong> pour optimiser vos équipements, ou que vous cherchiez des informations sur les <strong>subventions énergétiques</strong>, notre équipe est là pour vous guider à chaque étape.</p>
            <p>Avec plus de <strong>10 ans d&apos;expertise</strong> dans les <strong>solutions de confort thermique</strong>, nous avons aidé des milliers de foyers à réduire leurs <strong>factures énergétiques</strong> tout en améliorant leur qualité de vie. Contactez-nous pour découvrir comment nos <strong>technologies écologiques</strong> peuvent transformer votre maison.</p>
          </div>
          <Link href="/a-propos" passHref>
            <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 mt-6 relative z-10">
              En savoir plus sur ClimGo
            </Button>
          </Link>
        </section>

        {/* Call to Action - Style innovant */}
        <section className="text-center bg-gradient-to-r from-teal-700 to-blue-700 text-white py-16 rounded-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-32 h-32 bg-white rounded-full opacity-10 -translate-y-16"></div>
          <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-white rounded-full opacity-10 translate-y-16"></div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">Prêt à améliorer votre <strong>confort thermique</strong> ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10">Contactez-nous dès maintenant ou demandez un <strong>devis gratuit</strong> pour votre projet.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="/devis" passHref>
              <Button variant="outline" size="lg" className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer">
                Demander un devis
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 