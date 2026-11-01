# unordinary.digital

Static site served by Cloudflare Pages. No build step.

## Deploy
The Cloudflare Pages project `unordinary-digital` is connected to this repo: every push to `main` deploys the site.

- Build command: none
- Build output directory: `public`
- Only files inside `public/` are published. Unknown URLs serve `public/404.html`, which sends visitors to the homepage.

## Notes
- Hidden pages (print, social, google-business-profile) are included and reachable by direct link only.
- The contact form is not connected to a form service yet.
