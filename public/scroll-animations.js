// Sistema de animaciones al hacer scroll
(function() {
  // Configuración del Intersection Observer - optimizado para LCP
  const observerOptions = {
    root: null,
    rootMargin: '50px', // Precargar animaciones 50px antes
    threshold: 0.01 // Solo requiere 1% de visibilidad para activar
  };

  // Callback cuando un elemento entra en viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir clase de animación
        entry.target.classList.add('animate-in');
        // Opcional: dejar de observar después de animar
        observer.unobserve(entry.target);
      }
    });
  };

  // Crear el observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Función para inicializar las animaciones
  function initScrollAnimations() {
    // Seleccionar todas las secciones que queremos animar
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      // Añadir clase inicial para preparar la animación
      section.classList.add('scroll-animate');
      // Observar el elemento
      observer.observe(section);
    });

    // También animar las tarjetas dentro de las secciones
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
      card.classList.add('scroll-animate');
      // Reducir delay para mejorar performance
      card.style.transitionDelay = `${index * 0.05}s`;
      observer.observe(card);
    });
  }

  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
})();
