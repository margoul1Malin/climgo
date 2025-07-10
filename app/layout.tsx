import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import SessionLayout from '@/components/SessionLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClimGo - Expert en Climatisation et Pompes à Chaleur',
  description: 'ClimGo offre des solutions de climatisation et de pompes à chaleur pour un confort optimal. Demandez un devis dès aujourd’hui !',
  keywords: 'climatisation, pompes à chaleur, installation climatisation Arcachon, entretien pompes à chaleur, solutions de chauffage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
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
