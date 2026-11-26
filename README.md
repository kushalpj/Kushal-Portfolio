# Kushal P J — Developer Portfolio

React 19 + Vite + Tailwind CSS v4 + Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Things you need to add

1. **Resume** — put your PDF at `public/resume.pdf`. The Resume / Download Resume buttons point to `/resume.pdf`.
2. **Contact form email** — copy `.env.example` to `.env` and fill in your EmailJS service ID, template ID and public key.
   Your EmailJS template can use these variables: `from_name`, `reply_to`, `subject`, `message`, `to_email`.
   Until configured, the form validates input but says clearly that nothing was sent and offers a `mailto:` fallback.
3. **Project links** — in `src/data/portfolioData.js`, add `github: 'https://…'` and/or `live: 'https://…'` to a project.
   The GitHub / Live Demo buttons appear only when those fields exist.
4. **Open Graph image** (optional) — add `public/og.png` and an `og:image` tag in `index.html`.

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer, AnimatedSection
  data/portfolioData.js   all content lives here
  index.css     Tailwind theme tokens (colors, fonts) + utilities
```

All content comes from the supplied brief; no metrics, links or certifications were invented.
