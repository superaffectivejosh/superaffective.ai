import Image from 'next/image';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

const heroImage = '/images/supa-ai/pikachu-surfing-wave-banner-april-23-2026.jpg';
const studioImage =
  '/images/supa-ai/pikachu-youtube-livestreaming-ai-video-creation-playful-april-20-2026.png';
const founderImage = '/images/supa-ai/josh-stroud-profile-photo-april-20-2026.jpeg';

const emailHref = 'mailto:add-friend@superaffective.ai';
const modelHref = 'https://huggingface.co/superaffectiveai/supa-ai-april-26-2026-checkpoint';

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

type ContentCardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

type InlineLinkProps = {
  children: ReactNode;
  href: string;
};

function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden bg-[#120a2b] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28',
        className
      )}
    >
      {children}
    </section>
  );
}

function ContentCard({ children, className, title }: ContentCardProps) {
  return (
    <article
      className={cn(
        'rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_18px_90px_rgba(0,0,0,0.28)] backdrop-blur-[8px] sm:p-8 md:p-10 lg:p-12',
        className
      )}
    >
      {title ? (
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      ) : null}
      <div
        className={cn(
          'text-lg leading-9 text-white/78 sm:text-xl sm:leading-10 md:text-[1.35rem] md:leading-[2.35rem] [&_p+p]:pt-10 [&_p]:max-w-[70ch]',
          title && 'mt-10'
        )}
      >
        {children}
      </div>
    </article>
  );
}

function InlineLink({ children, href }: InlineLinkProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="supa-ai-link"
    >
      {children}
    </a>
  );
}

function CtaButtons({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center',
        align === 'center' && 'justify-center'
      )}
    >
      <Button href={emailHref} className="min-w-[240px] !text-[#1a1037] sm:min-w-[268px]">
        Sign Up Now
      </Button>
      <a
        href={modelHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120726]"
      >
        Download The Model
      </a>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-[#09051e] text-white">
      <Image
        src={heroImage}
        alt="Bright electric character surfing a powerful blue ocean wave."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(126,242,238,0.2),transparent_28%),linear-gradient(180deg,rgba(8,3,26,0.06)_0%,rgba(8,3,26,0.28)_42%,rgba(8,3,26,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,7,38,0.88)_0%,rgba(18,7,38,0.52)_42%,rgba(18,7,38,0.14)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-28 sm:px-8 md:pb-14 lg:px-12">
        <article className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/18 p-6 shadow-[0_20px_90px_rgba(0,0,0,0.34)] backdrop-blur-[10px] sm:p-8 md:p-10 lg:p-12">
          <div className="mb-8 flex flex-wrap gap-3 text-base font-medium uppercase tracking-[0.2em] text-white/78 sm:text-lg">
            <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5">Supa AI</span>
            <span className="rounded-full border border-[#7ef2ee]/30 bg-[#7ef2ee]/12 px-5 py-2.5 text-[#d8fffb]">
              AI Video Model Launch
            </span>
            <span className="rounded-full border border-[#fff7d6]/30 bg-[#fff7d6]/12 px-5 py-2.5 text-[#fff7d6]">
              Open Source, Open Weights
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hey Superaffective Fans,
          </h1>

          <div className="mt-10 text-lg leading-9 text-white/84 sm:text-xl sm:leading-10 md:text-[1.35rem] md:leading-[2.35rem] [&_p+p]:pt-10 [&_p]:max-w-[68ch]">
            <p>
              It’s your boy Josh Stroud with the latest and greatest in AI technology, built just
              for you :)
            </p>
            <p>
              With great technology comes great responsibility - We’re tested this AI technology for
              2 years with a seasoned team of AI / ML experts, UI / UX designers, and Distributed
              Systems engineers. Our AI technology is safe, and ready for the world - Here’s to
              looking at you,{' '}
              <InlineLink href="https://www.anthropic.com/glasswing">Anthropic Mythos</InlineLink>{' '}
              :)
            </p>
            <p>
              With great technology, Superaffective AI is ready to take on the world - Are you ready
              to create Video that you can post, For Free, to YouTube, Instagram, TikTok, and your
              favorite video and music streaming platforms? Are you ready to be Inspired,
              Transformed, and Excited To Write Video Prompts? Are you ready to use Simple Plain
              Language to Create Videos That Inspire? Join Superaffective AI and Change The World :)
            </p>
          </div>

          <div className="mt-12">
            <CtaButtons align="center" />
          </div>
        </article>
      </div>
    </section>
  );
}

