import type { Metadata } from 'next';
import { SupaAiPage } from '@/components/supa-ai/supa-ai-page';

export const metadata: Metadata = {
  title: 'Supa AI | Generative AI Video by Superaffective AI',
  description:
    'Supa AI is Superaffective AI\'s consumer-first generative AI video platform for creators, fans, and internet-native culture.',
  alternates: {
    canonical: 'https://superaffective.ai/supa-ai',
  },
  openGraph: {
    title: 'Supa AI by Superaffective AI',
    description:
      'Create AI video with simple plain language and join the Superaffective movement.',
    url: 'https://superaffective.ai/supa-ai',
    siteName: 'Superaffective AI',
    images: [
      {
        url: '/images/supa-ai/pikachu-surfing-wave-banner-april-23-2026.jpg',
        width: 3840,
        height: 2160,
        alt: 'Supa AI hero artwork featuring a bright electric character surfing a large blue wave.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supa AI by Superaffective AI',
    description:
      'A consumer-first generative AI video platform for creators, fans, and internet-native culture.',
    images: ['/images/supa-ai/pikachu-surfing-wave-banner-april-23-2026.jpg'],
  },
};

export default function SupaAiRoute() {
  return <SupaAiPage />;
}
