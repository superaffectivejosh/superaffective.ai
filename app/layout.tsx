import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://superaffective.ai'),
  title: 'Superaffective AI | Building Consumer Wellness For Millennials and Gen Z',
  description:
    'Superaffective AI is building a movement of wellness consumers who believe a better world is possible and want to make a difference.',
  openGraph: {
    title: 'Superaffective AI',
    description:
      'Building consumer wellness for Millennials and Gen Z with a bold, movement-driven brand experience.',
    url: 'https://superaffective.ai',
    siteName: 'Superaffective AI',
    images: [
      {
        url: '/images/hero/superaffective-hero-pichu.jpg',
        width: 1680,
        height: 945,
        alt: 'Superaffective AI hero image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superaffective AI',
    description:
      'Superaffective AI is building a movement of wellness consumers who believe a better world is possible.',
    images: ['/images/hero/superaffective-hero-pichu.jpg'],
  },
  alternates: {
    canonical: 'https://superaffective.ai',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
