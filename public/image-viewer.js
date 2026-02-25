// Visor de imágenes para proyectos
class ImageViewer {
  constructor() {
    this.currentProject = null;
    this.currentIndex = 0;
    this.images = [];
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchStartY = 0;
    this.touchEndY = 0;
    this.init();
  }

  init() {
    // Crear el modal del visor
    this.createModal();
    
    // Escuchar eventos de teclado
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;
      
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
    
    // Escuchar cambios de idioma
    document.addEventListener('languageChanged', () => {
      if (this.isOpen()) {
        this.showImage(); // Actualizar título con nuevo idioma
      }
    });
  }

  createModal() {
    const modal = document.createElement('div');
    modal.id = 'image-viewer-modal';
    modal.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm z-[10000] hidden items-center justify-center p-4';
    modal.innerHTML = `
      <div class="relative max-w-7xl w-full h-full flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <div id="swipe-hint" class="text-white text-sm md:hidden flex items-center gap-1">
            <span class="material-icons text-lg">swipe_down</span>
            <span data-i18n="gallery.swipeDown">Desliza abajo para cerrar</span>
          </div>
          <button id="viewer-close" class="btn-ripple bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons text-2xl">close</span>
          </button>
        </div>

        <!-- Image Container -->
        <div class="flex-1 flex items-center justify-center relative">
          <!-- Previous Button -->
          <button id="viewer-prev" class="btn-ripple absolute left-2 md:left-8 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons text-3xl">chevron_left</span>
          </button>

          <!-- Image -->
          <div class="relative max-h-full flex items-center justify-center mx-16 md:mx-24">
            <img 
              id="viewer-image" 
              src="" 
              alt="" 
              class="max-w-full max-h-[60vh] md:max-h-[60vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
              style="cursor: zoom-in;"
            />
            <!-- Indicador de gestos para móviles -->
            <div id="gesture-hint" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm md:hidden">
              <span data-i18n="gallery.swipeNavigate">Desliza para navegar</span>
            </div>
          </div>

          <!-- Next Button -->
          <button id="viewer-next" class="btn-ripple absolute right-2 md:right-8 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons text-3xl">chevron_right</span>
          </button>
        </div>

        <!-- Image Title -->
        <div class="mt-4 text-center">
          <h3 id="viewer-title" class="text-xl font-semibold text-white"></h3>
        </div>

        <!-- Thumbnails Slider -->
        <div class="mt-4 flex justify-center">
          <div id="thumbnails-container" class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent max-w-3xl">
            <!-- Thumbnails will be inserted here -->
          </div>
        </div>

        <!-- Zoom Controls -->
        <div class="mt-4 flex justify-center gap-4">
          <button id="viewer-zoom-out" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons">zoom_out</span>
          </button>
          <button id="viewer-zoom-reset" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons">fit_screen</span>
          </button>
          <button id="viewer-zoom-in" class="btn-ripple bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg backdrop-blur-sm">
            <span class="material-icons">zoom_in</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('viewer-close').addEventListener('click', () => this.close());
    document.getElementById('viewer-prev').addEventListener('click', () => this.prev());
    document.getElementById('viewer-next').addEventListener('click', () => this.next());
    document.getElementById('viewer-zoom-in').addEventListener('click', () => this.zoom(1.2));
    document.getElementById('viewer-zoom-out').addEventListener('click', () => this.zoom(0.8));
    document.getElementById('viewer-zoom-reset').addEventListener('click', () => this.resetZoom());
    
    // Click en el fondo para cerrar
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.close();
    });

    // Zoom con click en la imagen
    const img = document.getElementById('viewer-image');
    img.addEventListener('click', () => {
      if (img.style.cursor === 'zoom-in') {
        this.zoom(1.5);
        img.style.cursor = 'zoom-out';
      } else {
        this.resetZoom();
        img.style.cursor = 'zoom-in';
      }
    });
    
    // Gestos táctiles para móviles
    this.setupTouchGestures();
    
    // Ocultar botones en móviles
    this.setupMobileView();
  }
  
  setupTouchGestures() {
    const imageContainer = document.querySelector('#image-viewer-modal .flex-1');
    
    imageContainer.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    imageContainer.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.touchEndY = e.changedTouches[0].screenY;
      this.handleGesture();
    }, { passive: true });
  }
  
  handleGesture() {
    const diffX = this.touchEndX - this.touchStartX;
    const diffY = this.touchEndY - this.touchStartY;
    const minSwipeDistance = 50;
    
    // Detectar swipe horizontal (cambiar imagen)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swipe derecha - imagen anterior
        this.prev();
      } else {
        // Swipe izquierda - imagen siguiente
        this.next();
      }
    }
    
    // Detectar swipe vertical hacia abajo (cerrar)
    if (diffY > minSwipeDistance && Math.abs(diffY) > Math.abs(diffX)) {
      this.close();
    }
  }
  
  setupMobileView() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Ocultar botones de navegación en móviles (pero mantener el botón de cerrar)
      document.getElementById('viewer-prev').style.display = 'none';
      document.getElementById('viewer-next').style.display = 'none';
      
      // Ajustar controles de zoom para móviles
      const zoomControls = document.querySelector('#image-viewer-modal .mt-4.flex.justify-center.gap-4');
      if (zoomControls) {
        zoomControls.style.display = 'none';
      }
    }
    
    // Actualizar vista al cambiar tamaño de ventana
    window.addEventListener('resize', () => {
      const isMobileNow = window.innerWidth <= 768;
      const prevBtn = document.getElementById('viewer-prev');
      const nextBtn = document.getElementById('viewer-next');
      const zoomControls = document.querySelector('#image-viewer-modal .mt-4.flex.justify-center.gap-4');
      
      if (isMobileNow) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (zoomControls) zoomControls.style.display = 'none';
      } else {
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
        if (zoomControls) zoomControls.style.display = 'flex';
      }
    });
  }

  open(projectName, images, startIndex = 0) {
    this.currentProject = projectName;
    this.images = images;
    this.currentIndex = startIndex;
    
    // Crear miniaturas
    this.createThumbnails();
    
    this.showImage();
    
    const modal = document.getElementById('image-viewer-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Ocultar hint de gestos después de 3 segundos en móviles
    const gestureHint = document.getElementById('gesture-hint');
    if (gestureHint && window.innerWidth <= 768) {
      setTimeout(() => {
        gestureHint.style.opacity = '0';
        setTimeout(() => {
          gestureHint.style.display = 'none';
        }, 300);
      }, 3000);
    }
  }
  
  translateModal() {
    // NO usar el sistema de traducción automático porque sobrescribe los títulos
    // Las traducciones se manejan manualmente en translateImageTitle()
  }
  
  createThumbnails() {
    const container = document.getElementById('thumbnails-container');
    container.innerHTML = '';
    
    this.images.forEach((image, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'thumbnail flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all';
      thumb.dataset.index = index;
      
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.title;
      img.className = 'w-full h-full object-cover';
      
      thumb.appendChild(img);
      thumb.addEventListener('click', () => {
        this.currentIndex = index;
        this.showImage();
      });
      
      container.appendChild(thumb);
    });
  }

  close() {
    const modal = document.getElementById('image-viewer-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    this.resetZoom();
  }

  isOpen() {
    const modal = document.getElementById('image-viewer-modal');
    return modal && !modal.classList.contains('hidden');
  }

  showImage() {
    const img = document.getElementById('viewer-image');
    const title = document.getElementById('viewer-title');
    
    const currentImage = this.images[this.currentIndex];
    img.src = currentImage.src;
    img.alt = currentImage.title;
    
    // Traducir el título
    const translatedTitle = this.translateImageTitle(currentImage.title);
    title.textContent = translatedTitle;
    
    // Resetear zoom
    this.resetZoom();
    
    // Actualizar botones
    document.getElementById('viewer-prev').style.display = this.currentIndex > 0 ? 'block' : 'none';
    document.getElementById('viewer-next').style.display = this.currentIndex < this.images.length - 1 ? 'block' : 'none';
    
    // Actualizar miniaturas
    this.updateThumbnails();
  }
  
  updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (index === this.currentIndex) {
        thumb.classList.add('border-blue-500', 'ring-2', 'ring-blue-400');
        thumb.classList.remove('border-transparent');
        // Scroll para centrar la miniatura activa
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('border-blue-500', 'ring-2', 'ring-blue-400');
        thumb.classList.add('border-transparent');
      }
    });
  }

  translateImageTitle(filename) {
    // Obtener el idioma actual desde la URL, HTML lang o localStorage
    const urlParams = new URLSearchParams(window.location.search);
    let currentLang = urlParams.get('lang') || document.documentElement.lang || localStorage.getItem('language') || 'es';
    
    // Diccionario de traducciones integrado
    const translations = {
      es: {
        'Libreria Prototipos App Prototype Creator': 'Librería de Prototipos',
        'Chat IA Creacion Prototipos App Prototype Creator': 'Chat IA - Creación de Prototipos',
        'Vista Prototipo App Prototype Creator': 'Vista de Prototipo',
        'Libreria Prototipos Android App Prototype Creator': 'Librería de Prototipos Android',
        'Vista Prototipo Android App Prototype Creator': 'Vista de Prototipo Android',
        'Splash Screen FiveFootball': 'Pantalla de Inicio',
        'Menu Principal FiveFootball': 'Menú Principal',
        'Creacion Equipos LiveFootball': 'Creación de Equipos',
        'Edicion Jugadores LiveFootball': 'Edición de Jugadores',
        'Visualizacion Equipos LiveFootball': 'Visualización de Equipos'
      },
      en: {
        'Libreria Prototipos App Prototype Creator': 'Prototype Library',
        'Chat IA Creacion Prototipos App Prototype Creator': 'AI Chat - Prototype Creation',
        'Vista Prototipo App Prototype Creator': 'Prototype View',
        'Libreria Prototipos Android App Prototype Creator': 'Android Prototype Library',
        'Vista Prototipo Android App Prototype Creator': 'Android Prototype View',
        'Splash Screen FiveFootball': 'Splash Screen',
        'Menu Principal FiveFootball': 'Main Menu',
        'Creacion Equipos LiveFootball': 'Team Creation',
        'Edicion Jugadores LiveFootball': 'Player Editing',
        'Visualizacion Equipos LiveFootball': 'Team Visualization'
      }
    };
    
    // Buscar traducción
    const translated = translations[currentLang]?.[filename];
    
    // Retornar traducción o el nombre original
    return translated || filename;
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.showImage();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showImage();
    }
  }

  zoom(factor) {
    const img = document.getElementById('viewer-image');
    const currentScale = parseFloat(img.dataset.scale || 1);
    const newScale = currentScale * factor;
    
    // Limitar el zoom entre 0.5x y 3x
    if (newScale >= 0.5 && newScale <= 3) {
      img.style.transform = `scale(${newScale})`;
      img.dataset.scale = newScale;
    }
  }

  resetZoom() {
    const img = document.getElementById('viewer-image');
    img.style.transform = 'scale(1)';
    img.dataset.scale = 1;
    img.style.cursor = 'zoom-in';
  }
}

// Inicializar el visor
const imageViewer = new ImageViewer();

// Mapeo de proyectos a sus imágenes
const projectImages = {
  'App Prototype Creator': [
    { src: '/Libreria_Prototipos_App_Prototype_Creator.png', title: 'Libreria Prototipos App Prototype Creator' },
    { src: '/Chat_IA_Creacion_Prototipos_App_Prototype_Creator.png', title: 'Chat IA Creacion Prototipos App Prototype Creator' },
    { src: '/Vista_Prototipo_App_Prototype_Creator.png', title: 'Vista Prototipo App Prototype Creator' },
    { src: '/Libreria_Prototipos_Android_App_Prototype_Creator.png', title: 'Libreria Prototipos Android App Prototype Creator' },
    { src: '/Vista_Prototipo_Android_App_Prototype_Creator.png', title: 'Vista Prototipo Android App Prototype Creator' }
  ],
  'Live Football': [
    { src: '/Splash_Screen_FiveFootball.png', title: 'Splash Screen FiveFootball' },
    { src: '/Menu_Principal_FiveFootball.png', title: 'Menu Principal FiveFootball' },
    { src: '/Creacion_Equipos_LiveFootball.png', title: 'Creacion Equipos LiveFootball' },
    { src: '/Edicion_Jugadores_LiveFootball.png', title: 'Edicion Jugadores LiveFootball' },
    { src: '/Visualizacion_Equipos_LiveFootball.png', title: 'Visualizacion Equipos LiveFootball' }
  ]
};

// Función global para abrir el visor
window.openProjectGallery = function(projectName) {
  const images = projectImages[projectName];
  if (images && images.length > 0) {
    imageViewer.open(projectName, images, 0);
  }
};
