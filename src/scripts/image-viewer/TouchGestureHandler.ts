// Responsabilidad única: detectar gestos táctiles (swipe) sobre un contenedor.
import { SWIPE_THRESHOLD } from '../../config/constants';

export interface GestureCallbacks {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeDown: () => void;
}

export class TouchGestureHandler {
  private startX = 0;
  private startY = 0;
  private endX = 0;
  private endY = 0;

  /** Conecta los listeners táctiles al contenedor indicado. */
  attach(container: Element, callbacks: GestureCallbacks): void {
    container.addEventListener(
      'touchstart',
      (e) => {
        const touch = (e as TouchEvent).changedTouches[0];
        this.startX = touch.screenX;
        this.startY = touch.screenY;
      },
      { passive: true },
    );

    container.addEventListener(
      'touchend',
      (e) => {
        const touch = (e as TouchEvent).changedTouches[0];
        this.endX = touch.screenX;
        this.endY = touch.screenY;
        this.resolve(callbacks);
      },
      { passive: true },
    );
  }

  private resolve(callbacks: GestureCallbacks): void {
    const diffX = this.endX - this.startX;
    const diffY = this.endY - this.startY;

    const horizontal = Math.abs(diffX) > Math.abs(diffY);

    if (horizontal && Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) callbacks.onSwipeRight();
      else callbacks.onSwipeLeft();
      return;
    }

    if (!horizontal && diffY > SWIPE_THRESHOLD) {
      callbacks.onSwipeDown();
    }
  }
}
