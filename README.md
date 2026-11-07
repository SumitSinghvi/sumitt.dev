# Sumitt.dev

Astro + Tailwind portfolio/agency site. Edit brand, links, services and projects in `src/data/site.ts`.

```bash
npm install
npm run dev      # local preview
npm run build    # outputs to dist/
```

## Deploy to Cloudflare (Workers static assets)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Import a repository, then select this repo.
3. Set:
   - Project/Worker name: `sumitt-dev` (must match `name` in `wrangler.jsonc`)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Save and Deploy. Every push to `main` redeploys.
5. Add your domain under the Worker's Settings → Domains & Routes → Add → Custom domain.

Config lives in `wrangler.jsonc`; headers and caching in `public/_headers`.

## Deploy from the CLI

```bash
npx wrangler login
npm run deploy
```

## Before going live

- Set `site.url` and `site.formEndpoint` (Formspree) in `src/data/site.ts`.
- Replace placeholder email, booking and social links and the sample projects.
