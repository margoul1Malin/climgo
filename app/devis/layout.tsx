import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ClimGo - Devis Gratuit',
    description: 'Obtenez un devis gratuit pour vos projets de climatisation, pompes à chaleur ou eau chaude sanitaire. Installation, entretien et devis gratuit partout en France.',
    keywords: 'devis climatisation, devis pompes à chaleur, devis eau chaude sanitaire, devis gratuit climatisation, devis gratuit pompes à chaleur, devis gratuit eau chaude sanitaire, climatisation Arcachon',
  };

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
} 