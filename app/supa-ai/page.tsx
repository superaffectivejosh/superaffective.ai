import type { Metadata } from 'next';
import { SupaAiPage } from '@/components/supa-ai/supa-ai-page';

const pageUrl = 'https://superaffective.ai/supa-ai';
const shareImageUrl =
  'https://superaffective.ai/images/supa-ai/pikachu-surfing-wave-banner-april-23-2026.jpg';
const shareImageAlt =
  'Supa AI hero artwork featuring a bright electric character surfing a large blue wave.';
const pageTitle = 'Supa AI | Open Source Generative AI Video Model';
const pageDescription =
  "Introducing Supa AI, Superaffective AI's open source, open weights generative AI video model for Millennials, Gen Z, creators, fans, and AI video developers.";

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://superaffective.ai/#organization',
    name: 'Superaffective AI',
    url: 'https://superaffective.ai',
    logo: shareImageUrl,
    sameAs: [
      'https://www.youtube.com/@SuperaffectiveAI',
      'https://linktr.ee/superaffectiveai',
      'https://linkedin.com/in/joshstroud',
      'https://www.tiktok.com/@SuperaffectiveAI',
      'https://www.instagram.com/SuperaffectiveAI',
      'https://t.me/SuperaffectiveAI',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Introducing Supa AI: Generative AI Video For Millennials And Gen Z',
    description: pageDescription,
    image: [shareImageUrl],
    datePublished: '2026-04-26T00:00:00-07:00',
    dateModified: '2026-05-03T00:00:00-07:00',
    author: {
      '@type': 'Person',
      name: 'Josh Stroud',
      url: 'https://linkedin.com/in/joshstroud',
    },
    publisher: {
      '@id': 'https://superaffective.ai/#organization',
    },
    mainEntityOfPage: pageUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${pageUrl}#software`,
    name: 'Supa AI',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    description: pageDescription,
    image: shareImageUrl,
    url: pageUrl,
    creator: {
      '@id': 'https://superaffective.ai/#organization',
    },
    offers: [
      {
        '@type': 'Offer',
        price: '20',
        priceCurrency: 'USD',
        category: 'Consumer plan',
      },
      {
        '@type': 'Offer',
        price: '5000',
        priceCurrency: 'USD',
        category: 'Creator plan',
      },
    ],
    sameAs: 'https://huggingface.co/superaffectiveai/supa-ai-april-26-2026-checkpoint',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Supa AI Generative AI Video Millennial And Gen Z Launch Anthem Trailer',
    description:
      'The Supa AI Generative AI Video Millennial And Gen Z Launch Anthem Trailer.',
    thumbnailUrl: [shareImageUrl],
    uploadDate: '2026-04-26T00:00:00-07:00',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ALoaoEhllak',
    url: 'https://youtu.be/ALoaoEhllak',
    publisher: {
      '@id': 'https://superaffective.ai/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Watch The Superaffective "KPop Demon Hunters" EDM Festival Anthem Remix',
    description:
      'The Superaffective "KPop Demon Hunters" EDM Festival Anthem Remix on YouTube.',
    thumbnailUrl: [shareImageUrl],
    uploadDate: '2026-04-26T00:00:00-07:00',
    embedUrl: 'https://www.youtube-nocookie.com/embed/nJGW56TjFLM',
    url: 'https://youtu.be/nJGW56TjFLM',
    publisher: {
      '@id': 'https://superaffective.ai/#organization',
    },
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Introducing Supa AI',
    description:
      'Open source generative AI video for Millennials, Gen Z, creators, fans, and developers.',
    url: pageUrl,
    siteName: 'Superaffective AI',
    images: [
      {
        url: shareImageUrl,
        width: 3840,
        height: 2160,
        alt: shareImageAlt,
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-04-26T00:00:00-07:00',
    modifiedTime: '2026-05-03T00:00:00-07:00',
    authors: ['Josh Stroud'],
    section: 'AI Video',
    tags: [
      'Supa AI',
      'Superaffective AI',
      'Generative AI Video',
      'Open Source AI',
      'Open Weights',
      'Millennials',
      'Gen Z',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing Supa AI',
    description:
      'Open source generative AI video for Millennials, Gen Z, creators, fans, and developers.',
    images: [shareImageUrl],
  },
};

export default function SupaAiRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SupaAiPage />
    </>
  );
}
