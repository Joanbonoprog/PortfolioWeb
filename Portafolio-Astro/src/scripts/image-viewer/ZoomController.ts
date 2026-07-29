// Responsabilidad única: gestionar el zoom y paneo de la imagen del visor.
import { ZOOM } from '../../config/constants';

export class ZoomController {
  constructor(private readonly getImage: () => HTMLElement | null) {}

  get scale(): number {
    const img = this.getImage();
    return img ? parseFloat(img.dataset.scale || '1') : 1;
  }

  get isZoomed(): boolean {
    return this.scale > 1.05;
  }

  /** Aplica un factor de zoom respetando los límites configurados y recalcula el paneo. */
  zoom(factor: number): void {
    const img = this.getImage();
    if (!img) return;

    const newScale = this.scale * factor;

    if (newScale >= ZOOM.min && newScale <= ZOOM.max) {
      this.applyTransform(newScale, this.translateX, this.translateY);
    }
  }

  /** Restablece zoom y paneo a su estado inicial. */
  reset(): void {
    this.applyTransform(1, 0, 0);
  }

  /** Alterna entre zoom de click y estado normal según el cursor actual. */
  toggleClickZoom(): void {
    if (this.isZoomed) {
      this.reset();
    } else {
      this.zoom(ZOOM.click);
    }
  }

  /** Inicia un paneo marcando el estado y el cursor. */
  startPan(): void {
    const img = this.getImage();
    if (!img) return;
    img.dataset.isPanning = 'true';
    img.style.cursor = 'grabbing';
  }

  /** Actualiza la posición del paneo de forma incremental. */
  panBy(deltaX: number, deltaY: number): void {
    const img = this.getImage();
    if (!img) return;

    const targetX = this.translateX + deltaX;
    const targetY = this.translateY + deltaY;
    const clamped = this.clamp(this.scale, targetX, targetY);

    this.applyTransform(this.scale, clamped.x, clamped.y);
  }

  /** Finaliza el paneo y deja el cursor en modo arrastrar. */
  endPan(): void {
    const img = this.getImage();
    if (!img) return;
    delete img.dataset.isPanning;
    img.style.cursor = this.isZoomed ? 'grab' : 'zoom-in';
  }

  get translateX(): number {
    const img = this.getImage();
    return img ? parseFloat(img.dataset.translateX || '0') : 0;
  }

  get translateY(): number {
    const img = this.getImage();
    return img ? parseFloat(img.dataset.translateY || '0') : 0;
  }

  private applyTransform(scale: number, x: number, y: number): void {
    const img = this.getImage();
    if (!img) return;

    const clamped = this.clamp(scale, x, y);
    img.style.transform = `translate3d(${clamped.x}px, ${clamped.y}px, 0) scale(${scale})`;
    img.dataset.scale = scale.toString();
    img.dataset.translateX = clamped.x.toString();
    img.dataset.translateY = clamped.y.toString();

    const panning = img.dataset.isPanning === 'true';
    img.style.touchAction = 'none';
    if (img.parentElement) img.parentElement.style.touchAction = 'none';

    if (scale <= 1.05) {
      img.style.cursor = 'zoom-in';
    } else {
      img.style.cursor = panning ? 'grabbing' : 'grab';
    }
  }

  /** Limita el paneo para que la imagen nunca se pierda del área visible. */
  private clamp(scale: number, x: number, y: number): { x: number; y: number } {
    const img = this.getImage();
    if (!img || scale <= 1.05) return { x: 0, y: 0 };

    const wrapper = img.parentElement;
    if (!wrapper) return { x, y };

    const containerW = wrapper.clientWidth;
    const containerH = wrapper.clientHeight;

    // Asumimos que la imagen rellena el contenedor como máximo (object-contain).
    // Usamos el contenedor como cota superior; esto evita que se paneé fuera de la zona visible.
    const maxX = Math.max(0, (containerW * scale - containerW) / 2);
    const maxY = Math.max(0, (containerH * scale - containerH) / 2);

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  }
}
