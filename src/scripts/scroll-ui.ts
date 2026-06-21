// UI dependiente del scroll: barra de progreso y botón "volver arriba".
// Externalizado desde Layout.astro para permitir una CSP sin 'unsafe-inline'.
// El listener de scroll usa requestAnimationFrame (throttle) y es passive.
(function initScrollUi() {
  function setup(): void {
    const scrollButton = document.getElementById('scroll-to-top');
    const scrollProgress = document.getElementById('scroll-progress');

    let ticking = false;

    function update(): void {
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = `${scrollPercent}%`;
      }

      if (scrollButton) {
        const visible = window.scrollY > 300;
        scrollButton.style.opacity = visible ? '1' : '0';
        scrollButton.style.pointerEvents = visible ? 'auto' : 'none';
      }

      ticking = false;
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true },
    );

    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
