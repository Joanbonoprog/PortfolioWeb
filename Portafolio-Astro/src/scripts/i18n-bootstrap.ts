// Lee las traducciones embebidas como data island (JSON no ejecutable) y las
// expone en window.__i18n__. Permite una CSP estricta sin scripts inline ejecutables.
// Debe cargarse antes que el resto de scripts que dependen de window.__i18n__.
import type { Translations } from '../types/translations';

(function bootstrapI18n() {
  const dataEl = document.getElementById('i18n-data');
  if (!dataEl?.textContent) return;
  try {
    window.__i18n__ = JSON.parse(dataEl.textContent) as Translations;
  } catch {
    // Si el parseo falla, los scripts usarán sus textos de fallback.
  }
})();
