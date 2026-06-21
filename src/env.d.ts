/// <reference types="astro/client" />

import type { Translations } from './types/translations';

declare global {
  interface Window {
    /** Alterna el tema claro/oscuro. Definido en /src/scripts/theme.ts */
    toggleTheme?: () => void;
    /** Inicializa el tema al cargar la página. Definido en /src/scripts/theme.ts */
    initTheme?: () => void;
    /** Abre la galería de imágenes de un proyecto. Definido en /src/scripts/image-viewer.ts */
    openProjectGallery?: (projectName: string) => void;
    /** Traducciones del idioma actual embebidas desde SSR en Layout.astro */
    __i18n__?: Translations;
  }
}

export {};
