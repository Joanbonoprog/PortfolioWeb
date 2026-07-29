// Responsabilidad única: construir el DOM del modal, exponer sus elementos,
// traducir sus textos y adaptar la vista a móvil/escritorio.
import { isMobileViewport, TIMINGS } from '../../config/constants';
import { MODAL_ID, modalTemplate } from './modal-template';

export class ImageViewerModal {
  readonly root: HTMLElement;

  constructor() {
    this.root = document.createElement('div');
    this.root.id = MODAL_ID;
    this.root.className =
      'fixed inset-0 bg-black/90 backdrop-blur-sm z-[10000] hidden items-center justify-center p-2 md:p-4 pb-4 md:pb-6';
    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('aria-label', window.__i18n__?.ariaLabels?.closeGallery || 'Galería de imágenes');
    this.root.innerHTML = modalTemplate;
    document.body.appendChild(this.root);

    this.translateTexts();
    this.setupResponsiveView();
  }

  /** Devuelve los elementos enfocables visibles dentro del modal. */
  getFocusableElements(): HTMLElement[] {
    const selector = 'button, [href], input, [tabindex]:not([tabindex="-1"])';
    return Array.from(this.root.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => el.offsetParent !== null,
    );
  }

  /** Acceso tipado a un elemento interno del modal por id. */
  el<T extends HTMLElement = HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null;
  }

  get image(): HTMLImageElement | null {
    return this.el<HTMLImageElement>('viewer-image');
  }

  get gestureContainer(): Element | null {
    return this.root.querySelector('.flex-1');
  }

  isOpen(): boolean {
    return !this.root.classList.contains('hidden');
  }

  show(): void {
    this.root.classList.remove('hidden');
    this.root.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  hide(): void {
    this.root.classList.add('hidden');
    this.root.classList.remove('flex');
    document.body.style.overflow = '';
  }

  /** Oculta el hint de gestos tras un tiempo en móvil. */
  scheduleGestureHintHide(): void {
    const gestureHint = this.el('gesture-hint');
    if (!gestureHint || !isMobileViewport()) return;
    setTimeout(() => {
      gestureHint.style.opacity = '0';
      setTimeout(() => {
        gestureHint.style.display = 'none';
      }, TIMINGS.sliderFade);
    }, TIMINGS.gestureHintVisible);
  }

  /** Traduce textos y aria-labels desde window.__i18n__. */
  translateTexts(): void {
    const i18n = window.__i18n__;
    const gallery = i18n?.gallery;
    const ariaLabels = i18n?.ariaLabels;

    const swipeDown = this.el('swipe-down-text');
    if (swipeDown) swipeDown.textContent = gallery?.swipeDown || 'Desliza abajo para cerrar';

    const swipeNavigate = this.el('swipe-navigate-text');
    if (swipeNavigate) swipeNavigate.textContent = gallery?.swipeNavigate || 'Desliza para navegar';

    const ariaMap: Record<string, string | undefined> = {
      'viewer-close': ariaLabels?.closeGallery,
      'viewer-prev': ariaLabels?.previousImage,
      'viewer-next': ariaLabels?.nextImage,
      'viewer-zoom-out': ariaLabels?.zoomOut,
      'viewer-zoom-reset': ariaLabels?.zoomReset,
      'viewer-zoom-in': ariaLabels?.zoomIn,
    };

    for (const [id, label] of Object.entries(ariaMap)) {
      const btn = this.el(id);
      if (btn && label) btn.setAttribute('aria-label', label);
    }
  }

  /** Muestra/oculta navegación y controles de zoom según el viewport. */
  setupResponsiveView(): void {
    this.applyResponsiveView();
    window.addEventListener('resize', () => this.applyResponsiveView());
  }

  private applyResponsiveView(): void {
    const mobile = isMobileViewport();
    const prevBtn = this.el('viewer-prev');
    const nextBtn = this.el('viewer-next');
    const zoomControls = this.el('viewer-zoom-controls');

    if (prevBtn) prevBtn.style.display = mobile ? 'none' : 'flex';
    if (nextBtn) nextBtn.style.display = mobile ? 'none' : 'flex';
    if (zoomControls) zoomControls.style.display = mobile ? 'none' : 'flex';
  }
}
