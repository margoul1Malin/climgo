import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClimGo - Blog sur la Climatisation et les Pompes à Chaleur',
  description: 'Découvrez nos articles sur la climatisation et les pompes à chaleur. Conseils, astuces et informations pour optimiser votre confort thermique.',
  keywords: 'blog climatisation, conseils pompes à chaleur, astuces chauffage, ClimGo blog',
};

export default function BlogLayout({
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