/**
 * Terminal Modal - Handles loading and displaying the KMP terminal in a modal overlay
 */

interface TerminalModal {
  modal: HTMLElement | null;
  overlay: HTMLElement | null;
  iframe: HTMLIFrameElement | null;
  loadingIndicator: HTMLElement | null;
  bootSequence: HTMLElement | null;
  glitchOverlay: HTMLElement | null;
  vignetteOverlay: HTMLElement | null;
  closeButton: HTMLElement | null;
  isOpen: boolean;
}

const terminalModal: TerminalModal = {
  modal: null,
  overlay: null,
  iframe: null,
  loadingIndicator: null,
  bootSequence: null,
  glitchOverlay: null,
  vignetteOverlay: null,
  closeButton: null,
  isOpen: false,
};

/**
 * Initialize the terminal modal
 */
export function initTerminalModal(): void {
  // Check for Service Workers
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister();
    });
  });
  
  // Create modal elements
  const modal = document.createElement('div');
  modal.id = 'terminal-modal';
  modal.className = 'fixed inset-0 z-[9999] invisible opacity-0 transition-all duration-300';
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('role', 'dialog');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 opacity-0';
  
  // Create boot sequence container
  const bootSequence = document.createElement('div');
  bootSequence.className = 'absolute inset-0 flex items-center justify-center bg-gray-950 font-mono';
  bootSequence.innerHTML = `
    <div class="w-full max-w-3xl mx-auto p-8 md:p-12">
      <div class="relative rounded-lg border border-green-500/20 bg-black/60 p-6 md:p-8 shadow-2xl shadow-green-500/10 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-[0.07]" style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,222,128,0.3) 2px, rgba(74,222,128,0.3) 4px);"></div>
        <div id="boot-output" class="relative z-10 text-green-400 text-base md:text-lg leading-loose whitespace-pre-wrap" style="text-shadow: 0 0 8px rgba(74,222,128,0.45);"></div>
        <div class="relative z-10 mt-4">
          <span class="inline-block w-2.5 h-5 bg-green-400 animate-pulse" style="box-shadow: 0 0 6px rgba(74,222,128,0.7);"></span>
        </div>
      </div>
    </div>
  `;

  // Create glitch overlay
  const glitchOverlay = document.createElement('div');
  glitchOverlay.className = 'absolute inset-0 pointer-events-none opacity-0 z-50 bg-black';
  glitchOverlay.innerHTML = `
    <div class="glitch-container w-full h-full relative overflow-hidden">
      <div class="glitch-channel absolute inset-0 bg-blue-500 mix-blend-screen" style="opacity: 0.35;"></div>
      <div class="glitch-channel absolute inset-0 bg-violet-500 mix-blend-screen" style="opacity: 0.35;"></div>
      <div class="glitch-channel absolute inset-0 bg-pink-500 mix-blend-screen" style="opacity: 0.35;"></div>
      <div class="glitch-lines absolute inset-0">
        <div class="glitch-line absolute left-0 right-0 bg-blue-200"></div>
        <div class="glitch-line absolute left-0 right-0 bg-blue-200"></div>
        <div class="glitch-line absolute left-0 right-0 bg-blue-200"></div>
        <div class="glitch-line absolute left-0 right-0 bg-blue-200"></div>
        <div class="glitch-line absolute left-0 right-0 bg-blue-200"></div>
      </div>
    </div>
  `;

  // Create vignette overlay for shutdown effect
  const vignetteOverlay = document.createElement('div');
  vignetteOverlay.className = 'absolute inset-0 pointer-events-none opacity-0 z-[60]';
  vignetteOverlay.style.background = 'radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.65) 55%, rgba(15, 23, 42, 0.95) 100%)';

  // Create loading indicator (fallback)
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'absolute inset-0 flex items-center justify-center bg-gray-900/95 hidden';
  loadingIndicator.innerHTML = `
    <div class="text-center">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-blue-500 border-r-transparent"></div>
      <p class="mt-4 text-white text-lg">Cargando Terminal...</p>
    </div>
  `;

  // Create iframe container
  const iframeContainer = document.createElement('div');
  iframeContainer.className = 'w-full h-full relative';
  
  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.className = 'w-full h-full bg-gray-900';
  iframe.style.display = 'none';
  iframe.setAttribute('title', 'Terminal KMP');
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-white transition-colors';
  closeButton.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  `;
  closeButton.setAttribute('aria-label', 'Cerrar terminal');
  
  // Assemble modal
  iframeContainer.appendChild(iframe);
  modal.appendChild(overlay);
  modal.appendChild(bootSequence);
  modal.appendChild(glitchOverlay);
  modal.appendChild(vignetteOverlay);
  modal.appendChild(loadingIndicator);
  modal.appendChild(iframeContainer);
  modal.appendChild(closeButton);
  
  // Add to body
  document.body.appendChild(modal);
  
  // Store references
  terminalModal.modal = modal;
  terminalModal.overlay = overlay;
  terminalModal.iframe = iframe;
  terminalModal.loadingIndicator = loadingIndicator;
  terminalModal.bootSequence = bootSequence;
  terminalModal.glitchOverlay = glitchOverlay;
  terminalModal.vignetteOverlay = vignetteOverlay;
  terminalModal.closeButton = closeButton;
  
  // Event listeners
  closeButton.addEventListener('click', closeTerminalModal);
  overlay.addEventListener('click', closeTerminalModal);
  
  // Handle iframe load
  iframe.addEventListener('load', () => {
    if (terminalModal.loadingIndicator) {
      terminalModal.loadingIndicator.style.display = 'none';
    }
    
    // Send language to iframe after it loads
    const currentLang = window.location.pathname.match(/^\/(es|en)(\/|$)/)?.[1] || 'es';
    iframe.contentWindow?.postMessage({
      type: 'setLanguage',
      language: currentLang
    }, '*');
    
    // Don't show iframe immediately - wait for boot sequence to complete
    // The boot sequence will handle showing the iframe
  });
  
  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && terminalModal.isOpen) {
      closeTerminalModal();
    }
  });

  // Check if terminal should be reopened after language change
  if (sessionStorage.getItem('reopenTerminal') === 'true') {
    sessionStorage.removeItem('reopenTerminal');
    // Open terminal after a short delay to ensure page is ready
    setTimeout(() => {
      openTerminalModal();
    }, 500);
  }

  // Handle postMessage from terminal
  window.addEventListener('message', (event) => {
    if (event.data.type === 'openGallery') {
      // Find and trigger the gallery for the specified project
      const projectName = event.data.projectName;
      const galleryButtons = document.querySelectorAll('button.gallery-btn');
      
      galleryButtons.forEach((button) => {
        const buttonElement = button as HTMLElement;
        const buttonProjectName = buttonElement.getAttribute('data-project-name');
        
        if (buttonProjectName && buttonProjectName.toLowerCase().includes(projectName.toLowerCase())) {
          // Small delay before opening gallery
          setTimeout(() => {
            buttonElement.click();
          }, 100);
        }
      });
    } else if (event.data.type === 'changeLanguage') {
      // Handle language change from terminal
      // Use handleLanguageChange to correctly respect prefixDefaultLocale:false
      // (Spanish has no /es/ prefix, English uses /en/ prefix)
      handleLanguageChange(event.data.language);
    }
  });
  
  // Fallback: Handle localStorage events for language change
  window.addEventListener('storage', (event) => {
    if (event.key === 'terminalLangChange' && event.newValue) {
      try {
        const data = JSON.parse(event.newValue);
        handleLanguageChange(data.language);
      } catch (e) {
        // Ignore malformed storage events
      }
    }
  });
  
  // Polling fallback: Check localStorage every 100ms for language changes
  let lastLangChange = localStorage.getItem('terminalLangChange');
  setInterval(() => {
    const currentLangChange = localStorage.getItem('terminalLangChange');
    if (currentLangChange && currentLangChange !== lastLangChange) {
      lastLangChange = currentLangChange;
      try {
        const data = JSON.parse(currentLangChange);
        handleLanguageChange(data.language);
      } catch (e) {
        // Ignore malformed polling data
      }
    }
  }, 100);
  
  // Helper function to handle language change
  function handleLanguageChange(newLanguage: string) {
    if (newLanguage === 'es' || newLanguage === 'en') {
      // Store flag to reopen terminal after reload
      sessionStorage.setItem('reopenTerminal', 'true');
      
      // Get all parts of the current URL
      const currentPath = window.location.pathname;
      const searchParams = window.location.search;
      const hash = window.location.hash;
      
      // Determine current language from path
      let currentLang = 'es'; // default
      if (currentPath === '/en' || currentPath.startsWith('/en/')) {
        currentLang = 'en';
      }
      
      // Remove current language from path
      let pathWithoutLang = currentPath;
      if (currentLang === 'en') {
        pathWithoutLang = currentPath.replace(/^\/en(\/|$)/, '/');
      }
      // Spanish is at root, no prefix to remove
      
      // Construct new URL with language
      let newPath: string;
      if (newLanguage === 'es') {
        // Spanish is at root, no prefix
        newPath = pathWithoutLang === '/' ? '/' : pathWithoutLang;
        newPath += searchParams;
        newPath += hash; // Preserve hash fragment
      } else {
        // English uses /en/ prefix
        newPath = `/en${pathWithoutLang === '/' ? '' : pathWithoutLang}${searchParams}${hash}`;
      }
      
      // Navigate to new language
      window.location.href = newPath;
    }
  }
}

/**
 * Boot sequence animation
 */
async function runBootSequence(): Promise<void> {
  await runTypedSequence([
    'INITIALIZING TERMINAL SYSTEM...',
    'Loading kernel modules... [OK]',
    'Mounting virtual filesystem... [OK]',
    'Starting network services... [OK]',
    'Initializing WASM runtime... [OK]',
    'Loading terminal interface...',
    'System ready.',
    '',
    'Welcome',
    'joanbonoprog@portfolio:~$ '
  ]);
}

async function runShutdownSequence(): Promise<void> {
  await runTypedSequence([
    'System shutdown requested...',
    'Stopping terminal services... [OK]',
    'Saving terminal history... [OK]',
    'Unloading WASM runtime... [OK]',
    'Unmounting virtual filesystem... [OK]',
    'Powering off terminal.',
    '',
    'Goodbye.'
  ]);
}

function formatBootLine(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\[OK\]/g, '<span class="text-emerald-300 font-semibold">[OK]</span>');
}

async function runTypedSequence(commands: string[]): Promise<void> {
  if (!terminalModal.bootSequence) return;

  const output = terminalModal.bootSequence.querySelector('#boot-output') as HTMLElement;
  if (!output) return;

  output.innerHTML = '';

  for (let lineIndex = 0; lineIndex < commands.length; lineIndex++) {
    const command = commands[lineIndex];
    const isLast = lineIndex === commands.length - 1;

    const lineEl = document.createElement('div');
    lineEl.className = 'boot-line mb-1';
    output.appendChild(lineEl);

    if (command === '') {
      lineEl.innerHTML = '&nbsp;';
      await new Promise(resolve => setTimeout(resolve, 80));
      continue;
    }

    for (let i = 0; i <= command.length; i++) {
      lineEl.innerHTML = formatBootLine(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 25 + Math.random() * 25));
    }

    await new Promise(resolve => setTimeout(resolve, isLast ? 250 : 100));
  }
}

/**
 * Trigger glitch effect
 */
function triggerGlitch(): void {
  const overlay = terminalModal.glitchOverlay;
  if (!overlay) return;

  const channels = overlay.querySelectorAll<HTMLElement>('.glitch-channel');
  const lines = overlay.querySelectorAll<HTMLElement>('.glitch-line');

  overlay.classList.remove('opacity-0');

  const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

  // Strobing flicker: rapid random jumps in overlay opacity, RGB channel
  // offsets and scanline positions to sell the "screen glitch" effect.
  let ticks = 0;
  const totalTicks = 14;
  const glitchInterval = setInterval(() => {
    ticks++;

    // Strobe the overall overlay opacity between near-off and near-full
    overlay.style.opacity = Math.random() > 0.3 ? String(randomBetween(0.7, 1)) : String(randomBetween(0, 0.2));

    // Randomize RGB channel-split offsets for a chromatic aberration tear
    channels.forEach((channel) => {
      const dx = randomBetween(-14, 14);
      const dy = randomBetween(-6, 6);
      channel.style.transform = `translate(${dx}px, ${dy}px)`;
      channel.style.opacity = String(randomBetween(0.25, 0.55));
    });

    // Randomize scanline tear bars: position, thickness and visibility
    lines.forEach((line) => {
      const visible = Math.random() > 0.35;
      line.style.top = `${randomBetween(0, 100)}%`;
      line.style.height = `${randomBetween(1, 5)}px`;
      line.style.opacity = visible ? String(randomBetween(0.4, 0.9)) : '0';
      line.style.transform = `translateX(${randomBetween(-20, 20)}px)`;
    });

    if (ticks >= totalTicks) {
      clearInterval(glitchInterval);
      overlay.style.opacity = '0';
      overlay.classList.add('opacity-0');
    }
  }, 35);
}

/**
 * Open the terminal modal
 */
export async function openTerminalModal(): Promise<void> {
  if (!terminalModal.modal || terminalModal.isOpen) return;

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Hide close button until the terminal iframe is actually ready
  if (terminalModal.closeButton) {
    terminalModal.closeButton.style.visibility = 'hidden';
  }

  // Show modal with animation
  terminalModal.modal.classList.remove('invisible');
  terminalModal.modal.classList.remove('opacity-0');
  terminalModal.modal.setAttribute('aria-hidden', 'false');

  // Animate overlay
  requestAnimationFrame(() => {
    if (terminalModal.overlay) {
      terminalModal.overlay.classList.remove('opacity-0');
    }
  });
  
  terminalModal.isOpen = true;
  
  // Update iframe src with current language and cache busting
  const currentLang = window.location.pathname.match(/^\/(es|en)(\/|$)/)?.[1] || 'es';
  const timestamp = Date.now(); // Force refresh every time
  const iframeUrl = `/wasm/index.html?v=20240707-2&t=${timestamp}&lang=${currentLang}`;
  
  if (terminalModal.iframe) {
    terminalModal.iframe.src = iframeUrl;
  }
  
  // Show glitch effect first
  triggerGlitch();
  
  // Wait for glitch to finish
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Show boot sequence (hide close button while it plays)
  if (terminalModal.bootSequence) {
    if (terminalModal.closeButton) {
      terminalModal.closeButton.style.visibility = 'hidden';
    }

    terminalModal.bootSequence.style.display = 'flex';
    await runBootSequence();

    // Hide boot sequence and show terminal
    terminalModal.bootSequence.style.display = 'none';

    if (terminalModal.iframe) {
      terminalModal.iframe.style.display = 'block';
      // Show close button again now that the terminal is interactive
      if (terminalModal.closeButton) {
        terminalModal.closeButton.style.visibility = 'visible';
      }
      // Focus iframe for keyboard input
      setTimeout(() => {
        terminalModal.iframe?.focus();
      }, 100);
    }
  }
}

/**
 * Close the terminal modal
 */
export async function closeTerminalModal(): Promise<void> {
  if (!terminalModal.modal || !terminalModal.isOpen) return;
  terminalModal.isOpen = false;

  // Hide close button during shutdown animation
  if (terminalModal.closeButton) {
    terminalModal.closeButton.style.visibility = 'hidden';
  }

  // Show shutdown sequence
  if (terminalModal.bootSequence && terminalModal.iframe) {
    terminalModal.iframe.style.display = 'none';
    terminalModal.bootSequence.style.display = 'flex';
    await runShutdownSequence();
  }

  // Full-page vignette "power-off" pulse after shutdown
  const vignetteDuration = 850;
  if (terminalModal.vignetteOverlay) {
    terminalModal.vignetteOverlay.classList.remove('terminal-vignette-pulse');
    void terminalModal.vignetteOverlay.offsetWidth; // force reflow
    terminalModal.vignetteOverlay.classList.add('terminal-vignette-pulse');
  }

  // Wait for vignette to finish before fading the modal out
  await new Promise(resolve => setTimeout(resolve, vignetteDuration));

  // Animate out
  if (terminalModal.overlay) {
    terminalModal.overlay.classList.add('opacity-0');
  }
  terminalModal.modal.classList.add('opacity-0');

  setTimeout(() => {
    if (terminalModal.modal) {
      terminalModal.modal.classList.add('invisible');
      terminalModal.modal.setAttribute('aria-hidden', 'true');
    }

    // Restore body scroll
    document.body.style.overflow = '';

    // Reset state
    if (terminalModal.loadingIndicator) {
      terminalModal.loadingIndicator.style.display = 'flex';
    }
    if (terminalModal.bootSequence) {
      terminalModal.bootSequence.style.display = 'none';
    }
    if (terminalModal.iframe) {
      terminalModal.iframe.style.display = 'none';
      // Reload iframe to reset state
      terminalModal.iframe.src = terminalModal.iframe.src;
    }
    if (terminalModal.vignetteOverlay) {
      terminalModal.vignetteOverlay.classList.remove('terminal-vignette-pulse');
    }
  }, 300);
}

/**
 * Check if the terminal modal is open
 */
export function isTerminalModalOpen(): boolean {
  return terminalModal.isOpen;
}
