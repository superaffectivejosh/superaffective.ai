# Superaffective AI - Open Source Website GitHub Repo

## Superaffective AI: Building Generative AI Video For Millennials and Gen Z

This is the public website for Superaffective AI, a consumer AI company building beautiful, expressive, internet-native products for Millennials, Gen Z, creators, fans, and developers. The site introduces the Superaffective movement and the Supa AI launch page: an open source, open weights generative AI video model announcement designed to feel premium, energetic, social, and alive.

Superaffective AI is building the next generation of Generative AI Video. The Supa AI model is positioned as an open source, open weights AI video model hosted on Hugging Face, built for creators who want to make video with simple plain language and share it across YouTube, Instagram, TikTok, and the wider internet.

## What This Repo Is

This repository contains a Vercel-ready Next.js website for:

- **Superaffective AI homepage**: the brand landing page for Superaffective AI and the Superaffective Movement.
- **Supa AI launch page**: a full model launch announcement page at `/supa-ai` with founder copy, pricing, model download CTAs, YouTube embeds, social links, SEO metadata, Open Graph sharing metadata, and structured data.

The site is intentionally static, fast, and simple to deploy. No database, backend service, or private API key is required.

## Pages

### `/`

The homepage introduces Superaffective AI with a bold, image-led hero, movement-focused copy, a call-to-action section, and a YouTube video section. It sets the brand foundation: vibrant, optimistic, expressive, and made for a younger consumer audience.

### `/supa-ai`

The Supa AI page is a polished AI model launch announcement page. It includes:

- Above-the-fold hero for Supa AI
- Founder letter from Josh Stroud
- Primary CTAs for signing up and downloading the model
- Pricing section for Consumer and Creator plans
- Hugging Face model download section
- Key AI video model features
- Copyright policy and creator letter
- YouTube trailer embeds
- Social media links
- Company information for press and investors
- Final founder signoff with Josh Stroud's profile photo

The page is built to work as a social launch page, a product announcement, a founder letter, and an SEO landing page at the same time.

## Technology Stack

- **Next.js App Router** for routing, metadata, static rendering, and Vercel deployment
- **React 19** for component-driven UI
- **TypeScript** for safer frontend code
- **Tailwind CSS v4** for styling and responsive design
- **next/image** for optimized local image assets
- **next/font** with Inter and Plus Jakarta Sans
- **Vercel Analytics** for lightweight production analytics
- **JSON-LD structured data** for better search understanding
- **Open Graph and Twitter card metadata** for social and iMessage sharing

## Design Direction

The Superaffective AI website is designed to feel like a premium San Francisco AI startup collided with internet culture at full speed.

The design language uses:

- Deep violet and near-black page backgrounds
- Cream, aqua, pink, and electric accent colors
- Glassy panels with soft borders and blur
- Large readable body text
- Rounded premium CTA buttons
- Rich hover states with cream glows
- High-energy 4K-style image assets
- Full-width vertical content sections
- Founder-led storytelling
- Social-first launch page structure

The vibe is expressive, dynamic, beautiful, Millennial/Gen Z, and high-quality.

## Key Product And Design Decisions

- **Use the real marketing voice**: the Supa AI page preserves the marketing copy and founder voice rather than flattening it into generic AI startup language.
- **Make CTAs obvious**: the two key actions are signing up by email and downloading the model on Hugging Face.
- **Keep the page vertical**: most sections flow one after another, full-width, so the launch page reads naturally on web and mobile.
- **Make text readable**: body copy uses large type, generous spacing, and high contrast.
- **Treat social sharing as a first-class product surface**: the Supa AI page includes dedicated title, description, Open Graph, Twitter card, and JSON-LD metadata.
- **Use privacy-conscious embeds**: YouTube videos use `youtube-nocookie.com`.
- **Harden the public surface**: production security headers are configured in `next.config.ts`.
- **Keep the codebase lightweight**: no unnecessary backend, no secrets, no database, no complex CMS.

## SEO And Social Sharing

The Supa AI page is optimized for search engines and social sharing with:

- Canonical URL metadata
- Open Graph article metadata
- Twitter summary large image card metadata
- Absolute social share image URL
- iMessage-friendly preview copy
- JSON-LD for Organization, Article, SoftwareApplication, and VideoObject
- Descriptive image alt text
- Clear single H1 per route

Primary SEO themes include:

- Superaffective AI
- Supa AI
- Open source generative AI video model
- Open weights AI video model
- Generative AI video for Millennials and Gen Z
- AI video model launch
- Consumer AI video platform

## Security And Open Source Readiness

This project is built as frontend-first public website code. It is safe to publish because:

- No secrets are required to run the project
- No API keys are committed
- `.env*.local` is ignored
- `.vercel` is ignored
- `.pem` files are ignored
- Vercel Analytics is the only analytics runtime
- YouTube embeds use the privacy-enhanced embed host
- External links opened in a new tab use `noopener noreferrer`
- Security headers are configured in `next.config.ts`
- `X-Powered-By` is disabled
- PostCSS is pinned with an override to the patched dependency line

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  supa-ai/
    page.tsx

components/
  cta-section.tsx
  hero-section.tsx
  video-section.tsx
  supa-ai/
    supa-ai-page.tsx
  ui/
    button.tsx

lib/
  cn.ts

public/
  images/
    hero/
      superaffective-hero-pichu.jpg
    supa-ai/
      josh-stroud-profile-photo-april-20-2026.jpeg
      pikachu-surfing-wave-banner-april-23-2026.jpg
      pikachu-youtube-livestreaming-ai-video-creation-playful-april-20-2026.png
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site:

```text
http://localhost:3000
```

Open the Supa AI launch page:

```text
http://localhost:3000/supa-ai
```

If port `3000` is already in use, Next.js will choose another port such as `3001`.

## Useful Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the production site.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run typecheck
```

Runs TypeScript without emitting files.

```bash
npm run lint
```

Runs the Next.js lint command.

## Deploy To Vercel

This project is built for Vercel.

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Set the production domain to `superaffective.ai`.
5. Deploy.

No environment variables are required for the current site.

For preview deployments, push a branch or open a GitHub pull request. Vercel will create a preview URL automatically. When the PR is merged into the production branch, Vercel deploys production.

## About Josh Stroud

Josh Stroud is the CEO of Superaffective AI, a YouTuber, AI startup founder, software engineer, AI video builder, product designer, and technology leader based in San Francisco, California. He studied Mechanical Engineering, EECS, and Product Design at UC Berkeley Engineering Class of 2014.

Josh has 10 years of experience across software engineering, AI and AI video, UI/UX, and product design. He is building Superaffective AI for creators, fans, Millennials, Gen Z, and everyone who believes generative AI video should be expressive, social, open, and fun.

## The Ethos

Superaffective AI is not trying to look like another quiet enterprise dashboard. This website is built around a different belief:

Great AI products can be both technical and emotionally alive.

They can be open source and premium.

They can be founder-led and user-centered.

They can be fast, readable, secure, beautiful, and fun.

They can be led by Open Source Developers on GitHub. GitHub, join us in creating the World's First Open Source, Open Weights Generative AI Video Model - Just like Meta / Facebook's React :)
