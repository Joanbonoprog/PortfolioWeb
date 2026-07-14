// Utilidad para gestionar la internacionalización
import esTranslations from './es.json';
import enTranslations from './en.json';
import type { Translations } from '../types/translations';

export type Language = 'es' | 'en';

const translations: Record<Language, Translations> = {
  es: esTranslations as Translations,
  en: enTranslations as Translations
};

/**
 * Obtiene las traducciones para el idioma especificado.
 * Fuente de verdad única: los JSON de este directorio.
 * @param lang - Código de idioma ('es' o 'en')
 * @returns Objeto con todas las traducciones tipado como Translations
 */
export function getTranslations(lang: Language = 'es'): Translations {
  return translations[lang] || translations.es;
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
