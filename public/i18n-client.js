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
    'Herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, ofrece una experiencia fluida tanto en Android como en escritorio.\n\nIncluye chat con IA multi-proveedor (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Flash), generación automática de prototipos, galería con búsqueda, visualización HTML, exportación a HTML/PDF, soporte multiplataforma (Android 8.0+ y Desktop), tema claro/oscuro, internacionalización español/inglés, y almacenamiento local seguro con SQLDelight.': 'Herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, ofrece una experiencia fluida tanto en Android como en escritorio.\n\nIncluye chat con IA multi-proveedor (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Flash), generación automática de prototipos, galería con búsqueda, visualización HTML, exportación a HTML/PDF, soporte multiplataforma (Android 8.0+ y Desktop), tema claro/oscuro, internacionalización español/inglés, y almacenamiento local seguro con SQLDelight.',
    // Experiencias
    'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.': 'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.',
    'Arquitectura del Sitio Web: Participación activa en el diseño estructural y despliegue técnico desde cero de la nueva e-shop utilizando WordPress, WooCommerce, Elementor y Astro.': 'Arquitectura del Sitio Web: Participación activa en el diseño estructural y despliegue técnico desde cero de la nueva e-shop utilizando WordPress, WooCommerce, Elementor y Astro.',
    'Lógica de Configuración: Desarrollo y testeo del sistema personalizado de gestión y variación de productos, programando reglas de negocio a medida bajo entornos PHP y WooCommerce.': 'Lógica de Configuración: Desarrollo y testeo del sistema personalizado de gestión y variación de productos, programando reglas de negocio a medida bajo entornos PHP y WooCommerce.',
    'QA y Pasarela de Pagos: Integración, mantenimiento y pruebas de estrés de la pasarela de pago Redsys, asegurando la encriptación y el correcto flujo transaccional en el entorno de producción.': 'QA y Pasarela de Pagos: Integración, mantenimiento y pruebas de estrés de la pasarela de pago Redsys, asegurando la encriptación y el correcto flujo transaccional en el entorno de producción.',
    'Rendimiento y SEO: Optimización de la carga en servidores, estructura semántica de URLs, metadatos y monitorización técnica mediante herramientas de analítica web.': 'Rendimiento y SEO: Optimización de la carga en servidores, estructura semántica de URLs, metadatos y monitorización técnica mediante herramientas de analítica web.',
    // Sobre Mí (About Me)
    'Desarrollador de software especializado en Kotlin y el ecosistema multiplataforma, con experiencia en aplicaciones Android e integración avanzada de IA generativa.': 'Desarrollador de software especializado en Kotlin y el ecosistema multiplataforma, con experiencia en aplicaciones Android e integración avanzada de IA generativa.',
    'He diseñado e implementado soluciones multiplataforma bajo arquitectura limpia, integrando modelos de lenguaje multi-proveedor (GPT-4, Claude, Gemini) y flujos de automatización.': 'He diseñado e implementado soluciones multiplataforma bajo arquitectura limpia, integrando modelos de lenguaje multi-proveedor (GPT-4, Claude, Gemini) y flujos de automatización.',
    'Enfocado en la rigurosidad del código, la eficiencia técnica y la entrega de software robusto y fácilmente extensible.': 'Enfocado en la rigurosidad del código, la eficiencia técnica y la entrega de software robusto y fácilmente extensible.',
    // Idiomas
    'Castellano (Nativo)': 'Castellano (Nativo)',
    'Valenciano/Catalán (Nativo)': 'Valenciano/Catalán (Nativo)',
    'Inglés (Técnico Profesional "B1")': 'Inglés (Técnico Profesional "B1")',
    // Bento Grid - About
    'Buscando trabajo para incorporación inmediata': 'Buscando trabajo para incorporación inmediata',
    'Carnet B + Coche propio': 'Carnet B + Coche propio',
    'Carnet B': 'Carnet B',
    'Coche propio': 'Coche propio',
    'Actualmente formándome en Spring Boot y Spring AI para ampliar mis capacidades en desarrollo backend y aplicaciones con IA.': 'Actualmente formándome en Spring Boot y Spring AI para ampliar mis capacidades en desarrollo backend y aplicaciones con IA.',
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
    'Git & Github': 'Git & Github',
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
    'SQLDelight': 'SQLDelight',
    'Koin': 'Koin',
    'Material Design 3': 'Material Design 3',
    'OpenAI GPT-4o': 'OpenAI GPT-4o',
    'Anthropic Claude': 'Anthropic Claude',
    'Google Gemini': 'Google Gemini',
    'Ktor Client': 'Ktor Client',
    'Napier': 'Napier',
    'JUnit': 'JUnit'
  },
  en: {
    // Navigation
    'Volver al Inicio': 'Back to Home',
    'Contacto': 'Contact',
    'Aqui tienes varias formas de contactarme': 'Here are several ways to contact me',
    'Conoce más sobre mi trayectoria profesional': 'Learn more about my professional background',
    'Tecnologías y herramientas que domino': 'Technologies and tools I master',
    'Software Developer | Android, Kotlin Multiplatform & AI Integration': 'Software Developer | Android, Kotlin Multiplatform & AI Integration',
    // Niveles de habilidades
    'Básico': 'Basic',
    'Intermedio': 'Intermediate',
    'Intermedio-Avanzado': 'Intermediate-Advanced',
    'Avanzado': 'Advanced',
    // Footer
    'Todos los derechos reservados': 'All rights reserved',
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
    'Herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, ofrece una experiencia fluida tanto en Android como en escritorio.\n\nIncluye chat con IA multi-proveedor (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Flash), generación automática de prototipos, galería con búsqueda, visualización HTML, exportación a HTML/PDF, soporte multiplataforma (Android 8.0+ y Desktop), tema claro/oscuro, internacionalización español/inglés, y almacenamiento local seguro con SQLDelight.': 'Tool that uses artificial intelligence to convert conceptual ideas into functional and detailed application prototypes. Built with Kotlin Multiplatform and Compose Multiplatform, it offers a seamless experience on both Android and desktop.\n\nFeatures multi-provider AI chat (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Flash), automatic prototype generation, gallery with search, HTML visualization, export to HTML/PDF, cross-platform support (Android 8.0+ and Desktop), light/dark theme, Spanish/English internationalization, and secure local storage with SQLDelight.',
    // Experiences
    'Web Developer WordPress': 'WordPress Web Developer',
    'Creador de Contenido': 'Content Creator',
    'Artimark, Llanera de Ranes, Valencia': 'Artimark, Llanera de Ranes, Valencia',
    'Asociación Cultura Festiva Sellent': 'Asociación Cultura Festiva Sellent',
    'Junio 2024 - Enero 2025': 'June 2024 - January 2025',
    '2016-2018': '2016-2018',
    'Arquitectura del Sitio Web: Participación activa en el diseño estructural y despliegue técnico desde cero de la nueva e-shop utilizando WordPress, WooCommerce, Elementor y Astro.': 'Website Architecture: Active participation in the structural design and technical deployment from scratch of the company\'s new e-shop using WordPress, WooCommerce, Elementor and Astro.',
    'Lógica de Configuración: Desarrollo y testeo del sistema personalizado de gestión y variación de productos, programando reglas de negocio a medida bajo entornos PHP y WooCommerce.': 'Configuration Logic: Development and testing of the custom product management and variation system, programming custom business rules in PHP and WooCommerce environments.',
    'QA y Pasarela de Pagos: Integración, mantenimiento y pruebas de estrés de la pasarela de pago Redsys, asegurando la encriptación y el correcto flujo transaccional en el entorno de producción.': 'QA and Payment Gateway: Integration, maintenance and stress testing of the Redsys payment gateway, ensuring encryption and correct transactional flow in the production environment.',
    'Rendimiento y SEO: Optimización de la carga en servidores, estructura semántica de URLs, metadatos y monitorización técnica mediante herramientas de analítica web.': 'Performance and SEO: Server load optimization, semantic URL structure, metadata and technical monitoring using web analytics tools.',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%. Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%.': 'Digital campaigns were designed and executed that increased event visibility by +60%. Events were coordinated that increased the number of attendees by 40%.',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%': 'Digital campaigns were designed and executed that increased event visibility by +60%',
    'Se diseñaron y ejecutaron campañas digitales que incrementaron la visibilidad de los eventos en un +60%.': 'Digital campaigns were designed and executed that increased event visibility by +60%.',
    'Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%': 'Events were coordinated that increased the number of attendees by 40%',
    'Se coordinaron eventos que aumentaron la cantidad de asistentes en un 40%.': 'Events were coordinated that increased the number of attendees by 40%.',
    // About Me
    'Desarrollador de software especializado en Kotlin y el ecosistema multiplataforma, con experiencia en aplicaciones Android e integración avanzada de IA generativa.': 'Software developer specialized in Kotlin and the multiplatform ecosystem, with experience in Android applications and advanced generative AI integration.',
    'He diseñado e implementado soluciones multiplataforma bajo arquitectura limpia, integrando modelos de lenguaje multi-proveedor (GPT-4, Claude, Gemini) y flujos de automatización.': 'I have designed and implemented multiplatform solutions under clean architecture, integrating multi-provider language models (GPT-4, Claude, Gemini) and automation workflows.',
    'Enfocado en la rigurosidad del código, la eficiencia técnica y la entrega de software robusto y fácilmente extensible.': 'Focused on code rigor, technical efficiency and delivering robust, easily extensible software.',
    // Languages
    'Castellano (Nativo)': 'Spanish (Native)',
    'Valenciano/Catalán (Nativo)': 'Valencian/Catalan (Native)',
    'Inglés (Técnico Profesional "B1")': 'English (Technical Professional "B1")',
    // Bento Grid - About
    'Buscando trabajo para incorporación inmediata': 'Looking for work - Immediate availability',
    'Carnet B + Coche propio': 'License B + Own car',
    'Carnet B': 'License B',
    'Coche propio': 'Own car',
    'Actualmente formándome en Spring Boot y Spring AI para ampliar mis capacidades en desarrollo backend y aplicaciones con IA.': 'Currently training in Spring Boot and Spring AI to expand my backend development and AI application capabilities.',
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
    'JVM (Java & Kotlin)': 'JVM (Java & Kotlin)',
    'C#': 'C#',
    'mySQL | PostgreSQL | SQLite | SQLDelight': 'mySQL | PostgreSQL | SQLite | SQLDelight',
    'JavaScript y PHP': 'JavaScript and PHP',
    'Desarrollo Android': 'Android Development',
    'Kotlin Multiplatform': 'Kotlin Multiplatform',
    'Automatización - n8n y Make': 'Automation - n8n & Make',
    'IAs Generativas y LLMS': 'Generative AI & LLMs',
    'Chatbots con IA': 'AI Chatbot Development',
    'Unity y Motores Gráficos': 'Unity & Graphic Engines',
    'Contenedores - Docker': 'Containers - Docker',
    'Git & Github': 'Git & Github',
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
    'SQLDelight': 'SQLDelight',
    'Koin': 'Koin',
    'Material Design 3': 'Material Design 3',
    'OpenAI GPT-4o': 'OpenAI GPT-4o',
    'Anthropic Claude': 'Anthropic Claude',
    'Google Gemini': 'Google Gemini',
    'Ktor Client': 'Ktor Client',
    'Napier': 'Napier',
    'JUnit': 'JUnit',
    'Mockito': 'Mockito',
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
