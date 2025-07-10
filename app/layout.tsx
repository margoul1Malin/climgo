import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SessionLayout from '@/components/SessionLayout';
import { getSeoMetadata } from '@/lib/getSeoMetadata';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('accueil');
  return {
    title: seo?.title || 'ClimGO',
    description: seo?.description || '',
    keywords: seo?.keywords || '',
  };
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ClimGo",
          "image": "https://climgo.fr/logoClimGo.png",
          "url": "https://climgo.fr",
          "telephone": "+33 7 66 46 00 08",
          "email": "contact@climgo.fr", /* A changer */
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "28 rue de Cantelaude",
            "addressLocality": "Marcheprime",
            "addressRegion": "Nouvelle-Aquitaine",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8378,
            "longitude": -0.5792
          },
          "openingHours": "Mo-Fr 07:00-19:00",
          "priceRange": "$$",
          "sameAs": [
            "https://www.facebook.com/climgo", /* A changer */
            "https://www.instagram.com/climgo" /* A changer */
          ],
          "areaServed": [ /* A compléter */
            {
              "@type": "Place",
              "name": "Arcachon"
            },
            {
              "@type": "Place",
              "name": "Bordeaux"
            },
            {
              "@type": "Place",
              "name": "Libourne"
            }
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Installation de Climatisation & Pompes à Chaleur",
          "provider": {
            "@type": "LocalBusiness",
            "name": "ClimGo"
          },
          "areaServed": [
            {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Arcachon",
                "addressCountry": "FR"
              }
            },
            {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bordeaux",
                "addressCountry": "FR"
              }
            },
            {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Libourne",
                "addressCountry": "FR"
              }
            }
          ],
          "description": "Installation, maintenance et dépannage de climatisations et pompes à chaleur à Arcachon, Bordeaux et Libourne. Interventions rapides et garanties."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Benjamin Cardozo"
          },
          "datePublished": "2025-07-10",
          "reviewBody": "ClimGo a installé une climatisation réversible dans notre maison à Bordeaux. Travail propre, rapide et professionnel.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "ClimGo"
          }
        }) }} />
      </head>
      <body className={inter.className}>
        <SessionLayout>
          {children}
        </SessionLayout>
      </body>
    </html>
  );
}

/* async function getSeoMetadata(pageName: string) {
  const seoMetadata = await prismadb.seoMetadata.findUnique({
    where: { pageName },
  });
  return seoMetadata;
}

// Définir les métadonnées
export const metadata: Metadata = {
  title: 'ClimGO - Solutions de Climatisation et Pompes à Chaleur',
  description: 'ClimGO offre des solutions de climatisation et de pompes à chaleur pour un confort optimal toute l\'année. Découvrez nos services d\'installation, d\'entretien et de réparation.',
  keywords: 'climatisation, pompes à chaleur, installation, entretien, réparation, ClimGO',
}; */