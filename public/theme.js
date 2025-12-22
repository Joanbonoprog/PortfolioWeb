// Sistema de gestión de temas claro/oscuro
(function() {
  const THEME_KEY = 'portfolio-theme';
  
  // Obtener tema guardado o usar 'dark' por defecto
  function getStoredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    // Si no hay tema guardado, devolver 'dark'
    if (!stored) {
      return 'dark';
    }
    return stored;
  }
  
  // Guardar tema
  function setStoredTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Aplicar tema
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setStoredTheme(theme);
  }
  
  // Cambiar tema
  function toggleTheme() {
    const currentTheme = getStoredTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('🔄 Cambiando tema de', currentTheme, 'a', newTheme);
    applyTheme(newTheme);
    
    // Actualizar icono del botón
    updateThemeButton(newTheme);
    console.log('✅ Tema aplicado:', newTheme);
  }
  
  // Actualizar icono del botón
  function updateThemeButton(theme) {
    const button = document.getElementById('theme-toggle');
    const icon = button?.querySelector('.material-icons');
    if (icon) {
      icon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
    }
  }
  
  // Inicializar tema al cargar la página
  function initTheme() {
    const theme = getStoredTheme();
    applyTheme(theme);
    updateThemeButton(theme);
  }
  
  // Exponer funciones globalmente
  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;
  
  // Aplicar tema inmediatamente para evitar flash
  const theme = getStoredTheme();
  console.log('Tema inicial:', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  console.log('Clases del HTML:', document.documentElement.className);
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
