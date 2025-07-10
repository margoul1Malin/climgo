import Link from 'next/link';
import React from 'react';

export default function LegalTerms() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Mentions légales</h1>
      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Informations sur l’entreprise</h2>
          <ul className="list-disc pl-6">
            <li><strong>Nom de la société :</strong> ClimGO</li>
            <li><strong>Forme juridique :</strong> SASU</li>
            <li><strong>Capital social :</strong> 3 000 euros</li>
            <li><strong>Siège social :</strong> 28 rue de Cantelaude, 33380 Marcheprime, France</li>
            <li><strong>SIREN :</strong> 943699066</li>
            <li><strong>TVA intracommunautaire :</strong> FR17943699066</li>
            <li><strong>Responsable de la publication :</strong> Benjamin Cardoso (Président)</li>
            <li><strong>Adresse email :</strong> contact@climgo.fr</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Hébergement</h2>
          <p>Le site <span className="font-semibold">www.climgo.fr</span> est hébergé par la société :</p>
          <ul className="list-disc pl-6">
            <li>OVH SAS</li>
            <li>Siège social : 2 rue Kellermann, 59100 Roubaix, France</li>
            <li>Téléphone : 1007 (numéro gratuit depuis une ligne fixe en France)</li>
            <li>Site web : <Link href="https://www.ovh.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.ovh.com</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
          <p>L’ensemble du contenu du site <span className="font-semibold">www.climgo.fr</span> (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de la société ClimGO, sauf mentions contraires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de ClimGO.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Responsabilité</h2>
          <p>ClimGO s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société ne saurait être tenue responsable des erreurs, omissions ou d&apos;un dysfonctionnement technique.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Données personnelles</h2>
          <p>Pour consulter notre politique de traitement des données personnelles et cookies, merci de vous référer à notre page « <Link href="/legal/legal-mentions" className="text-blue-600 underline">Politique de confidentialité</Link> ».</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Droit applicable et juridiction compétente</h2>
          <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d’une solution amiable, les tribunaux français seront seuls compétents.</p>
        </div>
      </section>
      <div className="flex justify-center mt-10">
        <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}