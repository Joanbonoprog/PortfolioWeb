// Transiciones suaves al cambiar de idioma
document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('language-selector');
  
  if (languageSelector) {
    // Reemplazar el onchange inline con uno que tenga transición
    languageSelector.onchange = function(e) {
      const ALLOWED_LANGS = ['es', 'en'];
      const newLang = ALLOWED_LANGS.includes(this.value) ? this.value : 'es';
      
      // Agregar clase de transición
      document.body.classList.add('language-changing');
      
      // Esperar a que termine la animación
      setTimeout(() => {
        window.location.href = window.location.pathname + '?lang=' + newLang;
      }, 200);
    };
  }
});
