/// <reference types="astro/client" />

import type { Translations } from './types/translations';

declare global {
  interface Window {
    /** Alterna el tema claro/oscuro. Definido en /public/theme.js */
    toggleTheme?: () => void;
    /** Abre la galería de imágenes de un proyecto. Definido en /public/image-viewer.js */
    openProjectGallery?: (projectName: string) => void;
    /** Traducciones del idioma actual embebidas desde SSR en Layout.astro */
    __i18n__?: Translations;
  }
}

export {};
