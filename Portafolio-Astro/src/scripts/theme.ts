// Sistema de gestión de temas claro/oscuro
(function initTheme() {
  const THEME_KEY = 'portfolio-theme';
  type Theme = 'light' | 'dark';
  
  // Obtener tema guardado o usar 'dark' por defecto
  function getStoredTheme(): Theme {
    const stored = localStorage.getItem(THEME_KEY);
    // Validar que el tema sea uno de los permitidos
    const validThemes: Theme[] = ['light', 'dark'];
    if (!stored || !validThemes.includes(stored as Theme)) {
      return 'dark';
    }
    return stored as Theme;
  }
  
  // Guardar tema
  function setStoredTheme(theme: Theme): void {
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Aplicar tema
  function applyTheme(theme: Theme): void {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setStoredTheme(theme);
  }
  
  // Cambiar tema
  function toggleTheme(): void {
    const currentTheme = getStoredTheme();
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    updateThemeButton(newTheme);
  }
  
  // Actualizar icono del botón
  function updateThemeButton(theme: Theme): void {
    const button = document.getElementById('theme-toggle');
    const icon = button?.querySelector('.material-icons');
    if (icon) {
      icon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
    }
  }
  
  // Inicializar tema al cargar la página
  function initTheme(): void {
    const theme = getStoredTheme();
    applyTheme(theme);
    updateThemeButton(theme);
  }
  
  // Exponer funciones globalmente
  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;
  
  // Aplicar tema inmediatamente para evitar flash
  const theme = getStoredTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
