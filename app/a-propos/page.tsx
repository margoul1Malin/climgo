import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaShieldAlt, FaCertificate, FaCheckCircle, FaUserTie, FaTools, FaBolt, FaLeaf } from 'react-icons/fa';

export default function APropos() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 mb-12 flex-grow my-24">
        {/* Section 1 : Présentation artisan RGE à Marcheprime */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-16 mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">ClimGO, votre artisan RGE en chauffage & climatisation à Marcheprime</h1>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            ClimGO, artisan RGE Marcheprime, est une entreprise spécialisée dans l’installation, la mise en service et la maintenance de systèmes thermiques et énergétiques sur mesure.<br/>
            Basée en Gironde, nous intervenons auprès des particuliers et des professionnels avec un haut niveau d’exigence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="flex flex-col items-center">
              <FaTools className="w-12 h-12 text-blue-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">Méthode & Suivi</h3>
              <p className="text-gray-600 text-center">Étude technique rigoureuse, dimensionnement précis, installation soignée et suivi assuré.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCertificate className="w-12 h-12 text-green-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">Certifications & Assurances</h3>
              <p className="text-gray-600 text-center">Certifié RGE, attestation fluides frigorigènes, assuré en décennale (MAAF).</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLeaf className="w-12 h-12 text-cyan-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">Durabilité & Performance</h3>
              <p className="text-gray-600 text-center">Systèmes durables, performants, conformes aux normes, pour un confort maîtrisé et une efficacité énergétique optimale.</p>
            </div>
          </div>
        </section>

        {/* Section 2 : Garanties professionnelles */}
        <section className="bg-blue-50 rounded-3xl shadow-lg p-8 md:p-16 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-3"><FaShieldAlt className="inline-block text-blue-600" /> Garanties professionnelles avec votre artisan RGE à Marcheprime</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Chez ClimGO, chaque chantier est couvert par une assurance responsabilité civile professionnelle et une garantie décennale.<br/>
            <span className="font-semibold">Qu’est-ce que ça change pour vous ?</span><br/>
            Toutes nos installations – chauffage, climatisation, eau chaude sanitaire, ventilation – sont assurées pendant 10 ans contre les dommages liés à notre intervention.
          </p>
          <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto mb-6 border border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 text-blue-700 font-semibold"><FaShieldAlt className="w-6 h-6" /> Assureur : <span className="font-bold">MAAF Assurances</span></div>
              <div className="text-gray-700">Contrat n° : <span className="font-bold">133144624 U MCE – 001</span></div>
            </div>
            <div className="mt-2 text-gray-700">Activités couvertes : <span className="font-semibold">Plomberie, chauffage, climatisation, ventilation, énergies renouvelables.</span></div>
          </div>
          <p className="text-base text-gray-600 text-center max-w-2xl mx-auto">
            Parce qu’un bon artisan, c’est aussi un artisan couvert. Et chez ClimGO, artisan RGE basé à Marcheprime, la protection du client fait partie de l’engagement pro, pas d’une option.
          </p>
        </section>

        {/* Section 3 : Nos certifications */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-16 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center flex items-center justify-center gap-3"><FaCertificate className="inline-block text-green-600" /> Nos certifications d’artisan RGE à Marcheprime</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* QualiPAC RGE */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <FaCertificate className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">QualiPAC RGE</h3>
              <p className="text-gray-600 text-center">Certification indispensable pour installer des pompes à chaleur et faire bénéficier nos clients des aides de l’État (MaPrimeRénov’, CEE…). Elle atteste d’une excellence énergétique reconnue.</p>
            </div>
            {/* Fluides frigorigènes */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <FaLeaf className="w-10 h-10 text-cyan-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">Attestation fluides frigorigènes (catégorie 1)</h3>
              <p className="text-gray-600 text-center">Obligatoire pour manipuler les fluides frigorigènes en toute sécurité, cette certification garantit une installation conforme à la réglementation environnementale.</p>
            </div>
            {/* Habilitation électrique BR */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <FaBolt className="w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">Habilitation électrique BR</h3>
              <p className="text-gray-600 text-center">Indispensable pour intervenir en toute sécurité sur les circuits électriques de vos climatiseurs, chauffe-eaux et pompes à chaleur.</p>
            </div>
            {/* BEP & Bac Pro TISEC */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <FaUserTie className="w-10 h-10 text-green-700 mb-3" />
              <h3 className="font-semibold text-lg mb-1 text-gray-800">BEP & Bac Pro TISEC</h3>
              <p className="text-gray-600 text-center">Un parcours complet de technicien installateur en systèmes énergétiques & climatiques, validé par diplôme et expérience terrain.</p>
            </div>
          </div>
          <p className="text-base text-gray-600 text-center mt-8 max-w-2xl mx-auto">
            Parce que la performance passe par la maîtrise, chaque qualification que nous détenons est une garantie de sécurité, d’expertise et de qualité.
          </p>
        </section>

        {/* Section 4 : Pourquoi choisir un artisan RGE à Marcheprime ? */}
        <section className="bg-blue-50 rounded-3xl shadow-lg p-8 md:p-16 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center flex items-center justify-center gap-3"><FaCheckCircle className="inline-block text-blue-600" /> Pourquoi choisir un artisan RGE à Marcheprime pour vos travaux ?</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Faire appel à un artisan RGE à Marcheprime, c’est s’assurer d’un travail reconnu par l’État, éligible aux aides (MaPrimeRénov’, CEE) et respectueux des normes. Chez ClimGO, chaque projet est réalisé avec méthode, dans le respect de votre logement et des performances énergétiques attendues.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="w-7 h-7 text-green-600 mt-1" />
              <span className="text-gray-700 text-base">Éligibilité aux aides de l’État (MaPrimeRénov’, CEE…)</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="w-7 h-7 text-green-600 mt-1" />
              <span className="text-gray-700 text-base">Respect strict des normes et de la réglementation</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="w-7 h-7 text-green-600 mt-1" />
              <span className="text-gray-700 text-base">Accompagnement personnalisé et conseils d’expert</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="w-7 h-7 text-green-600 mt-1" />
              <span className="text-gray-700 text-base">Installation, maintenance et suivi de qualité</span>
            </li>
          </ul>
          <p className="text-base text-gray-600 text-center max-w-2xl mx-auto">
            Que ce soit pour l’installation d’une pompe à chaleur, d’un climatiseur ou d’un chauffe-eau, nous vous accompagnons avec rigueur, transparence et efficacité.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 