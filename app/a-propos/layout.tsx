import { getSeoMetadata } from '@/lib/getSeoMetadata';
import type { Metadata } from 'next';

// Fonction pour récupérer les métadonnées SEO via une API
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('a-propos');
  return {
    title: seo?.title || 'ClimGO',
    description: seo?.description || '',
    keywords: seo?.keywords || '',
  };
}


export default function AProposLayout({
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