function LaunchActionsSection() {
  return (
    <SectionShell className="bg-[#120726] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,110,173,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(126,242,238,0.14),transparent_24%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2">
        <a
          href={emailHref}
          className="group rounded-[2rem] border border-white/10 bg-black/22 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-[8px] transition hover:-translate-y-1 hover:border-[#fff7d6]/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120726] sm:p-8"
        >
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            SIGN UP NOW
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            add-friend@superaffective.ai
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Send an email to sign up for Superaffective AI’s Generative AI Video Platform.
          </p>
        </a>

        <a
          href={modelHref}
          target="_blank"
          rel="noreferrer"
          className="group rounded-[2rem] border border-white/10 bg-black/22 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-[8px] transition hover:-translate-y-1 hover:border-[#7ef2ee]/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120726] sm:p-8"
        >
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            DOWNLOAD THE SUPA AI MODEL NOW
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            “Supa AI” AI Video Model
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Download the model on Hugging Face for developers and AI / ML researchers.
          </p>
        </a>
      </div>
    </SectionShell>
  );
}

function WelcomeSection() {
  return (
    <SectionShell id="welcome" className="bg-[#170d34]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,242,238,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,110,173,0.16),transparent_22%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="Welcome To Superaffective AI">
          <p>
            You might have heard of{' '}
            <InlineLink href="https://deepmind.google/models/veo/">Google Veo</InlineLink>,{' '}
            <InlineLink href="https://openai.com/sora/">OpenAI Sora</InlineLink>, and{' '}
            <InlineLink href="https://seed.bytedance.com/en/seedance2_0">ByteDance Seedance</InlineLink>{' '}
            - They’re AI Video Generators created by tech companies and AI research labs in San
            Francisco, California, London, UK, and Beijing, China.{' '}
            <InlineLink href="https://superaffective.ai/supa-ai">
              Superaffective AI’s Supa AI
            </InlineLink>{' '}
            is a little different.
          </p>
          <p>
            Supa AI is launching in Superaffective AI’s AI Cloud with two pricing tiers: a $20 a
            month Consumer plan, and a $5,000 to $10,000 a month Creator plan. Superaffective AI
            users on the Consumer plan can generate videos up to 60 seconds in length an unlimited
            number of times, just like OpenAI’s Sora, Google Veo, and ByteDance’s Seedance.
            Superaffective AI Creators can create unlimited videos up to 1 hour in length, perfect
            for social media like YouTube and video streaming services.
          </p>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function PricingSection() {
  return (
    <SectionShell className="bg-[#140a30]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,247,214,0.1),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(126,242,238,0.12),transparent_26%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-5">
        <article className="rounded-[2rem] border border-white/10 bg-black/22 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-[8px] sm:p-8 lg:p-10">
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            Consumer plan
          </p>
          <p className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">$20</p>
          <p className="mt-6 max-w-[72ch] text-lg leading-9 text-white/72 sm:text-xl sm:leading-10">
            Superaffective AI users on the Consumer plan can generate videos up to 60 seconds in
            length an unlimited number of times.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-black/22 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-[8px] sm:p-8 lg:p-10">
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            Creator plan
          </p>
          <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            $5,000 to $10,000
          </p>
          <p className="mt-6 max-w-[72ch] text-lg leading-9 text-white/72 sm:text-xl sm:leading-10">
            Superaffective AI Creators can create unlimited videos up to 1 hour in length, perfect
            for social media like YouTube and video streaming services.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}

function ModelSection() {
  return (
    <SectionShell id="model" className="bg-[#0f0826]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(36,216,232,0.16),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(255,247,214,0.1),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard
          className="border-[#7ef2ee]/18 bg-[#7ef2ee]/8"
          title="Download the “Supa AI” AI Video Model Here"
        >
          <p>
            For the developers and AI / ML researchers: You can download the{' '}
            <InlineLink href={modelHref}>“Supa AI” AI Video Model here on Hugging Face.</InlineLink>{' '}
            The Supa AI video is Open Source, Open Weights, meaning that anyone can download and run
            the model, for free, just like{' '}
            <InlineLink href="https://openai.com/open-models/">OpenAI’s gpt-oss</InlineLink>,{' '}
            <InlineLink href="https://qwen.ai/">Alibaba’s Qwen</InlineLink>, and{' '}
            <InlineLink href="https://deepmind.google/models/gemma/">Google Gemma</InlineLink>. The
            model runs on an Nvidia Hopper H100.
          </p>
          <div className="pt-8">
            <CtaButtons align="center" />
          </div>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function ModelFeatureSection() {
  return (
    <SectionShell className="bg-[#120726]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(36,216,232,0.13),transparent_24%),radial-gradient(circle_at_right,rgba(255,110,173,0.12),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_18px_90px_rgba(0,0,0,0.28)] backdrop-blur-[8px] sm:p-8 md:p-10 lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            Model capabilities
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
            Key AI Video Model Features
          </h2>
        </div>
        <div className="mt-10 grid gap-5">
          {['Open Source', 'Open Weights', 'Runs on an Nvidia Hopper H100 GPU'].map((label) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.045)_48%,rgba(126,242,238,0.08))] p-6 text-center shadow-[0_18px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[12px] transition hover:-translate-y-0.5 hover:border-[#fff7d6]/35 hover:bg-white/10 sm:p-8"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,247,214,0.75),transparent)]" />
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#7ef2ee]/10 blur-2xl transition group-hover:bg-[#fff7d6]/14" />
              <p className="relative z-10 text-xl font-semibold tracking-[-0.02em] text-white drop-shadow-[0_1px_18px_rgba(255,255,255,0.1)] sm:text-2xl">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PolicyAndLetterSection() {
  return (
    <SectionShell className="bg-[#120a2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,110,173,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(126,242,238,0.12),transparent_25%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="Superaffective AI Copyright Policy">
          <p>
            Superaffective AI follows YouTube’s permissive “Fair Use” policies, guidelines, and{' '}
            <InlineLink href="https://www.youtube.com/static?template=terms">
              Terms of Service
            </InlineLink>.
            Copyright law in the US was passed in 1976 - Before computers, before desktop
            publishing, before the internet, before social media and viral videos, and before AI and
            ChatGPT. Superaffective AI believes copyright policies in the US need an update.{' '}
            <InlineLink href="https://www.linkedin.com/in/davidoliversacks/">David Sacks</InlineLink>,
            looking at you buddy :)
          </p>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function DavidSacksLetterSection() {
  return (
    <SectionShell className="bg-[#160d32]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,110,173,0.13),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(126,242,238,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="To David Sacks - A Letter From An AI Content Creator">
          <p>Hey David,</p>
          <p>
            It’s Josh Stroud. I’m a YouTuber and AI startup CEO based in San Francisco, California.
            I’ve been working in Generative AI Video since 2019, long before ChatGPT and the AI
            technology wave reached billions of people.
          </p>
          <p>
            My team at Superaffective AI is building Generative AI Video for Millennials and Gen Z -
            We’re young, we’re hip, and we’re the same age as your kids. Dad?
          </p>
          <p>
            David, here’s what I want you to know - AI Video is here. Copyright, intellectual
            property (IP), and commercial art laws in the US are broken - They were passed in 1976.
            Copyright law needs a Glow Up for AI in 2026. Superaffective AI wants to help :)
          </p>
          <p>
            Thanks for reading, David. I assume someone sent this to you - You do read, right? Like,
            you’re not on TikTok, watching{' '}
            <InlineLink href="https://youtu.be/yLW4fOmeI5s">KATSEYE music videos</InlineLink>? Me
            neither :)
          </p>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function VideoSection() {
  return (
    <SectionShell className="bg-[#120a2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,242,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,110,173,0.16),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center text-center">
          <p className="text-base font-medium uppercase tracking-[0.22em] text-white/58 sm:text-lg">
            KPop Demon Hunters
          </p>
          <h2 className="mt-5 w-full text-center text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-pretty sm:text-4xl md:text-5xl">
            Watch The Superaffective &quot;KPop Demon Hunters&quot; EDM Festival Anthem Remix On YouTube
          </h2>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/20 p-3 shadow-[0_18px_90px_rgba(0,0,0,0.36)] backdrop-blur-[8px] sm:p-4 md:p-5">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="relative w-full overflow-hidden pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/nJGW56TjFLM"
                title="KPop Demon Hunter EDM Festival Anthem Remix Video On Superaffective AI YouTube"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SignupSection() {
  return (
    <SectionShell id="signup" className="bg-[#160d32]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,247,214,0.12),transparent_24%),radial-gradient(circle_at_82%_70%,rgba(255,63,120,0.18),transparent_28%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_24px_100px_rgba(0,0,0,0.34)] sm:min-h-[480px] lg:min-h-[640px]">
          <Image
            src={studioImage}
            alt="Playful electric character in a bright creator studio with livestreaming and AI video equipment."
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,7,38,0.02)_0%,rgba(18,7,38,0.18)_62%,rgba(18,7,38,0.72)_100%)]" />
        </div>
      </div>
    </SectionShell>
  );
}

function SignupCopySection() {
  return (
    <SectionShell className="bg-[#120726]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,247,214,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,63,120,0.14),transparent_28%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="Superaffective Fans, Are You Ready To Sign Up?">
          <p>
            Hey Superaffective Fans, send me an email at{' '}
            <InlineLink href={emailHref}>add-friend@superaffective.ai</InlineLink> to sign up for
            Superaffective AI’s Generative AI Video Platform. Supa AI is here - And it’s Supa Good
            At AI Video.
          </p>
          <p>
            <InlineLink href={emailHref}>add-friend@superaffective.ai</InlineLink> is connected to
            Josh Stroud’s OpenClaw account - It can handle 50k emails a day - And it’s running on{' '}
            <InlineLink href="https://aws.amazon.com/">Amazon Web Services (AWS)</InlineLink> and{' '}
            <InlineLink href="https://www.docker.com/">Docker</InlineLink>. Signing up with your
            favorite email means you get exclusive access to the $20 a month Consumer AI Video
            Generation plan, brought to you by Superaffective AI. Supa AI - Supa Good At AI VIdeo.
            Superaffective fans, drop me a like, send me a message, and add me as a friend on{' '}
            <InlineLink href="https://www.facebook.com/">Facebook</InlineLink> - And{' '}
            <InlineLink href="https://www.facebook.com/zuck/">Mark</InlineLink>? Please, please get
            a Korean skin cream :)
          </p>
          <div className="pt-8">
            <CtaButtons align="center" />
          </div>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function CompanySection() {
  return (
    <SectionShell className="bg-[#100823]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,242,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,110,173,0.13),transparent_24%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="Superaffective AI Company Information - Press and Investors, Read This">
          <p>
            For the press, and for investors. Two different markets, two very different ways to
            communicate. This company update is for you.
          </p>
          <p>
            Josh Stroud is the CEO of Superaffective AI. Josh went to UC Berkeley MechE, EECS, and
            Product Design Class of 2014. Josh has 10 years experience with Software Engineering, AI
            and AI Video, and UI, UX, and Product Design. Josh is an AI Researcher, a Product
            Designer, and a Technology Leader. Josh Stroud lives In San Francisco, Palo Alto, and Los
            Angeles. Josh can be reached at{' '}
            <InlineLink href="mailto:josh@superaffective.ai">josh@superaffective.ai</InlineLink>{' '}
            and online on <InlineLink href="https://linkedin.com/in/joshstroud">LinkedIn</InlineLink>.
            Josh Stroud is a{' '}
            <InlineLink href="https://open.spotify.com/artist/4bYPcJP5jwMhSivRcqie2n?si=3W3iW5kNTyGHiJs25Bc_ng">
              Dreamboat
            </InlineLink>.
          </p>
          <p>
            Superaffective AI is building the next generation of Generative AI Video. Superaffective
            AI’s “Supa AI” model is Open Source, Open Weights, and hosted on{' '}
            <InlineLink href="https://huggingface.co/">Hugging Face</InlineLink>.{' '}
            <InlineLink href={modelHref}>Find the model weights here.</InlineLink> The Supa AI
            model can generate up to 1 hour of consistent, high quality video, music and audio,
            images, and text, and runs on an{' '}
            <InlineLink href="https://www.nvidia.com/">Nvidia</InlineLink> Hopper H100 GPU.
          </p>
          <p>
            For the press - Josh Stroud is doing no press interviews in 2026. Josh and Superaffective
            AI are hard at work building our product, driving growth and go to market (GTM), and
            delighting our Superaffective fans on YouTube, Instagram, and TikTok :) To learn about
            Josh, follow him on YouTube, Instagram, and TikTok, and try Superaffective AI’s Supa AI
            Generative AI Video platform when it comes out - Supa AI is coming soon :) A note for the
            press: All press requests for interviews or comments will be ignored. Sorry :)
          </p>
          <p>
            Investors - We’re raising a Series A in 2027. We’re looking for mission-aligned,
            values-aligned venture capital (VC) investors who believe in Consumer AI - Not corporate,
            not enterprise, and not agentic AI. Agentic AI is unsafe. We’re looking for investors and
            VCs who are ethical and mission-aligned and have impact investor LPs - We will ask about
            LP alignment in our Series A investment meetings. Unfortunately, we will not consider
            Series A investment from investors and VCs outside these guidelines.
          </p>
          <p>
            Investors interested in staying connected to Superaffective AI’s company progress can
            email <InlineLink href={emailHref}>add-friend@superaffective.ai</InlineLink> with a
            short letter of introduction and a contact email for follow-up. This email is connected
            to our CRM and an OpenClaw running on AWS, and will save your email and information. The
            Supa AI Generative AI Video Platform is launching soon. Create some videos when it comes
            out, and have fun :) Stay in touch!
          </p>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

function YouTubeSection() {
  const socialCards = [
    { label: 'YouTube', href: 'https://www.youtube.com/@SuperaffectiveAI' },
    { label: 'Linktree', href: 'https://linktr.ee/superaffectiveai' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@SuperaffectiveAI' },
    { label: 'Instagram', href: 'https://www.instagram.com/SuperaffectiveAI' },
    { label: 'Telegram', href: 'https://t.me/SuperaffectiveAI' },
  ];

  return (
    <SectionShell className="bg-[#170d34]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,110,173,0.16),transparent_24%),radial-gradient(circle_at_right,rgba(36,216,232,0.16),transparent_24%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8">
        <ContentCard title="Superaffective AI Is Lit On YouTube! - “You Stay Classy, San Diego”">
          <p>
            Josh Stroud is a YouTuber on YouTube. You know, that platform that everyone watches,
            except for the over-50 crowd. Sorry, Trump and David Sacks - YouTube is not for you :)
          </p>
          <p>
            Josh Stroud is 33 and young enough to remember discovering Team Fortress 2 on YouTube -
            Team Fortress 2 is a team-based action game with kid-friendly characters and
            action-packed gameplay developed by Valve and Steam in 2007. Team Fortress 2 is lit! One
            time, I played 40 hours in a week like it was my job - Gaming when you’re a kid is the
            best :)
          </p>
          <p>
            Today, Josh Stroud is posting videos to YouTube every day on{' '}
            <InlineLink href="https://www.youtube.com/@SuperaffectiveAI">
              Superaffective AI’s YouTube channel
            </InlineLink>.
            Subscribe and like for daily new videos from Superaffective AI and Superaffective AI’s
            Generative AI Video App Supa AI - Only on{' '}
            <InlineLink href="https://www.youtube.com/">YouTube</InlineLink>.
          </p>
          <p>
            Follow Josh Stroud and Superaffective on Social Media on{' '}
            <InlineLink href="https://linktr.ee/superaffectiveai">
              Superaffective AI’s Linktree here.
            </InlineLink>
          </p>
          <p>
            Josh Stroud is “The Ron Burgundy of Generative AI Video”. He’s Young, Hip, and He Loves
            Hip-Hop. Josh Stroud is JSizzle, the hit Pop and Hip-Hop artist with singles like
            “Blonde Rap Genius” and “Sun Kissed San Diego”. Find him on Spotify and YouTube, coming
            soon :)
          </p>
          <p>
            Superaffective AI is coming to{' '}
            <InlineLink href="https://www.tiktok.com/@SuperaffectiveAI">TikTok</InlineLink>! Watch
            all of your favorite videos and discover viral trends on Superaffective AI’s TikTok
            channel. Superaffective AI is waiting for you - Don’t tell{' '}
            <InlineLink href="https://en.wikipedia.org/wiki/NPC_(meme)">
              the Instagram NPCs
            </InlineLink>{' '}
            :)
          </p>
          <p>
            Superaffective AI is on{' '}
            <InlineLink href="https://www.instagram.com/SuperaffectiveAI">Instagram</InlineLink>.
            Instagram is the #1 social media platform for Millennials and Gen Z. With 3B users
            around the world, Instagram is the most popular social media app with the best features
            and the best user experience (UX). Superaffective AI on Instagram is your home for the
            Superaffective fam.
          </p>
          <p>
            Superaffective AI has a{' '}
            <InlineLink href="https://t.me/SuperaffectiveAI">Telegram</InlineLink>. Josh Stroud
            sends Telegram updates about Superaffective AI daily :) Telegram is perfect for a more
            personal and connected messaging experience with Josh Stroud and Superaffective AI. 1B
            Telegram users around the world can’t be wrong :)
          </p>
        </ContentCard>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-24 items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-black/22 px-6 py-6 text-xl font-semibold tracking-[-0.02em] text-white shadow-[0_14px_54px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#ff6ead]/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170d34] sm:min-h-28 sm:px-7 sm:py-7 sm:text-2xl"
            >
              <span>{card.label}</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-lg text-white/70 transition group-hover:border-[#ff6ead]/50 group-hover:text-[#ff6ead]">
                +
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SignoffSection() {
  return (
    <SectionShell className="bg-[#120726] pb-5 pt-16 sm:pb-6 sm:pt-20 lg:pb-8 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,214,0.11),transparent_28%),radial-gradient(circle_at_bottom,rgba(126,242,238,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto w-full max-w-md">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/12 bg-black/20 shadow-[0_20px_90px_rgba(0,0,0,0.3)]">
          <Image
            src={founderImage}
            alt="Josh Stroud smiling outdoors."
            fill
            sizes="(min-width: 1024px) 34vw, 82vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </SectionShell>
  );
}

function FounderLetterSection() {
  return (
    <SectionShell className="bg-[#120726] pt-5 sm:pt-6 lg:pt-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,214,0.1),transparent_28%),radial-gradient(circle_at_bottom,rgba(126,242,238,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ContentCard title="Until Next Time, Superaffective Fans!">
          <p>
            Superaffective AI is SO excited to meet Generative AI Video Fans and Creators from
            around the world. Generative AI Video is is here, and it’s Open Source :){' '}
            <InlineLink href="https://youtu.be/egx0dDz8DXk">
              OpenAI’s Generative AI Video App Sora
            </InlineLink>{' '}
            might have shut down, but Superaffective AI is just getting started :)
          </p>
          <p>
            Superaffective fans, this is your friendly Superaffective AI CEO Josh Stroud signing.
            “You Stay Classy, San Diego”. And - I wrote this whole blog post myself - Let’s see{' '}
            <InlineLink href="https://openai.com/index/accelerating-the-next-phase-ai/">
              Sam Altman do that
            </InlineLink>{' '}
            :)
          </p>
          <div className="pt-6 text-lg leading-7 text-white/84 sm:text-xl sm:leading-8">
            <div>– Josh Stroud</div>
            <div>
              CEO, <InlineLink href="https://superaffective.ai/">Superaffective AI</InlineLink>
            </div>
            <div>“The Ron Burgundy of Generative AI Video”</div>
            <div>San Francisco, California</div>
            <div>UC Berkeley MechE, EECS, and Product Design Class of 2014</div>
          </div>
          <div className="pt-8">
            <CtaButtons align="center" />
          </div>
        </ContentCard>
      </div>
    </SectionShell>
  );
}

export function SupaAiPage() {
  return (
    <main className="bg-[#120726]">
      <HeroSection />
      <LaunchActionsSection />
      <WelcomeSection />
      <PricingSection />
      <ModelSection />
      <ModelFeatureSection />
      <PolicyAndLetterSection />
      <DavidSacksLetterSection />
      <VideoSection />
      <SignupSection />
      <SignupCopySection />
      <CompanySection />
      <YouTubeSection />
      <SignoffSection />
      <FounderLetterSection />
    </main>
  );
}
