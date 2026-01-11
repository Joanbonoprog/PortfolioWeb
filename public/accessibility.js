// Control de tamaño de fuente
let fontSize = 'normal'; // normal, large, extra-large

function changeFontSize(size) {
  const html = document.documentElement;
  
  // Remover clases previas
  html.classList.remove('font-size-normal', 'font-size-large', 'font-size-extra-large');
  
  // Agregar nueva clase
  html.classList.add(`font-size-${size}`);
  fontSize = size;
  
  // Guardar preferencia
  localStorage.setItem('fontSize', size);
  
  // Actualizar botones
  updateFontSizeButtons();
}

function updateFontSizeButtons() {
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
  changeFontSize(savedSize);
  
  // Agregar event listeners a botones
  const buttons = document.querySelectorAll('[data-font-size]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-font-size');
      changeFontSize(size);
    });
  });
});

// Indicador de sección activa en navegación
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveSection() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
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

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('DOMContentLoaded', updateActiveSection);
