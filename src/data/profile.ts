// Fuente de verdad única para los datos personales del perfil.
// Evita la duplicación entre el JSON-LD, metadatos y otros consumidores.

export const profile = {
  name: 'Joan Bono Frígols',
  url: 'https://joanbonoprog.es',
  image: 'https://joanbonoprog.es/images/hero/FotoPortfolio.webp',
  email: 'joanbonoprog@gmail.com',
  telephone: '+34 630 41 46 12',
  address: {
    locality: 'Valencia',
    country: 'ES',
  },
  social: [
    'https://linkedin.com/in/joanbonoprog',
    'https://github.com/Joanbonoprog',
  ],
  alumniOf: ['Evolve Academy', 'IFP Formación'],
  knowsAbout: [
    'Java',
    'Kotlin',
    'Android Development',
    'Kotlin Multiplatform',
    'Generative AI',
    'AI Integration',
    'Software Development',
    'Clean Architecture',
    'Compose Multiplatform',
    'Relational Databases',
    'Git',
  ],
} as const;

/**
 * Construye el objeto JSON-LD (Schema.org/Person) a partir del perfil.
 * @param jobTitle - Título profesional ya traducido al idioma actual.
 */
export function buildPersonJsonLd(jobTitle: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle,
    url: profile.url,
    image: profile.image,
    sameAs: profile.social,
    email: profile.email,
    telephone: profile.telephone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.address.locality,
      addressCountry: profile.address.country,
    },
    alumniOf: profile.alumniOf.map((name) => ({
      '@type': 'EducationalOrganization',
      name,
    })),
    knowsAbout: profile.knowsAbout,
  };
}
