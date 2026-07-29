// Plantilla HTML del modal del visor de imágenes.
// Separada de la lógica para mantener responsabilidad única (presentación).

export const MODAL_ID = 'image-viewer-modal';

// Iconos SVG inline (estilo Lucide: viewBox 24x24, stroke 2, sin relleno)
// para evitar la inconsistencia de peso visual de los ligature-icons de Material Icons.
const ICON_CLOSE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
const ICON_CHEVRON_LEFT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
const ICON_CHEVRON_RIGHT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
const ICON_ZOOM_OUT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M8 11h6"/></svg>`;
const ICON_ZOOM_IN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>`;
const ICON_ZOOM_RESET = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m11-5v3a2 2 0 0 1-2 2h-3"/></svg>`;
const ICON_SWIPE_DOWN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 5v14m0 0-5-5m5 5 5-5"/></svg>`;

export const modalTemplate = `
  <div class="relative max-w-7xl w-full h-full flex flex-col overflow-y-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-2 md:mb-4">
      <div id="swipe-hint" class="text-white text-sm md:hidden flex items-center gap-1.5">
        ${ICON_SWIPE_DOWN}
        <span id="swipe-down-text">Desliza abajo para cerrar</span>
      </div>
      <button id="viewer-close" class="viewer-btn btn-ripple ml-auto" aria-label="">
        ${ICON_CLOSE}
      </button>
    </div>

    <!-- Image Container -->
    <div class="flex-1 min-h-0 flex items-center justify-center relative">
      <button id="viewer-prev" class="viewer-btn btn-ripple absolute left-2 md:left-6 z-10" aria-label="">
        ${ICON_CHEVRON_LEFT}
      </button>

      <div class="relative w-full h-full max-w-full overflow-hidden flex items-center justify-center mx-2 md:mx-24">
        <img
          id="viewer-image"
          src=""
          alt=""
          loading="eager"
          decoding="async"
          draggable="false"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style="cursor: zoom-in; transition: none; will-change: transform; user-select: none; -webkit-user-select: none; -webkit-user-drag: none;"
        />
        <div id="gesture-hint" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm md:hidden pointer-events-none">
          <span id="swipe-navigate-text">Desliza para navegar</span>
        </div>
      </div>

      <button id="viewer-next" class="viewer-btn btn-ripple absolute right-2 md:right-6 z-10" aria-label="">
        ${ICON_CHEVRON_RIGHT}
      </button>
    </div>

    <!-- Image Title and Project Name -->
    <div class="mt-4 text-center">
      <h2 id="viewer-project-name" class="text-2xl font-bold text-white mb-1"></h2>
      <h3 id="viewer-title" class="text-lg font-medium text-gray-300"></h3>
      <p id="viewer-counter" class="text-sm text-gray-400 mt-1"></p>
    </div>

    <!-- Thumbnails Slider -->
    <div class="mt-4 flex justify-center">
      <div id="thumbnails-container" class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent max-w-3xl"></div>
    </div>

    <!-- Zoom Controls -->
    <div id="viewer-zoom-controls" class="mt-4 mb-2 md:mb-4 flex justify-center">
      <div class="viewer-zoom-toolbar">
        <button id="viewer-zoom-out" class="viewer-btn btn-ripple" aria-label="">
          ${ICON_ZOOM_OUT}
        </button>
        <button id="viewer-zoom-reset" class="viewer-btn btn-ripple" aria-label="">
          ${ICON_ZOOM_RESET}
        </button>
        <button id="viewer-zoom-in" class="viewer-btn btn-ripple" aria-label="">
          ${ICON_ZOOM_IN}
        </button>
      </div>
    </div>
  </div>
`;
