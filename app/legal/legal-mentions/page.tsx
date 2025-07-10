import React from 'react';
import Link from 'next/link';

export default function LegalMentions() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Politique de Confidentialité</h1>
      <p className="text-sm text-gray-500 text-center mb-8">Dernière mise à jour : 12 mai 2025</p>
      <section className="space-y-6 text-gray-700">
        <p>La présente Politique de Confidentialité décrit la manière dont ClimGO collecte, utilise et protège vos données personnelles lors de votre utilisation du site <span className="font-semibold">www.climgo.fr</span>. En accédant à nos services, vous acceptez les pratiques décrites ci-dessous.</p>
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Données collectées, données personnelles</h2>
          <ul className="list-disc pl-6">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Toute information fournie via nos formulaires de contact ou de devis</li>
            <li>Données de navigation (données d’utilisation)</li>
            <li>Adresse IP</li>
            <li>Type d’appareil et de navigateur</li>
            <li>Pages consultées, durée de visite</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Utilisation des données</h2>
          <ul className="list-disc pl-6">
            <li>Vous contacter dans le cadre d’un devis ou d’une prestation</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
            <li>Vous transmettre des offres commerciales si vous y avez consenti</li>
            <li>Répondre à vos demandes ou questions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Partage des données</h2>
          <ul className="list-disc pl-6">
            <li>Prestataires techniques hébergeant ou maintenant le site</li>
            <li>Obligations légales ou demandes des autorités compétentes</li>
          </ul>
          <p>Vos données ne sont ni vendues ni cédées à des fins commerciales sans votre consentement explicite.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
          <ul className="list-disc pl-6">
            <li>Mémoriser vos préférences</li>
            <li>Mesurer la fréquentation du site via Google Analytics</li>
          </ul>
          <p>Vous pouvez désactiver les cookies à tout moment via les paramètres de votre navigateur.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Durée de conservation</h2>
          <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf obligations légales contraires.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Vos droits</h2>
          <ul className="list-disc pl-6">
            <li>Accès, rectification ou suppression de vos données</li>
            <li>Opposition ou limitation du traitement</li>
            <li>Portabilité de vos données</li>
          </ul>
          <p>Vous pouvez exercer vos droits par e-mail à l&apos;adresse suivante : <Link href="mailto:contact@climgo.fr" className="text-blue-600 underline">contact@climgo.fr</Link></p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">7. Sécurité</h2>
          <p>ClimGO met en œuvre toutes les mesures techniques raisonnables pour protéger vos données contre la perte, l’accès non autorisé ou l’altération.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">8. Modifications</h2>
          <p>ClimGO peut mettre à jour cette politique à tout moment. Toute modification importante vous sera notifiée sur le site.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Informations société</h2>
          <ul className="list-disc pl-6">
            <li><strong>Société :</strong> ClimGO, fondée en 2025</li>
            <li><strong>Adresse e-mail :</strong> contact@climgo.fr</li>
            <li><strong>Site :</strong> www.climgo.fr</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Documents utiles</h2>
          <ul className="list-disc pl-6">
            <li><Link href="/legal/terms" className="text-blue-600 underline">Mentions légales</Link></li>
            <li><Link href="/legal/legal-mentions" className="text-blue-600 underline">Politique de Confidentialité</Link></li>
          </ul>
        </div>
        <div className="text-center text-gray-400 mt-8">ClimGO © 2025. Tous droits réservés.</div>
      </section>
      <div className="flex justify-center mt-10">
        <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}