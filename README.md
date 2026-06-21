# Personal Portfolio Website

A modern and responsive portfolio website built with **Astro** and **Tailwind CSS**. Includes my projects, experience, skills, and more with an elegant, accessible, and multilingual interface.

## Features

- **Multilingual**: Spanish and English via Astro's native i18n routing (`/` and `/en/`)
- **Accessibility**: Font-size controls, accessible image-viewer dialog (focus trap, `aria-modal`), and `prefers-reduced-motion` support
- **Animations**: Smooth transitions, card animations, and typewriter effect
- **Customizable Theme**: Dynamic theme switching (light/dark) with localStorage persistence
- **Responsive**: Mobile-first design fully adaptable to all screen sizes
- **Ultra Fast**: Statically generated with Astro and WebP-optimized images
- **Tailwind CSS**: Modern and customizable styles with dark mode support
- **Bento Grid Layout**: Modern asymmetric grid design in About and Contact sections
- **Material Icons**: Consistent icon system using Google Material Icons
- **Custom Scrollbar**: Gradient-styled scrollbar that adapts to light/dark themes
- **Animated Background**: Wave animation effect in the hero section
- **Link Previews**: Rich hover previews for LinkedIn, GitHub, Artimark and projects
- **Scroll Progress Indicator**: Visual progress bar showing scroll position
- **Schema.org**: Structured data (JSON-LD) for improved SEO
- **Skills Slider**: Interactive slider with navigation controls for skills display
- **Hardened Server**: Custom Node server with security headers, CSP, rate limiting, and AI-crawler allowlist
- **Custom 404**: Real 404 page served with the correct HTTP status
- **Crawler-friendly**: `robots.txt` and `llms.txt` for search engines and LLMs

## Project Structure

```
src/
├── components/
│   ├── Portfolio.astro          # Composes the full page from sections
│   ├── layout/                  # Header, Footer, AccessibilityControls
│   ├── sections/                # Hero, About, Education, Projects, Experience, Skills, Contact
│   └── ui/                      # Reusable UI primitives (cards, buttons, tags, etc.)
├── config/
│   └── constants.ts             # Shared constants (breakpoints, timings, zoom limits)
├── data/
│   ├── profile.ts               # Single source of personal data + JSON-LD builder
│   ├── project-galleries.ts     # Image galleries per project
│   ├── tech-logos.ts            # Skill → logo mapping
│   └── link-previews.ts         # Hover link-preview data
├── i18n/
│   ├── en.json                  # English translations
│   ├── es.json                  # Spanish translations
│   └── index.ts                 # i18n helpers (getTranslations, detectBrowserLanguage)
├── layouts/
│   └── Layout.astro             # Main layout (meta, Schema.org, i18n data island)
├── pages/
│   ├── index.astro              # Spanish homepage (default locale)
│   ├── en/index.astro           # English homepage
│   └── 404.astro                # Custom 404 page
├── scripts/                     # Client TypeScript modules (bundled by Astro)
│   ├── image-viewer/            # Modular image viewer (modal, zoom, gestures, orchestrator)
│   ├── i18n-bootstrap.ts        # Reads the i18n JSON data island into window.__i18n__
│   ├── theme.ts                 # Light/dark theme system
│   ├── skills-slider.ts         # Skills slider + progress bars
│   ├── scroll-ui.ts             # Scroll progress bar + back-to-top (rAF throttled)
│   ├── scroll-animations.ts     # IntersectionObserver fade-ins
│   ├── text-animations.ts       # Section title / stagger animations
│   ├── accessibility.ts         # Font-size controls + active nav section
│   ├── link-preview.ts          # Rich hover previews
│   └── font-loader.ts           # Non-blocking font loading (CSP-safe)
├── types/
│   └── translations.ts          # TypeScript types for translations
├── assets/                      # Images and resources
└── styles/
    └── global.css               # Global styles, scrollbar, reduced-motion

public/
├── CV/                          # PDF documents (Spanish and English)
├── images/
│   ├── brand/ education/ experience/ hero/ projects/ skills/   # WebP assets
├── robots.txt                   # Crawler rules (incl. explicit AI bots)
└── llms.txt                     # Site summary for LLMs

server.js                        # Custom static file server (security headers, CSP, rate limit)
scripts/check-i18n-parity.js     # Dev tool: verifies es.json / en.json key parity
```

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the built site locally |
| `node server.js` | Serve the built `./dist/` in production (used on deploy) |
| `node scripts/check-i18n-parity.js` | Verify that `es.json` and `en.json` share the same keys |

## Tech Stack

- **[Astro 6.4.8](https://astro.build)** - Modern SSG framework with native i18n routing
- **[Tailwind CSS 4.1.17](https://tailwindcss.com)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev)** - Ultra-fast bundler
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development (strict)
- **[Material Icons](https://fonts.google.com/icons)** - Google's icon library
- **Node.js** - Custom static file server (`server.js`) for production
- **Client scripts** - Plain TypeScript modules bundled by Astro (no runtime dependencies)

## Highlighted Features

### Multilingual (i18n)
Languages use Astro's native i18n routing: Spanish is the default at `/` and English lives at `/en/`. All text is rendered at build time from `src/i18n/*.json`. For the few client scripts that need translated strings, the active language is embedded as a non-executable JSON data island and read by `i18n-bootstrap.ts` into `window.__i18n__`.

### Accessibility Controls
Includes options to increase font size, improving the experience for all users. Controls are accessible via a dedicated component in the header.

### Animations
- **Card animations**: Shimmer effect and hover transitions
- **Typewriter effect**: Dynamic text animation in the hero section
- **Scroll animations**: Fade-in effects when elements come into view
- **Animated background**: Wave animation in the hero section

### Dynamic Theme
A lightweight theme switching system (light/dark) stored in localStorage. The theme persists across sessions and adapts all UI elements including the custom scrollbar.

### Bento Grid Layout
Modern asymmetric grid design used in:
- **About section**: Cards for professional description, languages, current status, continuous learning, and driver's license
- **Contact section**: Cards for email, phone, LinkedIn, GitHub, and address with different sizes for visual hierarchy

### Schema.org Integration
Structured data (JSON-LD) for improved SEO including:
- Person profile with job title
- Contact information
- Educational background (alumniOf)
- Skills and expertise (knowsAbout)

### Skills Slider
Interactive slider with:
- Navigation buttons (prev/next)
- Technology logos from `/public/images/skills/`
- Progress bars showing skill levels
- Responsive grid layout (1-3 columns)

### Security & Server
The production server (`server.js`) is a dependency-free Node static file server that adds:
- **Security headers**: CSP, `X-Frame-Options`, `X-Content-Type-Options`, HSTS, `Referrer-Policy`, `Permissions-Policy`
- **Rate limiting**: per-IP, with static assets and known AI/search crawlers exempted
- **Path-traversal protection** and a real **404** response for unknown routes

### Performance
- Project images served as **WebP** (~87% smaller than the original PNGs)
- Fonts loaded non-blocking and subset to the weights actually used
- Scroll handlers throttled with `requestAnimationFrame` and registered as passive
- Animations respect `prefers-reduced-motion`

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Community](https://astro.build/chat)
- [Material Icons](https://fonts.google.com/icons)

---

