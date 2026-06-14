# Personal Portfolio Website

A modern and responsive portfolio website built with **Astro** and **Tailwind CSS**. Includes my projects, experience, skills, and more with an elegant, accessible, and multilingual interface.

## Features

- **Multilingual**: Full support for Spanish and English with dynamic language switching
- **Accessibility**: Integrated accessibility controls for font size adjustment
- **Animations**: Smooth transitions, card animations, and typewriter effect
- **Customizable Theme**: Dynamic theme switching (light/dark) with localStorage persistence
- **Responsive**: Mobile-first design fully adaptable to all screen sizes
- **Ultra Fast**: Statically generated with Astro for optimal performance
- **Tailwind CSS**: Modern and customizable styles with dark mode support
- **Bento Grid Layout**: Modern asymmetric grid design in About and Contact sections
- **Material Icons**: Consistent icon system using Google Material Icons
- **Custom Scrollbar**: Gradient-styled scrollbar that adapts to light/dark themes
- **Animated Background**: Wave animation effect in the hero section
- **Link Previews**: Rich link previews for LinkedIn and Artimark
- **Scroll Progress Indicator**: Visual progress bar showing scroll position
- **Schema.org**: Structured data for improved SEO
- **Skills Slider**: Interactive slider with navigation controls for skills display

## Project Structure

```
src/
├── components/
│   ├── About.astro              # About me section with Bento Grid layout
│   ├── Contact.astro            # Contact section with Bento Grid layout
│   ├── Education.astro          # Educational background
│   ├── Experience.astro         # Professional experience with Material Icons
│   ├── Projects.astro           # Portfolio projects with image galleries
│   ├── Skills.astro             # Technical skills with slider navigation
│   ├── Hero.astro               # Hero section with typewriter effect
│   ├── Header.astro             # Navigation with language switcher
│   ├── Footer.astro             # Footer section
│   └── AccessibilityControls.astro # Accessibility controls component
├── i18n/
│   ├── en.json                  # English translations
│   ├── es.json                  # Spanish translations
│   └── index.ts                 # i18n configuration
├── layouts/
│   └── Layout.astro             # Main layout with Schema.org data
├── pages/
│   └── index.astro              # Homepage
├── types/
│   └── translations.ts          # TypeScript types for translations
├── assets/                      # Images and resources
└── styles/
    └── global.css               # Global styles with custom scrollbar

public/
├── CV/                          # PDF documents (Spanish and English)
├── images/
│   ├── skills/                  # Technology logos (SVG/PNG)
│   ├── experience/              # Company logos
│   └── hero/                    # Hero section images
├── i18n-client.js               # Client-side i18n translations
└── *.js                         # Client scripts (animations, theme, scroll)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the built site locally |

## Tech Stack

- **[Astro 6.3.1](https://astro.build)** - Modern SSG framework
- **[Tailwind CSS 4.1.17](https://tailwindcss.com)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev)** - Ultra-fast bundler
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Material Icons](https://fonts.google.com/icons)** - Google's icon library
- **Vanilla JavaScript** - Client scripts without dependencies

## Highlighted Features

### Multilingual (i18n)
The site automatically detects and switches between languages. Texts are dynamically loaded from JSON files with both server-side rendering (SSR) and client-side updates via `i18n-client.js`.

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

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Community](https://astro.build/chat)
- [Material Icons](https://fonts.google.com/icons)

---

