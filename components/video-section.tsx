export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#120a2b] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,242,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,110,173,0.16),transparent_24%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70">
            KPop Demon Hunters
          </p>

          <h3 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Superaffective Movement &quot;KPop Demon Hunters&quot; EDM Festival Anthem Remix
          </h3>

          <p className="mt-5 w-full max-w-3xl text-center text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
            &quot;KPop Demon Hunters&quot; is the hit 2025 Netflix movie that became the most popular animated movie on Netflix of all time. &quot;Golden&quot; is the #1 song from &quot;KPop Demon Hunters&quot; with over 1B views on YouTube. Enjoy this &quot;Golden&quot; EDM Festival Anthem Remix by the popular EDM DJ W&W. Get Lit On KPop!
          </p>
        </div>

        <div className="mt-10 w-full sm:mt-12">
          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-3 shadow-[0_18px_90px_rgba(0,0,0,0.36)] backdrop-blur-[8px] sm:p-4 md:p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="relative w-full overflow-hidden pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/nJGW56TjFLM"
                  title="K-Pop Demon Hunters Superaffective Movement Festival Anthem Remix"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
