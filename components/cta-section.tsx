import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#1a1037] px-6 py-16 text-center sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,242,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,110,173,0.18),transparent_22%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/60">Next step</p>
        <h3 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
          Join the movement and help shape a better world.
        </h3>
        <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
          Superaffective AI is powered by YOU! Reach out to our team and learn about joining the Superaffective Movement.
        </p>
        <Button isPlaceholder disabled className="mt-2 min-w-[240px] sm:min-w-[280px] sm:text-lg">
          Join The Movement
        </Button>
      </div>
    </section>
  );
}
