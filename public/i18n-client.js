// Traducciones específicas de contenido
const contentTranslations = {
  es: {
    // Navigation
    'Volver al Inicio': 'Volver al Inicio',
    // Modal labels
    'Descripción': 'Descripción',
    'Tecnologías': 'Tecnologías',
    'Período': 'Período',
    'Empresa': 'Empresa',
    'Ver en GitHub': 'Ver en GitHub',
    'Visitar Sitio Web': 'Visitar Sitio Web',
    // Proyectos
    'Proyecto Final de Grado': 'Proyecto Final de Grado',
    'Proyecto Final de Master': 'Proyecto Final de Master',
    // Descripciones actualizadas
    'Aplicación Android completa para seguimiento en tiempo real de partidos de fútbol y gestión de equipos. Incluye actualizaciones en vivo, estadísticas de jugadores, notificaciones personalizadas y almacenamiento local con SQLite.\n\nEspecíficamente, me encargué del diseño y despliegue de la arquitectura de base de datos, implementando un sistema robusto de persistencia local con SQLite para acceso offline.': 'Aplicación Android completa para seguimiento en tiempo real de partidos de fútbol y gestión de equipos. Incluye actualizaciones en vivo, estadísticas de jugadores, notificaciones personalizadas y almacenamiento local con SQLite.\n\nEspecíficamente, me encargué del diseño y despliegue de la arquitectura de base de datos, implementando un sistema robusto de persistencia local con SQLite para acceso offline.',
    'Herramienta multiplataforma que utiliza IA para transformar ideas conceptuales en prototipos funcionales de aplicaciones. Ofrece chat conversacional con IA, galería de prototipos, vista detallada y capacidad de exportación.\n\nDesarrollada con Kotlin Multiplatform y Compose Multiplatform, funciona en Android y Desktop con código compartido, integrando Supabase para persistencia en la nube y soporte completo de internacionalización.': 'Herramienta multiplataforma que utiliza IA para transformar ideas conceptuales en prototipos funcionales de aplicaciones. Ofrece chat conversacional con IA, galería de prototipos, vista detallada y capacidad de exportación.\n\nDesarrollada con Kotlin Multiplatform y Compose Multiplatform, funciona en Android y Desktop con código compartido, integrando Supabase para persistencia en la nube y soporte completo de internacionalización.',
    // Experiencias
    'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.': 'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.',
    'Participación en el Diseño y Estructura de la Web, Encargado de la Introducción y Prueba del Sistema de Personalizado de Productos, Participación en el Mantenimiento y Escalabilidad de la Pagina Web, Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop, Apoyo en el Posicionamiento de la Web (SEO).': 'Participación en el Diseño y Estructura de la Web, Encargado de la Introducción y Prueba del Sistema de Personalizado de Productos, Participación en el Mantenimiento y Escalabilidad de la Pagina Web, Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop, Apoyo en el Posicionamiento de la Web (SEO).',
    // Sobre Mí (About Me)
    'Desarrollador de software especializado en Java y desarrollo multiplataforma, con conocimientos en diseño y despliegue de aplicaciones escalables': 'Desarrollador de software especializado en Java y desarrollo multiplataforma, con conocimientos en diseño y despliegue de aplicaciones escalables',
    'Complemento mi perfil técnico con formación en IA generativa y automatización de procesos, aplicando estas tecnologías para optimizar la productividad y mejorar la experiencia del usuario': 'Complemento mi perfil técnico con formación en IA generativa y automatización de procesos, aplicando estas tecnologías para optimizar la productividad y mejorar la experiencia del usuario',
    'Apasionado por la innovación tecnológica, la eficiencia en el código y la mejora continua': 'Apasionado por la innovación tecnológica, la eficiencia en el código y la mejora continua',
    // Idiomas
    'Castellano (Nativo)': 'Castellano (Nativo)',
    'Valenciano/Catalán (Nativo)': 'Valenciano/Catalán (Nativo)',
    'Inglés (Básico Profesional)': 'Inglés (Básico Profesional)',
    // Educación
    'Máster en IA Generativa': 'Máster en IA Generativa',
    'Master (480h + TFM)': 'Master (480h + TFM)',
    'Desarrollador de Aplicaciones Multiplataforma': 'Desarrollador de Aplicaciones Multiplataforma',
    'Grado Superior - FP': 'Grado Superior - FP',
    'Agentes de IA: Desarrollo de agentes autónomos': 'Agentes de IA: Desarrollo de agentes autónomos',
    'Automatización con IA: Integración de las Capacidades de la IA generativa en flujos de trabajo automatizados': 'Automatización con IA: Integración de las Capacidades de la IA generativa en flujos de trabajo automatizados',
    'Chatbots con IA: Diseño, implementación y optimización de chatbots potenciados con IA generativa': 'Chatbots con IA: Diseño, implementación y optimización de chatbots potenciados con IA generativa',
    'Desarrollo de aplicaciones sin código con IA: Creación de apps completas usando plataformas y herramientas con capacidad de IA generativa': 'Desarrollo de aplicaciones sin código con IA: Creación de apps completas usando plataformas y herramientas con capacidad de IA generativa',
    'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa': 'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa',
    'Desarrollo de aplicaciones para dispositivos móviles Android y Escritorio': 'Desarrollo de aplicaciones para dispositivos móviles Android y Escritorio',
    'Programación orientada a objetos con Java y C#': 'Programación orientada a objetos con Java y C#',
    'Desarrollo web con PHP y JavaScript': 'Desarrollo web con PHP y JavaScript',
    'Diseño y gestión de bases de datos relacionales con MySQL': 'Diseño y gestión de bases de datos relacionales con MySQL',
    'Desarrollo básico de videojuegos con Unity': 'Desarrollo básico de videojuegos con Unity',
    'Creación y consumo de servicios web (APIs REST)': 'Creación y consumo de servicios web (APIs REST)',
    'Gestión de proyectos de desarrollo de software': 'Gestión de proyectos de desarrollo de software',
    // Habilidades
    'Desarrollo en Entorno Java (Java + Kotlin)': 'Desarrollo en Entorno Java (Java + Kotlin)',
    'Conocimientos básicos en C#': 'Conocimientos básicos en C#',
    'Desarrollo de Bases de Datos en mySQL': 'Desarrollo de Bases de Datos en mySQL',
    'Conocimientos básicos de JavaScript y PHP': 'Conocimientos básicos de JavaScript y PHP',
    'Desarrollo de aplicaciones Android': 'Desarrollo de aplicaciones Android',
    'Conocimientos básicos en Unity': 'Conocimientos básicos en Unity',
    'Conocimientos en automatización con n8n y Make': 'Conocimientos en automatización con n8n y Make',
    'Conocimientos en IAs Generativas y su implementación en Aplicaciones': 'Conocimientos en IAs Generativas y su implementación en Aplicaciones',
    'Conocimientos en desarrollo de chatbots con IA': 'Conocimientos en desarrollo de chatbots con IA',
    'Conocimientos básicos en el uso de motores gráficos como Unity': 'Conocimientos básicos en el uso de motores gráficos como Unity',
    'Conocimientos básicos en Docker': 'Conocimientos básicos en Docker',
    'Conocimientos básicos en Git': 'Conocimientos básicos en Git',
    // Nuevas tecnologías de proyectos
    'Android SDK': 'Android SDK',
    'SQLite': 'SQLite',
    'Retrofit': 'Retrofit',
    'Material Design': 'Material Design',
    'Glide': 'Glide',
    'RxJava': 'RxJava',
    'OkHttp': 'OkHttp',
    'Gson': 'Gson',
    'Kotlin Multiplatform': 'Kotlin Multiplatform',
    'Compose Multiplatform': 'Compose Multiplatform',
    'Supabase': 'Supabase',
    'Koin': 'Koin',
    'Material Design 3': 'Material Design 3',
    'IA Generativa': 'IA Generativa',
    'Napier': 'Napier'
  },
  en: {
    // Navigation
    'Volver al Inicio': 'Back to Home',
    'Contacto': 'Contact',
    'Aqui tienes varias formas de contactarme': 'Here are several ways to contact me',
    'Conoce más sobre mi trayectoria profesional': 'Learn more about my professional background',
    'Tecnologías y herramientas que domino': 'Technologies and tools I master',
    'Desarrollador de Software + IA Specialist': 'Software Developer + AI Specialist',
    // Niveles de habilidades
    'Básico': 'Basic',
    'Intermedio': 'Intermediate',
    'Intermedio-Avanzado': 'Intermediate-Advanced',
    'Avanzado': 'Advanced',
    // Footer
    'Todos los derechos reservados': 'All rights reserved',
    'Hecho con ❤️ en Valencia, España': 'Made with ❤️ in Valencia, Spain',
    // Accesibilidad
    'Accesibilidad': 'Accessibility',
    'Tamaño de texto': 'Text Size',
    'Normal': 'Normal',
    'Grande': 'Large',
    'Muy Grande': 'Extra Large',
    'Usa estos controles para mejorar tu experiencia de lectura': 'Use these controls to improve your reading experience',
    'Sobre Mí': 'About Me',
    'Educación': 'Education',
    'Proyectos': 'Projects',
    'Experiencia': 'Experience',
    'Habilidades': 'Skills',
    // Section Titles
    'Mis Proyectos': 'Projects',
    'Proyectos destacados que demuestran mis habilidades técnicas y creatividad': 'Featured projects that demonstrate my technical skills and creativity',
    'Experiencia Laboral': 'Work Experience',
    'Mi trayectoria profesional y experiencias laborales': 'My professional career and work experiences',
    // Modal labels
    'Descripción': 'Description',
    'Tecnologías': 'Technologies',
    'Período': 'Period',
    'Empresa': 'Company',
    'Ver en GitHub': 'View on GitHub',
    'Visitar Sitio Web': 'Visit Website',
    // Projects
    'Live Football App: TFG': 'Live Football App: TFG',
    'App Prototype Creator: TFM': 'App Prototype Creator: TFM',
    'App Prototype Creator': 'App Prototype Creator',
    'Proyecto Final de Grado': 'Final Degree Project',
    'Proyecto Final de Master': 'Final Master Project',
    'Final Master Project': 'Final Master Project',
    // Descripciones actualizadas
    'Aplicación Android completa para seguimiento en tiempo real de partidos de fútbol y gestión de equipos. Incluye actualizaciones en vivo, estadísticas de jugadores, notificaciones personalizadas y almacenamiento local con SQLite.\n\nEspecíficamente, me encargué del diseño y despliegue de la arquitectura de base de datos, implementando un sistema robusto de persistencia local con SQLite para acceso offline.': 'Comprehensive Android application for real-time football match tracking and team management. Features live updates, player statistics, custom notifications, and local storage with SQLite.\n\nSpecifically, I was responsible for designing and deploying the database architecture, implementing a robust local persistence system with SQLite for offline access.',
    'Herramienta multiplataforma que utiliza IA para transformar ideas conceptuales en prototipos funcionales de aplicaciones. Ofrece chat conversacional con IA, galería de prototipos, vista detallada y capacidad de exportación.\n\nDesarrollada con Kotlin Multiplatform y Compose Multiplatform, funciona en Android y Desktop con código compartido, integrando Supabase para persistencia en la nube y soporte completo de internacionalización.': 'Cross-platform tool that uses AI to transform conceptual ideas into functional application prototypes. Features conversational AI chat, prototype gallery, detailed view, and export capabilities.\n\nDeveloped with Kotlin Multiplatform and Compose Multiplatform, runs on Android and Desktop with shared code, integrating Supabase for cloud persistence and full internationalization support.',
    // Experiences
    'Web Developer WordPress': 'WordPress Web Developer',
    'Creador de Contenido': 'Content Creator',
    'Artimark, Llanera de Ranes, Valencia': 'Artimark, Llanera de Ranes, Valencia',
    'Asociación Cultura Festiva Sellent': 'Asociación Cultura Festiva Sellent',
    'Junio 2024 - Enero 2025': 'June 2024 - January 2025',
    '2016-2018': '2016-2018',
    'Participación en el Diseño y Estructura de la Web. Encargado de la Introducción y Prueba del Sistema Personalizado de Productos. Participación en el Mantenimiento y Escalabilidad de la Página Web. Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop. Apoyo en el Posicionamiento de la Web (SEO).': 'Participation in Web Design and Structure. In charge of the Introduction and Testing of the Custom Product System. Participation in the Maintenance and Scalability of the Website. In charge of Testing and Maintenance of the eShop Payment Gateway. Support in Web Positioning (SEO).',
    'Participación en el Diseño y Estructura de la Web': 'Participation in Web Design and Structure',
    'Participación en el Diseño y Estructura de la Web.': 'Participation in Web Design and Structure.',
    'Encargado de la Introducción y Prueba del Sistema Personalizado de Productos': 'In charge of the Introduction and Testing of the Custom Product System',
    'Encargado de la Introducción y Prueba del Sistema Personalizado de Productos.': 'In charge of the Introduction and Testing of the Custom Product System.',
    'Participación en el Mantenimiento y Escalabilidad de la Página Web': 'Participation in the Maintenance and Scalability of the Website',
    'Participación en el Mantenimiento y Escalabilidad de la Página Web.': 'Participation in the Maintenance and Scalability of the Website.',
    'Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop': 'In charge of Testing and Maintenance of the eShop Payment Gateway',
    'Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop.': 'In charge of Testing and Maintenance of the eShop Payment Gateway.',
    'Apoyo en el Posicionamiento de la Web (SEO)': 'Support in Web Positioning (SEO)',
    'Apoyo en el Posicionamiento de la Web (SEO).': 'Support in Web Positioning (SEO).',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%. Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%.': 'Digital campaigns were designed and executed that increased event visibility by +60%. Events were coordinated that increased the number of attendees by 40%.',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%': 'Digital campaigns were designed and executed that increased event visibility by +60%',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%.': 'Digital campaigns were designed and executed that increased event visibility by +60%.',
    'Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%': 'Events were coordinated that increased the number of attendees by 40%',
    'Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%.': 'Events were coordinated that increased the number of attendees by 40%.',
    // About Me
    'Desarrollador de software especializado en Java y desarrollo multiplataforma, con conocimientos en diseño y despliegue de aplicaciones escalables': 'Software developer specialized in Java and multiplatform development, with knowledge in designing and deploying scalable applications',
    'Complemento mi perfil técnico con formación en IA generativa y automatización de procesos, aplicando estas tecnologías para optimizar la productividad y mejorar la experiencia del usuario': 'I complement my technical profile with training in generative AI and process automation, applying these technologies to optimize productivity and improve user experience',
    'Apasionado por la innovación tecnológica, la eficiencia en el código y la mejora continua': 'Passionate about technological innovation, code efficiency and continuous improvement',
    // Languages
    'Castellano (Nativo)': 'Spanish (Native)',
    'Valenciano/Catalán (Nativo)': 'Valencian/Catalan (Native)',
    'Inglés (Básico Profesional)': 'English (Professional Basic)',
    // Education
    'Máster en IA Generativa': 'Master in Generative AI',
    'Master (480h + TFM)': 'Master (480h + Final Project)',
    'Grado Superior': 'Higher Degree',
    "EVOLVE, Remoto": "EVOLVE, Remote",
    "IFP FORMACIÓN, Remoto": "IFP FORMACIÓN, Remote",
    'Desarrollador de Aplicaciones Multiplataforma': 'Multiplatform Application Developer',
    'Agentes de IA: Desarrollo de agentes autónomos': 'AI Agents: Development of autonomous agents',
    'Automatización con IA: Integración de las Capacidades de la IA generativa en flujos de trabajo automatizados': 'Automation with AI: Integration of Generative AI capabilities in automated workflows',
    'Chatbots con IA: Diseño, implementación y optimización de chatbots potenciados con IA generativa': 'AI Chatbots: Design, implementation and optimization of chatbots powered by generative AI',
    'Desarrollo de aplicaciones sin código con IA: Creación de apps completas usando plataformas y herramientas con capacidad de IA generativa': 'No-code application development with AI: Creation of complete apps using platforms and tools with generative AI capability',
    'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa': 'Content Creation with AI (Image, Video, Audio): Content creation using Generative AI tools',
    'Desarrollo de aplicaciones para dispositivos móviles Android y Escritorio': 'Development of applications for Android and Desktop mobile devices',
    'Programación orientada a objetos con Java y C#': 'Object-oriented programming with Java and C#',
    'Desarrollo web con PHP y JavaScript': 'Web development with PHP and JavaScript',
    'Diseño y gestión de bases de datos relacionales con MySQL': 'Design and management of relational databases with MySQL',
    'Desarrollo básico de videojuegos con Unity': 'Basic video game development with Unity',
    'Creación y consumo de servicios web (APIs REST)': 'Creation and consumption of web services (REST APIs)',
    'Gestión de proyectos de desarrollo de software.': 'Software development project management',
    'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa.': 'Content Creation with AI (Image, Video, Audio): Content creation using Generative AI tools',
    // Technologies (Projects)
    'Tecnologías': 'Technologies',
    'Java': 'Java',
    'Android': 'Android',
    'MySQL': 'MySQL',
    'XML Squema': 'XML Schema',
    'Kotlin': 'Kotlin',
    'Compose Multiplatform': 'Compose Multiplatform',
    'IA': 'AI',
    'PostGreSQL': 'PostgreSQL',
    // Skills
    'Desarrollo en Entorno Java (Java + Kotlin)': 'Java Development (Java + Kotlin)',
    'Conocimientos básicos en C#': 'Basic knowledge in C#',
    'Desarrollo de Bases de Datos en mySQL': 'Database Development in mySQL',
    'Conocimientos básicos de JavaScript y PHP': 'Basic knowledge of JavaScript and PHP',
    'Desarrollo de aplicaciones Android': 'Android application development',
    'Conocimientos básicos en Unity': 'Basic knowledge in Unity',
    'Conocimientos en automatización con n8n y Make': 'Knowledge in automation with n8n and Make',
    'Conocimientos en IAs Generativas y su implementación en Aplicaciones': 'Knowledge in Generative AIs and their implementation in Applications',
    'Conocimientos en desarrollo de chatbots con IA': 'Knowledge in AI chatbot development',
    'Conocimientos básicos en el uso de motores gráficos como Unity': 'Basic knowledge in the use of graphic engines like Unity',
    'Conocimientos básicos en Docker': 'Basic knowledge in Docker',
    'Conocimientos básicos en Git': 'Basic knowledge in Git',
    // Nuevas tecnologías de proyectos
    'Android SDK': 'Android SDK',
    'SQLite': 'SQLite',
    'Retrofit': 'Retrofit',
    'Material Design': 'Material Design',
    'Glide': 'Glide',
    'RxJava': 'RxJava',
    'OkHttp': 'OkHttp',
    'Gson': 'Gson',
    'Kotlin Multiplatform': 'Kotlin Multiplatform',
    'Compose Multiplatform': 'Compose Multiplatform',
    'Supabase': 'Supabase',
    'Koin': 'Koin',
    'Material Design 3': 'Material Design 3',
    'IA Generativa': 'Generative AI',
    'Napier': 'Napier',
    // Footer
    'Construido Con': 'Built With'
  }
};

// Aplicar traducciones
function applyTranslations() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'es';

  // Usar las traducciones embebidas desde SSR (window.__i18n__) como fuente de verdad
  const i18n = window.__i18n__ || {};
  const t = i18n[lang] || i18n['es'] || {};
  const ct = contentTranslations[lang] || contentTranslations.es;
  
  // Exponer globalmente para que el modal pueda llamarla
  window.applyTranslations = applyTranslations;
  
  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    if (value) {
      el.textContent = value;
    }
  });
  
  // Actualizar elementos con data-i18n-content (para contenido específico)
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    if (key && ct[key]) {
      el.textContent = ct[key];
    }
  });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyTranslations);
} else {
  applyTranslations();
}

// El modal ahora llama a applyTranslations() directamente cuando se abre
// No necesitamos observer
