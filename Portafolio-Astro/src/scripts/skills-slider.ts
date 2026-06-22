// Lógica del slider de skills y animación de barras de progreso.
// Extraído de Skills.astro para separar presentación de comportamiento.
import { BREAKPOINTS, TIMINGS, SWIPE_THRESHOLD, MAX_INIT_RETRIES } from '../config/constants';

const ACTIVE_INDICATOR_CLASS =
  'h-2 rounded-full transition-all duration-300 hover:scale-110 bg-blue-600 dark:bg-blue-400 w-8';
const INACTIVE_INDICATOR_CLASS =
  'h-2 rounded-full transition-all duration-300 hover:scale-110 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2';

/** Anima las barras de progreso cuando entran en el viewport. */
function initSkillBars(retries = 0): void {
  const progressBars = document.querySelectorAll<HTMLElement>('.skill-progress');

  if (progressBars.length === 0) {
    if (retries < MAX_INIT_RETRIES) {
      setTimeout(() => initSkillBars(retries + 1), TIMINGS.domRetry);
    }
    return;
  }

  progressBars.forEach((bar) => {
    bar.style.width = '0%';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target as HTMLElement;
        const level = bar.getAttribute('data-level');
        if (level) {
          setTimeout(() => {
            bar.style.width = `${level}%`;
          }, TIMINGS.domRetry);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.1 },
  );

  progressBars.forEach((bar) => observer.observe(bar));
}

/** Calcula cuántos items mostrar por página según el viewport. */
function getItemsPerPage(): number {
  if (window.innerWidth < BREAKPOINTS.mobile) return 3;
  if (window.innerWidth < BREAKPOINTS.tablet) return 6;
  return 9;
}

/** Inicializa el slider paginado de skills (navegación, indicadores y gestos). */
function initSkillsSlider(): void {
  const slider = document.getElementById('skills-slider');
  const prevBtn = document.getElementById('skills-prev');
  const nextBtn = document.getElementById('skills-next');
  const indicatorsContainer = document.getElementById('skills-indicators');

  if (!slider || !prevBtn || !nextBtn) return;

  const items = slider.children;
  let itemsPerPage = getItemsPerPage();
  let totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 0;

  function renderIndicators(): void {
    if (!indicatorsContainer) return;
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const indicator = document.createElement('button');
      indicator.className = i === 0 ? ACTIVE_INDICATOR_CLASS : INACTIVE_INDICATOR_CLASS;
      indicator.addEventListener('click', () => goToPage(i));
      indicatorsContainer.appendChild(indicator);
    }
  }

  function updateNavButton(button: HTMLElement, disabled: boolean): void {
    button.style.opacity = disabled ? '0.3' : '1';
    button.style.pointerEvents = disabled ? 'none' : 'auto';
    button.style.cursor = disabled ? 'not-allowed' : 'pointer';
    button.classList.toggle('grayscale', disabled);
  }

  function updateSlider(): void {
    if (!slider) return;

    slider.style.opacity = '0';

    setTimeout(() => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      Array.from(items).forEach((item, index) => {
        (item as HTMLElement).style.display = index >= startIndex && index < endIndex ? '' : 'none';
      });
      if (slider) slider.style.opacity = '1';
    }, TIMINGS.sliderFade);

    if (indicatorsContainer) {
      Array.from(indicatorsContainer.children).forEach((indicator, index) => {
        indicator.className = index === currentPage ? ACTIVE_INDICATOR_CLASS : INACTIVE_INDICATOR_CLASS;
      });
    }

    if (prevBtn) updateNavButton(prevBtn, currentPage === 0);
    if (nextBtn) updateNavButton(nextBtn, currentPage === totalPages - 1);
  }

  function goToPage(page: number): void {
    currentPage = Math.max(0, Math.min(page, totalPages - 1));
    updateSlider();
  }

  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

  let touchStartX = 0;
  slider.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  slider.addEventListener(
    'touchend',
    (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        goToPage(diff > 0 ? currentPage + 1 : currentPage - 1);
      }
    },
    { passive: true },
  );

  window.addEventListener('resize', () => {
    itemsPerPage = getItemsPerPage();
    totalPages = Math.ceil(items.length / itemsPerPage);
    currentPage = 0;
    renderIndicators();
    updateSlider();
  });

  renderIndicators();
  updateSlider();

  setTimeout(() => {
    if (slider) slider.style.opacity = '1';
  }, TIMINGS.domRetry);

  const swipeHint = document.getElementById('skills-swipe-hint');
  if (swipeHint && window.innerWidth < BREAKPOINTS.mobile) {
    setTimeout(() => {
      swipeHint.style.transition = 'opacity 0.5s ease';
      swipeHint.style.opacity = '0';
      setTimeout(() => {
        swipeHint.style.display = 'none';
      }, TIMINGS.gestureHintFade);
    }, TIMINGS.gestureHintVisible);
  }
}

function init(): void {
  initSkillBars();
  initSkillsSlider();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

document.addEventListener('astro:after-swap', init);
