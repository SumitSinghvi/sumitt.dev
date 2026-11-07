# Skycraft

Astro + Tailwind portfolio/agency site. Edit brand, links, services and projects in `src/data/site.ts`.

```bash
npm install
npm run dev      # local preview
npm run build    # outputs to dist/
```

## Deploy to Cloudflare Pages (Git integration)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo, then set:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable (optional): `NODE_VERSION=22`
4. Save and Deploy. Every push to `main` redeploys; other branches get preview URLs.
5. Add your domain under the project's Custom domains tab.

## Deploy from the CLI

```bash
npx wrangler login
npm run deploy
```

## Before going live

- Set `site.url` and `site.formEndpoint` (Formspree) in `src/data/site.ts`.
- Replace placeholder email, booking and social links and the sample projects.
