# Superaffective AI Homepage

A Vercel-ready Next.js homepage for Superaffective AI.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next/font
- next/image

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  cta-section.tsx
  hero-section.tsx
  ui/button.tsx
lib/
  cn.ts
public/
  images/hero/superaffective-hero-pichu.jpg
```

## Deployment to Vercel

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Set the production domain to `superaffective.ai`.
4. Deploy.

No environment variables are required for this first version.

## Notes

- The CTA button is intentionally implemented as a styled placeholder while the destination is still being chosen.
- The hero image is stored locally in `/public` for simple deployment and caching.
- For production performance, consider exporting an additional compressed hero variant if you want to further reduce image weight.

## Future improvements

- Wire the CTA to a waitlist, signup form, or `/join` page
- Add Vercel Analytics and Speed Insights
- Add favicon, app icons, and a custom OG image
- Add additional homepage sections as the brand evolves

## Security

- No secrets are committed
- `.env*.local` is ignored by `.gitignore`
- No third-party scripts are included in this version
