# Portfolio

My personal portfolio website, featuring my projects, skills, certifications, awards, and contact information. Fully responsive, bilingual (English/Portuguese), and supports dark and light themes.

## About the project

A single-page application with smooth scroll navigation between sections. Language and theme preferences are persisted via localStorage, so the site remembers your settings on return visits.

Sections:

- **Intro** — role, location, years of experience, and links to download my CV
- **Projects** — project cards with modal detail view
- **Skills** — scrollable carousels grouped by category
- **Certifications** — list with issue and expiry dates
- **Awards** — highlighted academic achievements
- **Contact** — social links with copy-to-clipboard

## How to use?

To run it locally:

1. Clone the repository

```bash
git clone https://github.com/Ailer-h/portifolio.git
cd portifolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser

To build for production:

```bash
npm run build
```

## Used technologies

- React 19
- TypeScript
- Vite
- React Router DOM
- Sonner
- CSS3 (custom properties for theming, no external UI library)

## Used softwares

- VSCode
- Git / GitHub
- Node.js
