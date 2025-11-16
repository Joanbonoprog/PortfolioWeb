// Utilidad para gestionar la internacionalización
import esTranslations from './es.json';
import enTranslations from './en.json';

export type Language = 'es' | 'en';

const translations = { 
  es: esTranslations, 
  en: enTranslations 
};

/**
 * Obtiene las traducciones para el idioma especificado
 * @param lang - Código de idioma ('es' o 'en')
 * @returns Objeto con todas las traducciones
 */
export function getTranslations(lang: Language = 'es') {
  console.log('=== getTranslations ===');
  console.log('Idioma solicitado:', lang);
  console.log('Traducciones disponibles:', Object.keys(translations));
  
  const result = translations[lang] || translations.es;
  
  console.log('Saludo en español:', translations.es.hero.greeting);
  console.log('Saludo en inglés:', translations.en.hero.greeting);
  console.log('Saludo seleccionado:', result.hero.greeting);
  
  return result;
}

/**
 * Detecta el idioma del navegador
 * @returns Código de idioma detectado
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  const browserLang = navigator.language.split('-')[0];
  return (browserLang === 'en' || browserLang === 'es') ? browserLang as Language : 'es';
}
