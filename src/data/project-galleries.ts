// Fuente de verdad única para las galerías de imágenes de cada proyecto.
// Los títulos se traducen en tiempo de ejecución vía window.__i18n__.gallery.images.

export interface ProjectImage {
  src: string;
  /** Clave usada para traducir el título (coincide con gallery.images). */
  title: string;
}

export type ProjectGalleries = Record<string, ProjectImage[]>;

export const projectGalleries: ProjectGalleries = {
  'App Prototype Creator': [
    { src: '/images/projects/Libreria_Prototipos_App_Prototype_Creator.webp', title: 'Libreria Prototipos App Prototype Creator' },
    { src: '/images/projects/Chat_IA_Creacion_Prototipos_App_Prototype_Creator.webp', title: 'Chat IA Creacion Prototipos App Prototype Creator' },
    { src: '/images/projects/Vista_Prototipo_App_Prototype_Creator.webp', title: 'Vista Prototipo App Prototype Creator' },
    { src: '/images/projects/Libreria_Prototipos_Android_App_Prototype_Creator.webp', title: 'Libreria Prototipos Android App Prototype Creator' },
    { src: '/images/projects/Vista_Prototipo_Android_App_Prototype_Creator.webp', title: 'Vista Prototipo Android App Prototype Creator' },
  ],
  'Live Football': [
    { src: '/images/projects/Splash_Screen_FiveFootball.webp', title: 'Splash Screen FiveFootball' },
    { src: '/images/projects/Menu_Principal_FiveFootball.webp', title: 'Menu Principal FiveFootball' },
    { src: '/images/projects/Creacion_Equipos_LiveFootball.webp', title: 'Creacion Equipos LiveFootball' },
    { src: '/images/projects/Edicion_Jugadores_LiveFootball.webp', title: 'Edicion Jugadores LiveFootball' },
    { src: '/images/projects/Visualizacion_Equipos_LiveFootball.webp', title: 'Visualizacion Equipos LiveFootball' },
  ],
};
