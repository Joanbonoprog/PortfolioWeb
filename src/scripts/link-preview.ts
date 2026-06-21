// Rich Link Preview Tooltips for Portfolio Links
import { buildPreviewData } from '../data/link-previews';
import { TIMINGS } from '../config/constants';

(function initLinkPreview() {
  'use strict';

  // Only initialize on desktop/mouse-pointer devices to ensure great UX
  if (!window.matchMedia('(pointer: fine)').matches) return;

  // Get preview data based on current language
  function getPreviewData() {
    return buildPreviewData(window.__i18n__?.linkPreviews);
  }

  // Create tooltip container in DOM
  const tooltip = document.createElement('div');
  tooltip.id = 'link-preview-tooltip';
  tooltip.className = 'absolute hidden z-[9999] w-72 bg-white/90 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl shadow-gray-900/10 dark:shadow-blue-500/10 overflow-hidden pointer-events-none transition-opacity transition-transform duration-300 ease-in-out opacity-0 scale-95 flex flex-col';
  tooltip.innerHTML = `
    <div class="h-28 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900/50 relative overflow-hidden border-b border-gray-200/50 dark:border-gray-700/50">
      <img id="preview-image" src="" class="max-w-full max-h-full object-contain" alt="" />
    </div>
    <div class="p-4 flex flex-col gap-1.5">
      <div class="flex items-center gap-2">
        <img id="preview-favicon" src="" class="w-4 h-4 object-contain rounded" alt="" />
        <span id="preview-site-name" class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider"></span>
      </div>
      <h4 id="preview-title" class="text-xs font-bold text-gray-900 dark:text-white leading-snug"></h4>
      <p id="preview-desc" class="text-[11px] text-gray-600 dark:text-gray-300 leading-normal line-clamp-2"></p>
    </div>
  `;
  document.body.appendChild(tooltip);

  // Ocultar el favicon si falla la carga (sustituye al onerror inline, CSP-safe).
  const previewFavicon = tooltip.querySelector<HTMLImageElement>('#preview-favicon');
  previewFavicon?.addEventListener('error', () => {
    previewFavicon.style.display = 'none';
  });

  let activeTrigger: HTMLElement | null = null;
  let showTimeout: number | null = null;
  let hideTimeout: number | null = null;
  const listenerMap = new WeakMap<HTMLElement, boolean>(); // Track which elements have listeners

  // Setup Event Listeners
  function setupListeners(): void {
    const targets = document.querySelectorAll('[data-preview-id]');
    
    targets.forEach(target => {
      const targetEl = target as HTMLElement;
      // Skip if already has listeners
      if (listenerMap.has(targetEl)) return;
      
      // Mouse Enter handler
      const mouseEnterHandler = (e: Event) => {
        const dataId = targetEl.getAttribute('data-preview-id');
        if (!dataId) return;

        if (showTimeout) clearTimeout(showTimeout);
        if (hideTimeout) clearTimeout(hideTimeout);

        // If tooltip already visible for another trigger, reposition immediately
        if (!tooltip.classList.contains('hidden') && activeTrigger && activeTrigger !== targetEl) {
          // Update active trigger and show new content without delay
          showTooltip(targetEl, dataId);
        } else {
          // Otherwise show after short debounce
          showTimeout = window.setTimeout(() => {
            showTooltip(targetEl, dataId);
          }, TIMINGS.previewShowDelay);
        }
      };

      // Mouse Leave handler
      const mouseLeaveHandler = () => {
        if (showTimeout) clearTimeout(showTimeout);
        // Delay hide to allow moving to another tooltip target without flicker
        hideTimeout = window.setTimeout(() => {
          hideTooltip();
        }, TIMINGS.previewHideDelay);
      };

      // Add event listeners
      targetEl.addEventListener('mouseenter', mouseEnterHandler);
      targetEl.addEventListener('mouseleave', mouseLeaveHandler);
      
      // Mark as having listeners
      listenerMap.set(targetEl, true);
    });
  }

  function showTooltip(trigger: HTMLElement, dataId: string): void {
    const previewData = getPreviewData();
    const data = previewData[dataId];
    if (!data) return;

    activeTrigger = trigger;

    // Set preview details
    const previewImg = document.getElementById('preview-image') as HTMLImageElement;
    const previewFav = document.getElementById('preview-favicon') as HTMLImageElement;
    const previewSite = document.getElementById('preview-site-name');
    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');

    if (previewImg && previewFav && previewSite && previewTitle && previewDesc) {
      previewImg.src = data.image;
      previewFav.src = data.favicon;
      previewFav.style.display = 'block';
      previewSite.textContent = data.siteName;
      previewTitle.textContent = data.title;
      previewDesc.textContent = data.desc;

      // Position tooltip after image loads to ensure correct height
      const img = previewImg;
      function showAndTransition() {
        // Show tooltip container
        tooltip.classList.remove('hidden');
        // Position it
        positionTooltip(trigger);
        // Trigger fade/scale transition with explicit classes
        requestAnimationFrame(() => {
          tooltip.classList.remove('opacity-0', 'scale-95');
          tooltip.classList.add('opacity-100', 'scale-100');
        });
      }
      if (img.complete) {
        showAndTransition();
      } else {
        img.addEventListener('load', showAndTransition, { once: true });
      }
    }
  }

  function hideTooltip(): void {
    // Hide immediately without transition to avoid jitter
    tooltip.classList.add('hidden');
    // Reset to initial hidden state for next show
    tooltip.classList.remove('opacity-100', 'scale-100');
    tooltip.classList.add('opacity-0', 'scale-95');
    activeTrigger = null;
  }

  function positionTooltip(trigger: HTMLElement): void {
    const triggerRect = trigger.getBoundingClientRect();
    const offsetY = 6; // reduced distance from trigger

    // Horizontal center above the trigger
    const centerX = triggerRect.left + triggerRect.width / 2;

    // Position tooltip below the trigger with a small gap
    const top = triggerRect.bottom + offsetY;

    // Position tooltip using left as center and translateX to center it horizontally
    tooltip.style.left = `${centerX + window.scrollX}px`;
    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.transform = 'translateX(-50%)';
  }

  // Initialize function
  function init(): void {
    // Append tooltip to body if not already present
    if (!document.getElementById('link-preview-tooltip')) {
      document.body.appendChild(tooltip);
    }
    setupListeners();
  }

  // Initial setup when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run setup after Astro page swaps
  document.addEventListener('astro:after-swap', init);
  
  // Re-run setup when hash changes (navigation between sections)
  window.addEventListener('hashchange', () => {
    // Small delay to ensure DOM is updated
    setTimeout(init, TIMINGS.domRetry);
  });
})();
