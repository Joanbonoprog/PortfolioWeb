// Constantes compartidas por los scripts del cliente.
// Fuente de verdad única para breakpoints, tiempos, umbrales y límites,
// evitando números mágicos dispersos por el código.

/** Puntos de ruptura responsive (en píxeles). */
export const BREAKPOINTS = {
  /** Ancho máximo considerado móvil. */
  mobile: 768,
  /** Ancho máximo considerado tablet. */
  tablet: 1024,
} as const;

/** Tiempos de espera y transiciones (en milisegundos). */
export const TIMINGS = {
  /** Debounce antes de mostrar el tooltip de preview. */
  previewShowDelay: 150,
  /** Retardo antes de ocultar el tooltip de preview. */
  previewHideDelay: 200,
  /** Duración del fundido del slider de skills. */
  sliderFade: 300,
  /** Retardo de reintento al inicializar elementos del DOM. */
  domRetry: 100,
  /** Tiempo que permanece visible el hint de gestos. */
  gestureHintVisible: 3000,
  /** Duración del fundido del hint de gestos. */
  gestureHintFade: 500,
} as const;

/** Umbral mínimo (en píxeles) para reconocer un swipe. */
export const SWIPE_THRESHOLD = 50;

/** Límites y factores de zoom del visor de imágenes. */
export const ZOOM = {
  min: 0.5,
  max: 3,
  in: 1.2,
  out: 0.8,
  click: 1.5,
} as const;

/** Número máximo de reintentos para inicializar barras de progreso. */
export const MAX_INIT_RETRIES = 20;

/** Devuelve true si el viewport actual es de tamaño móvil. */
export function isMobileViewport(): boolean {
  return window.innerWidth <= BREAKPOINTS.mobile;
}
