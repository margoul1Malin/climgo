import prismadb from './prismadb';

export async function getSeoMetadata(pageTag: string) {
  const metadata = await prismadb.seoMetadata.findUnique({
    where: { pageName: pageTag }
  });
  if (!metadata) return null;
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
} 