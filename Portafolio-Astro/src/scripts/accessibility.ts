// Control de tamaño de fuente
(function initAccessibility() {
  type FontSize = 'normal' | 'large' | 'extra-large';

  let fontSize: FontSize = 'normal';

  function changeFontSize(size: string): void {
    // Validar que el tamaño sea uno de los permitidos
    const validSizes: FontSize[] = ['normal', 'large', 'extra-large'];
    if (!validSizes.includes(size as FontSize)) {
      size = 'normal';
    }
    
    const html = document.documentElement;
    
    // Remover clases previas
    html.classList.remove('font-size-normal', 'font-size-large', 'font-size-extra-large');
    
    // Agregar nueva clase
    html.classList.add(`font-size-${size}`);
    fontSize = size as FontSize;
    
    // Guardar preferencia
    localStorage.setItem('fontSize', size);
    
    // Actualizar botones
    updateFontSizeButtons();
  }

  function updateFontSizeButtons(): void {
    const buttons = document.querySelectorAll('[data-font-size]');
    buttons.forEach(btn => {
      const size = btn.getAttribute('data-font-size');
      if (size === fontSize) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Cargar preferencia guardada
  document.addEventListener('DOMContentLoaded', () => {
    const savedSize = localStorage.getItem('fontSize') || 'normal';
    // Validar que el tamaño sea uno de los permitidos
    const validSizes: FontSize[] = ['normal', 'large', 'extra-large'];
    const safeSize: FontSize = validSizes.includes(savedSize as FontSize) ? (savedSize as FontSize) : 'normal';
    changeFontSize(safeSize);
    
    // Agregar event listeners a botones
    const buttons = document.querySelectorAll('[data-font-size]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const size = btn.getAttribute('data-font-size');
        if (size) changeFontSize(size);
      });
    });
  });

  // Indicador de sección activa en navegación
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function updateActiveSection(): void {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id') || '';
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('nav-active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('nav-active');
      }
    });
  }

  // Throttle con requestAnimationFrame para evitar reflows en cada evento de scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('DOMContentLoaded', updateActiveSection);
})();
