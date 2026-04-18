import { CtaSection } from '@/components/cta-section';
import { HeroSection } from '@/components/hero-section';
import { VideoSection } from '@/components/video-section';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CtaSection />
      <VideoSection />
    </main>
  );
}
