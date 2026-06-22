// Plantilla HTML del modal del visor de imágenes.
// Separada de la lógica para mantener responsabilidad única (presentación).

export const MODAL_ID = 'image-viewer-modal';

export const modalTemplate = `
  <div class="relative max-w-7xl w-full h-full flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-2 md:mb-4">
      <div id="swipe-hint" class="text-white text-sm md:hidden flex items-center gap-1">
        <span class="material-icons text-lg">swipe_down</span>
        <span id="swipe-down-text">Desliza abajo para cerrar</span>
      </div>
      <button id="viewer-close" class="btn-ripple bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons text-xl md:text-2xl">close</span>
      </button>
    </div>

    <!-- Image Container -->
    <div class="flex-1 flex items-center justify-center relative">
      <button id="viewer-prev" class="btn-ripple absolute left-1 md:left-8 z-10 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons text-2xl md:text-3xl">chevron_left</span>
      </button>

      <div class="relative max-h-full flex items-center justify-center mx-2 md:mx-24">
        <img
          id="viewer-image"
          src=""
          alt=""
          loading="eager"
          decoding="async"
          class="max-w-full max-h-[60vh] md:max-h-[60vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
          style="cursor: zoom-in;"
        />
        <div id="gesture-hint" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm md:hidden">
          <span id="swipe-navigate-text">Desliza para navegar</span>
        </div>
      </div>

      <button id="viewer-next" class="btn-ripple absolute right-2 md:right-8 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons text-3xl">chevron_right</span>
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
    <div id="viewer-zoom-controls" class="mt-4 flex justify-center gap-4">
      <button id="viewer-zoom-out" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons">zoom_out</span>
      </button>
      <button id="viewer-zoom-reset" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons">fit_screen</span>
      </button>
      <button id="viewer-zoom-in" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm" aria-label="">
        <span class="material-icons">zoom_in</span>
      </button>
    </div>
  </div>
`;
