import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-[#170d34] text-white">
      <Image
        src="/images/hero/superaffective-hero-pichu.jpg"
        alt="Vibrant Superaffective AI hero artwork featuring an energetic electric creature in bright pink, yellow, aqua, and violet tones."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(18,7,38,0.06)_0%,rgba(18,7,38,0.24)_35%,rgba(18,7,38,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,13,52,0.72)_0%,rgba(23,13,52,0.25)_38%,rgba(23,13,52,0.15)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-32 sm:px-8 sm:pb-16 md:pb-20 lg:px-12 lg:pb-24">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/10 p-6 shadow-[0_10px_80px_rgba(0,0,0,0.28)] backdrop-blur-[10px] sm:p-8 md:p-10 lg:max-w-4xl lg:p-12">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/80">
            Consumer wellness, reimagined
          </p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Superaffective AI: Building Consumer Wellness For Millennials and Gen Z
          </h1>

          <h2 className="mt-6 max-w-3xl text-pretty text-base font-normal leading-7 text-white/84 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            Superaffective AI is building a movement of wellness consumers who believe a better world is
            possible and want to make a difference. Join the movement by emailing add-friend@superaffective.ai :)
          </h2>
        </div>
      </div>
    </section>
  );
}
