// Orquestador del visor: mantiene el estado y coordina modal, zoom y gestos.
import { isMobileViewport, ZOOM } from '../../config/constants';
import type { ProjectImage } from '../../data/project-galleries';
import { ImageViewerModal } from './ImageViewerModal';
import { ZoomController } from './ZoomController';
import { TouchGestureHandler } from './TouchGestureHandler';

export class ImageViewer {
  private currentProject: string | null = null;
  private currentIndex = 0;
  private images: ProjectImage[] = [];
  private lastFocusedElement: HTMLElement | null = null;

  private readonly modal = new ImageViewerModal();
  private readonly zoom = new ZoomController(() => this.modal.image);
  private readonly gestures = new TouchGestureHandler();

  constructor() {
    this.bindControls();
    this.bindKeyboard();
    this.bindGestures();
  }

  open(projectName: string, images: ProjectImage[], startIndex = 0): void {
    this.lastFocusedElement = document.activeElement as HTMLElement | null;
    this.currentProject = projectName;
    this.images = images;
    this.currentIndex = startIndex;

    const projectNameEl = this.modal.el('viewer-project-name');
    if (projectNameEl) projectNameEl.textContent = projectName;

    this.renderThumbnails();
    this.showImage();
    this.modal.show();
    this.modal.scheduleGestureHintHide();

    // Mover el foco al botón de cerrar para usuarios de teclado.
    this.modal.el('viewer-close')?.focus();
  }

  close(): void {
    this.modal.hide();
    this.zoom.reset();
    // Devolver el foco al elemento que abrió el visor.
    this.lastFocusedElement?.focus();
    this.lastFocusedElement = null;
  }

  next(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.showImage();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showImage();
    }
  }

  private bindControls(): void {
    const on = (id: string, handler: () => void) =>
      this.modal.el(id)?.addEventListener('click', handler);

    on('viewer-close', () => this.close());
    on('viewer-prev', () => this.prev());
    on('viewer-next', () => this.next());
    on('viewer-zoom-in', () => this.zoom.zoom(ZOOM.in));
    on('viewer-zoom-out', () => this.zoom.zoom(ZOOM.out));
    on('viewer-zoom-reset', () => this.zoom.reset());

    // Click en el fondo cierra el visor.
    this.modal.root.addEventListener('click', (e) => {
      if (e.target === this.modal.root) this.close();
    });

    // Click en la imagen alterna el zoom.
    this.modal.image?.addEventListener('click', () => this.zoom.toggleClickZoom());
  }

  private bindKeyboard(): void {
    document.addEventListener('keydown', (e) => {
      if (!this.modal.isOpen()) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'Tab') this.trapFocus(e);
    });
  }

  /** Mantiene el foco dentro del modal mientras está abierto. */
  private trapFocus(e: KeyboardEvent): void {
    const focusable = this.modal.getFocusableElements();
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  private bindGestures(): void {
    const container = this.modal.gestureContainer;
    if (!container) return;
    this.gestures.attach(container, {
      onSwipeLeft: () => this.next(),
      onSwipeRight: () => this.prev(),
      onSwipeDown: () => this.close(),
    });
  }

  private showImage(): void {
    const img = this.modal.image;
    const title = this.modal.el('viewer-title');
    if (!img || !title) return;

    const current = this.images[this.currentIndex];
    img.src = current.src;
    img.alt = current.title;
    title.textContent = this.translateTitle(current.title);

    const counter = this.modal.el('viewer-counter');
    if (counter) counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;

    this.zoom.reset();
    this.updateNavButtons();
    this.updateThumbnails();
  }

  private updateNavButtons(): void {
    if (isMobileViewport()) return;
    const prevBtn = this.modal.el('viewer-prev');
    const nextBtn = this.modal.el('viewer-next');
    if (prevBtn) prevBtn.style.display = this.currentIndex > 0 ? 'block' : 'none';
    if (nextBtn) {
      nextBtn.style.display = this.currentIndex < this.images.length - 1 ? 'block' : 'none';
    }
  }

  private renderThumbnails(): void {
    const container = this.modal.el('thumbnails-container');
    if (!container) return;
    container.innerHTML = '';

    this.images.forEach((image, index) => {
      const thumb = document.createElement('div');
      thumb.className =
        'thumbnail flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all hover:scale-105';
      thumb.dataset.index = index.toString();

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.className = 'w-full h-full object-cover';

      thumb.appendChild(img);
      thumb.addEventListener('click', () => {
        this.currentIndex = index;
        this.showImage();
      });

      container.appendChild(thumb);
    });
  }

  private updateThumbnails(): void {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
      const active = index === this.currentIndex;
      thumb.classList.toggle('border-blue-500', active);
      thumb.classList.toggle('ring-2', active);
      thumb.classList.toggle('ring-blue-400', active);
      thumb.classList.toggle('border-transparent', !active);
      if (active) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  private translateTitle(filename: string): string {
    const images = window.__i18n__?.gallery?.images || {};
    return images[filename] || filename;
  }
}
