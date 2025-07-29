# connorn-dev-homepage (Next.js)

This is a Next.js version of the connorn.dev homepage, ready for deployment on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build & Export for GitHub Pages

```bash
# Set env var for GitHub Pages
export GITHUB_PAGES=true
npm run build
npm run export
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This will build, export, and push the static site to the `gh-pages` branch using the `gh-pages` package.

## Notes
- Make sure your repo name matches the `basePath` and `assetPrefix` in `next.config.js` (currently set to `/homepage`).
- All static assets (images, favicon, PDF) should be placed in the `public/` directory. 