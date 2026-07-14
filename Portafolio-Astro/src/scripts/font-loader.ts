// Carga no bloqueante de hojas de estilo marcadas con data-onload-media.
// Sustituye al atributo inline onload="this.media='all'" para cumplir una CSP
// sin 'unsafe-inline' (los manejadores de eventos inline también están vetados).
(function initFontLoader() {
  const links = document.querySelectorAll<HTMLLinkElement>('link[data-onload-media]');

  links.forEach((link) => {
    const target = link.dataset.onloadMedia || 'all';
    // Si la hoja ya cargó, aplicar el media de inmediato.
    if (link.sheet) {
      link.media = target;
      return;
    }
    link.addEventListener('load', () => {
      link.media = target;
    }, { once: true });
  });
})();
