# unordinary.digital

Static site served by Cloudflare Workers (static assets). No build step.

## Deploy
Cloudflare Workers Builds is connected to this repo: every push to `main` deploys the `unordinary-digital` Worker using `wrangler.jsonc`.

- Build command: none
- Deploy command: `npx wrangler deploy`
- Files that shouldn't be served (config, README) are listed in `.assetsignore`.
- Unknown URLs serve `404.html`, which sends visitors to the homepage.

## Notes
- Hidden pages (print, social, google-business-profile) are included and reachable by direct link only.
- The contact form is not connected to a form service yet.
