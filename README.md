# Clement Bros. website concept

Independent prospect concept. React + Vite + Tailwind with existing shadcn controls.

Pages: home, services, our story, staff, careers, portfolio, contact, and company archive. The former ownership URL also opens the team page. Direct page entry points are generated during build.

Company gallery and staff photographs are stored in public/assets; sources.json records the original image URLs.

Cloudflare Workers Git build settings: repository NickRoyOfficial/clement-bros, branch main, root /, empty build command, deploy command npx wrangler deploy. npm ci runs prepare, which builds dist automatically. Worker name: clement-bros.

Local development: npm ci, npm run dev. Checks: npm run check and npm run build. The inquiry form prepares a reviewable email draft; visitors send it in their email app. No backend delivery is configured. Payment stays with the existing external provider.

Kept noindex and clearly identified as an independent concept.
