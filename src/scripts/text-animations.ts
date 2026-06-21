// Animaciones de texto
(function initTextAnimations() {
  document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase de animación a títulos de sección (excepto Hero y typewriter)
    const sectionTitles = document.querySelectorAll('section h2:not(#typewriter-title)');
    sectionTitles.forEach(title => {
      // Ignorar si está dentro del Hero o es el typewriter
      if (title.id === 'typewriter-title' || title.closest('section')?.querySelector('#typewriter-title')) {
        return;
      }
      title.classList.add('section-title');
      
      // Buscar el span del texto (ignorar material-icons)
      const textSpan = Array.from(title.querySelectorAll('span')).find(
        span => !span.classList.contains('material-icons') && (span.textContent?.trim().length ?? 0) > 0
      );
      
      // Si encontramos un span de texto, aplicar subrayado
      if (textSpan) {
        textSpan.classList.add('title-underline');
      } else {
        // No hay span de texto, crear uno para el contenido
        const textContent = title.textContent?.trim() ?? '';
        if (textContent) {
          const wrapper = document.createElement('span');
          wrapper.classList.add('title-underline');
          wrapper.textContent = textContent;
          title.textContent = '';
          title.appendChild(wrapper);
        }
      }
    });
    
    // Agregar efecto stagger a subtítulos
    const subtitles = document.querySelectorAll('section > div > p:first-of-type');
    subtitles.forEach(subtitle => {
      const text = subtitle.textContent ?? '';
      const words = text.split(' ');
      
      // Solo aplicar si tiene menos de 15 palabras (para no saturar)
      if (words.length <= 15 && words.length > 3) {
        // Sanitizar cada palabra para prevenir XSS
        const sanitizeText = (str: string): string => {
          const div = document.createElement('div');
          div.textContent = str;
          return div.innerHTML;
        };
        
        subtitle.innerHTML = words.map(word => 
          `<span class="stagger-text">${sanitizeText(word)}</span>`
        ).join(' ');
      }
    });
  });

  // Observer para animar elementos cuando entran en viewport
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const animateOnScroll = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observar todos los títulos de sección
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const titles = document.querySelectorAll('.section-title');
      titles.forEach(title => {
        (title as HTMLElement).style.animationPlayState = 'paused';
        animateOnScroll.observe(title);
      });
    }, 100);
  });
})();
