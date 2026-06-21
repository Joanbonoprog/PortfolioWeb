// Fuente de verdad única para los datos base de las previsualizaciones de enlaces.
// Los textos (title/desc) pueden sobrescribirse con las traducciones en runtime.

export interface PreviewData {
  siteName: string;
  title: string;
  desc: string;
  image: string;
  favicon: string;
}

export type PreviewDataMap = Record<string, PreviewData>;

const GITHUB_FAVICON = 'https://github.githubassets.com/favicons/favicon.svg';

/** Datos base (fallbacks) de cada preview, independientes del idioma. */
export const basePreviews: PreviewDataMap = {
  linkedin: {
    siteName: 'LinkedIn',
    title: 'Joan Bono Frígols | LinkedIn',
    desc: 'Software Developer + AI Integrator',
    image: '/images/brand/BannerLinkedin.webp',
    favicon: 'https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzuzsv',
  },
  github: {
    siteName: 'GitHub',
    title: 'Joanbonoprog',
    desc: 'Software Developer | Android, Kotlin Multiplatform & AI Integration',
    image: '/images/brand/BannerGithub.webp',
    favicon: GITHUB_FAVICON,
  },
  artimark: {
    siteName: 'Artimark',
    title: 'Artimark',
    desc: 'Digital marketing agency',
    image: '/images/experience/artimark_logo.webp',
    favicon: 'https://artimark.es/favicon.ico',
  },
  'project-livefootball': {
    siteName: 'GitHub',
    title: 'Joanbonoprog/LiveFootball',
    desc: 'Live Football project repository',
    image: '/images/projects/livefootbal_logo.webp',
    favicon: GITHUB_FAVICON,
  },
  'project-prototype-creator': {
    siteName: 'GitHub',
    title: 'Joanbonoprog/App-Prototipe-Creator',
    desc: 'App Prototype Creator repository',
    image: '/images/projects/app_prototipado_icon.webp',
    favicon: GITHUB_FAVICON,
  },
};

/**
 * Combina los datos base con las traducciones del idioma actual.
 * Devuelve un mapa listo para consumir por el tooltip de previews.
 */
export function buildPreviewData(linkPreviews: Record<string, { title?: string; desc?: string }> = {}): PreviewDataMap {
  return {
    linkedin: {
      ...basePreviews.linkedin,
      title: linkPreviews.linkedin?.title || basePreviews.linkedin.title,
      desc: linkPreviews.linkedin?.desc || basePreviews.linkedin.desc,
    },
    github: {
      ...basePreviews.github,
      title: linkPreviews.github?.title || basePreviews.github.title,
      desc: linkPreviews.github?.desc || basePreviews.github.desc,
    },
    artimark: {
      ...basePreviews.artimark,
      title: linkPreviews.artimark?.title || basePreviews.artimark.title,
      desc: linkPreviews.artimark?.desc || basePreviews.artimark.desc,
    },
    'project-livefootball': {
      ...basePreviews['project-livefootball'],
      desc: linkPreviews.projectLiveFootball?.desc || basePreviews['project-livefootball'].desc,
    },
    'project-prototype-creator': {
      ...basePreviews['project-prototype-creator'],
      desc: linkPreviews.projectPrototypeCreator?.desc || basePreviews['project-prototype-creator'].desc,
    },
  };
}
