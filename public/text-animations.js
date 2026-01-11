// Animaciones de texto
document.addEventListener('DOMContentLoaded', () => {
  // Agregar clase de animación a títulos de sección (excepto Hero y typewriter)
  const sectionTitles = document.querySelectorAll('section h2:not(#typewriter-title)');
  sectionTitles.forEach(title => {
    // Ignorar si está dentro del Hero o es el typewriter
    if (title.id === 'typewriter-title' || title.closest('section')?.querySelector('#typewriter-title')) {
      return;
    }
    title.classList.add('section-title');
    
    // Buscar todos los spans dentro del título
    const allSpans = title.querySelectorAll('span');
    let targetSpan = null;
    
    // Buscar el span del texto (ignorar material-icons)
    allSpans.forEach(span => {
      if (!span.classList.contains('material-icons')) {
        // Verificar que no esté vacío y que tenga contenido de texto
        if (span.textContent.trim().length > 0) {
          targetSpan = span;
        }
      }
    });
    
    // Si encontramos un span de texto, aplicar subrayado
    if (targetSpan) {
      targetSpan.classList.add('title-underline');
    } else {
      // No hay span de texto, crear uno para el contenido
      const textContent = title.textContent.trim();
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
    const text = subtitle.textContent;
    const words = text.split(' ');
    
    // Solo aplicar si tiene menos de 15 palabras (para no saturar)
    if (words.length <= 15 && words.length > 3) {
      subtitle.innerHTML = words.map(word => 
        `<span class="stagger-text">${word}</span>`
      ).join(' ');
    }
  });
});

// Observer para animar elementos cuando entran en viewport
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observar todos los títulos de sección
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
      title.style.animationPlayState = 'paused';
      animateOnScroll.observe(title);
    });
  }, 100);
});
