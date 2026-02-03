import { Metadata } from 'next';
import { siteConfig } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  authors,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      type,
      url: fullUrl,
      title: fullTitle,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: siteConfig.name,
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function generateJSONLD(data: any) {
  return {
    '@context': 'https://schema.org',
    ...data,
  };
}

export const organizationSchema = generateJSONLD({
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icons/logo.png`,
  sameAs: Object.values(siteConfig.links).filter(Boolean),
});
