# Personal Portfolio Website

A modern and responsive portfolio website built with **Astro** and **Tailwind CSS**. Includes my projects, experience, skills, and more with an elegant, accessible, and multilingual interface.

## Features

- **Multilingual**: Full support for Spanish and English
- **Accessibility**: Integrated accessibility controls
- **Animations**: Smooth transitions and visual effects
- **Customizable Theme**: Dynamic theme switching
- **Responsive**: Mobile-first design fully adaptable
- **Ultra Fast**: Statically generated with Astro
- **Tailwind CSS**: Modern and customizable styles

## Project Structure

```
src/
├── components/
│   ├── About.astro          # About me section
│   ├── Contact.astro        # Contact form
│   ├── Education.astro      # Educational background
│   ├── Experience.astro     # Professional experience
│   ├── Projects.astro       # Portfolio projects
│   ├── Skills.astro         # Technical skills
│   ├── Hero.astro           # Hero section
│   ├── Header.astro         # Navigation
│   └── Footer.astro         # Footer
├── i18n/
│   ├── en.json              # English texts
│   ├── es.json              # Spanish texts
│   └── index.ts             # i18n configuration
├── layouts/
│   └── Layout.astro         # Main layout
├── pages/
│   └── index.astro          # Homepage
├── assets/                  # Images and resources
└── styles/
    └── global.css           # Global styles

public/
├── CV/                      # PDF documents
└── *.js                     # Client scripts (animations, theme, i18n)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the built site locally |

## Tech Stack

- **[Astro 5.15.8](https://astro.build)** - Modern SSG framework
- **[Tailwind CSS 4.1.17](https://tailwindcss.com)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev)** - Ultra-fast bundler
- **Vanilla JavaScript** - Client scripts without dependencies


## Highlighted Features

### Multilingual (i18n)
The site automatically detects and switches between languages. Texts are dynamically loaded from JSON files.

### Accessibility Controls
Includes options to increase font size, adjust contrast, and change fonts, improving the experience for all users.

### Animations
Optimized scripts that add smooth transitions when scrolling and element visibility effects.

### Dynamic Theme
A lightweight theme switching system (light/dark) stored in localStorage.

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Community](https://astro.build/chat)

---

