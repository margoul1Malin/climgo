"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contactInfos, setContactInfos] = useState({ adress: '', phone: '', mail: '' });

  useEffect(() => {
    fetch('/api/contact-infos')
      .then(res => res.json())
      .then(data => setContactInfos({
        adress: data.adress || '',
        phone: data.phone || '',
        mail: data.mail || ''
      }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!nom || !email || !sujet || !message) {
      setError('Veuillez remplir tous les champs obligatoires.');
      setLoading(false);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Adresse email invalide.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, email, sujet, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setNom('');
        setEmail('');
        setSujet('');
        setMessage('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Erreur lors de l\'envoi de la demande.');
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi de la demande:', err);
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow my-24">
        {/* Section d'introduction - Contenu SEO avec mise en page unique */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800"><strong>Parlons de votre projet</strong>, Contact ClimGO</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 px-4">
            <p>Vous avez une question, un projet d’installation ou besoin d’un devis ?</p>

<p><strong>Contactez ClimGO</strong> : nous vous accompagnons avec écoute, réactivité et des solutions techniques sur mesure.</p>

<p><strong>Vous souhaitez installer une pompe à chaleur, une climatisation ou un chauffe-eau performant ? Vous avez besoin d’informations sur les aides disponibles pour vos travaux de rénovation énergétique ? Contactez ClimGO, votre spécialiste du confort thermique dans le Sud-Ouest.</strong></p>

<p>Chez ClimGO, nous savons qu’un bon accompagnement commence par une <strong>écoute attentive</strong>. C’est pourquoi notre équipe se tient à votre disposition pour vous apporter un <strong>premier conseil</strong>, un <strong>devis gratuit</strong>, ou tout simplement <strong>répondre à vos questions</strong>.</p>

<p>Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, nous vous proposons des solutions sur mesure pour votre logement ou vos locaux. Notre expertise couvre le chauffage, la climatisation, la production d’eau chaude sanitaire, l’entretien de vos équipements, mais aussi toutes <strong>les aides de l’État (MaPrimeRénov’, CEE, TVA réduite…)</strong>.</p>

<p>Un <strong>besoin urgent</strong> ? Une <strong>question technique</strong> ? Un <strong>projet en réflexion</strong> ? Contactez ClimGO via le formulaire ci-dessous ou par téléphone. Vous recevrez une réponse rapide, claire, et personnalisée.</p>

<p><strong>Parce que chaque projet est unique, notre priorité reste la vôtre.</strong></p>
          </div>
        </section>

        {/* Mise en page innovante : Formulaire et infos côte à côte avec style distinct */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Formulaire de contact - Colonne de gauche (3/5) */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg border border-teal-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Envoyez-nous un message</h2>
            {success ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 text-center transform transition-all duration-300">
                <p>Votre demande de contact a été envoyée avec succès. Nous vous répondrons bientôt !</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm transform transition-all duration-300">
                    <p>{error}</p>
                  </div>
                )}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Label htmlFor="nom" className="block mb-2 text-gray-700">Votre nom</Label>
                  <Input
                    id="nom"
                    type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    placeholder="Votre nom complet"
                      className={`w-full border ${nom ? 'border-green-500 focus:ring-green-500' : 'border-gray-300'} focus:ring-2 focus:outline-none rounded-lg`}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-700">Votre email</Label>
                  <Input
                    id="email"
                    type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    placeholder="exemple@domaine.com"
                      className={`w-full border ${email ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ? 'border-green-500 focus:ring-green-500' : 'border-red-500 focus:ring-red-500' : 'border-gray-300'} focus:ring-2 focus:outline-none rounded-lg`}
                  />
                </div>
                <div>
                  <Label htmlFor="sujet" className="block mb-2 text-gray-700">Sujet</Label>
                  <Input
                    id="sujet"
                    type="text"
                      value={sujet}
                      onChange={(e) => setSujet(e.target.value)}
                      required
                    placeholder="Objet de votre message"
                      className={`w-full border ${sujet ? 'border-green-500 focus:ring-green-500' : 'border-gray-300'} focus:ring-2 focus:outline-none rounded-lg`}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block mb-2 text-gray-700">Votre message</Label>
                    <Textarea
                    id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    placeholder="Décrivez votre demande ou question..."
                      className={`w-full border ${message ? 'border-green-500 focus:ring-green-500' : 'border-gray-300'} focus:ring-2 focus:outline-none rounded-lg min-h-[150px]`}
                  />
                </div>
              </div>
              <div className="text-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-teal-600 text-white hover:bg-teal-700 w-full md:w-auto px-6 py-2 transition-all duration-300"
                  >
                    {loading ? 'Envoi en cours...' : 'Envoyer mon message'}
                </Button>
                <p className="text-sm text-gray-500 mt-2">En soumettant ce formulaire, vous acceptez que ClimGo traite vos données pour répondre à votre demande.</p>
              </div>
            </form>
            )}
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
                  <p>{contactInfos.adress || '—'}</p>
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
                  <p>{contactInfos.phone || '—'}</p>
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
                  <p>{contactInfos.mail || '—'}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-teal-200 relative z-10">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Horaires d&apos;ouverture</h3>
              <p className="text-gray-700">Lundi - Vendredi : 08:00–19:30<br />Week-end : Fermé</p>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
} 