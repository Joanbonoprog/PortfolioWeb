// Responsabilidad única: gestionar el zoom de la imagen del visor.
import { ZOOM } from '../../config/constants';

export class ZoomController {
  constructor(private readonly getImage: () => HTMLElement | null) {}

  /** Aplica un factor de zoom respetando los límites configurados. */
  zoom(factor: number): void {
    const img = this.getImage();
    if (!img) return;

    const currentScale = parseFloat(img.dataset.scale || '1');
    const newScale = currentScale * factor;

    if (newScale >= ZOOM.min && newScale <= ZOOM.max) {
      img.style.transform = `scale(${newScale})`;
      img.dataset.scale = newScale.toString();
    }
  }

  /** Restablece el zoom a su estado inicial. */
  reset(): void {
    const img = this.getImage();
    if (!img) return;
    img.style.transform = 'scale(1)';
    img.dataset.scale = '1';
    img.style.cursor = 'zoom-in';
  }

  /** Alterna entre zoom de click y estado normal según el cursor actual. */
  toggleClickZoom(): void {
    const img = this.getImage();
    if (!img) return;
    if (img.style.cursor === 'zoom-in') {
      this.zoom(ZOOM.click);
      img.style.cursor = 'zoom-out';
    } else {
      this.reset();
    }
  }
}
