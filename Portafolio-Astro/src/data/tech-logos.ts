// Fuente de verdad única para el mapeo de tecnologías a sus logos.

/** Logo por defecto cuando no hay coincidencia. */
export const DEFAULT_TECH_LOGO = '💻';

/** Mapeo nombre de tecnología -> ruta del logo. */
export const techLogos: Record<string, string> = {
  'IAs Generativas y LLMS': '/images/skills/openai.webp',
  'Chatbots con IA': '/images/skills/telegram.webp',
  'Generative AIs and LLMs': '/images/skills/openai.webp',
  'AI chatbot development': '/images/skills/telegram.webp',
  'IAs Generativas': '/images/skills/openai.webp',
  'chatbots': '/images/skills/telegram.webp',
  'JavaScript': '/images/skills/javascript-original.webp',
  'Java': '/images/skills/java-original.webp',
  'Kotlin Multiplatform': '/images/skills/KMP.webp',
  'Kotlin': '/images/skills/KMP.webp',
  'Multiplatform': '/images/skills/KMP.webp',
  'C#': '/images/skills/csharp-original.webp',
  'mySQL': '/images/skills/mysql-original.webp',
  'PHP': '/images/skills/php-original.webp',
  'Android': '/images/skills/android-original.webp',
  'Unity': '/images/skills/unity-original.webp',
  'n8n': '/images/skills/n8n.webp',
  'Docker': '/images/skills/docker-original.webp',
  'Git': '/images/skills/git-original.webp',
  'Shell': '/images/skills/Shell.webp',
};

/**
 * Devuelve el logo de una skill: primero por coincidencia exacta
 * (case-insensitive) y luego por substring como fallback.
 */
export function getTechLogo(skill: string): string {
  const skillLower = skill.toLowerCase();

  for (const [tech, logo] of Object.entries(techLogos)) {
    if (skillLower === tech.toLowerCase()) return logo;
  }

  for (const [tech, logo] of Object.entries(techLogos)) {
    if (skillLower.includes(tech.toLowerCase())) return logo;
  }

  return DEFAULT_TECH_LOGO;
}

/** True si el logo es una imagen (ruta) en lugar de un emoji. */
export function isImageLogo(logo: string): boolean {
  return logo.startsWith('http') || logo.startsWith('/');
}
