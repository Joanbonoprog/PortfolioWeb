// Sistema de traducciones del lado del cliente
const translations = {
  es: {
    hero: {
      name: "Joan Bono Frígols",
      greeting: "",
      title: "Desarrollador de Software + IA Specialist",
      cta: "Ver Proyectos y Experiencia"
    },
    nav: {
      contact: "Contacto",
      about: "Sobre Mí",
      education: "Educación",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades"
    },
    about: {
      title: "Sobre Mí",
      description: "Desarrollador de software especializado en Java y desarrollo multiplataforma, con conocimientos en diseño y despliegue de aplicaciones escalables.\n \n Complemento mi perfil técnico con formación en IA generativa y automatización de procesos, aplicando estas tecnologías para optimizar la productividad y mejorar la experiencia del usuario.\n \n Apasionado por la innovación tecnológica, la eficiencia en el código y la mejora continua.",
      downloadCV: "Descargar CV"
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Selecciona el idioma y el estilo de CV que prefieras",
      styleHarvard: "Estilo Harvard",
      styleDetailed: "Detallado"
    },
    education: {
      title: "Formación Académica",
      subtitle: "Mi formación académica y certificaciones"
    },
    experience: {
      title: "Experiencia Laboral",
      subtitle: "Mi trayectoria profesional y experiencias laborales",
      visitWebsite: "Visitar Sitio Web"
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Proyectos destacados que demuestran mis habilidades técnicas y creatividad",
      technologies: "Tecnologías",
      viewGithub: "Ver en GitHub",
      visitWebsite: "Visitar Sitio Web"
    },
    languages: {
      title: "Idiomas"
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y herramientas que domino"
    },
    contact: {
      title: "Contacto",
      subtitle: "Aqui tienes varias formas de contactarme",
      phone: "Teléfono",
      phoneValue: "(+34) 630 41 46 12",
      email: "Email",
      emailValue: "joanbonoprog@gmail.com",
      address: "Dirección",
      addressValue: "Calle Assagador, 15. Sellent (Valencia) 46295 - España",
      linkedin: "LinkedIn",
      linkedinValue: "linkedin.com/in/joanbonoprog"
    },
    phone: {
      title: "Mis Proyectos y Experiencia",
      subtitle: "Toca las apps para ver más detalles"
    },
    footer: {
      builtWith: "Construido Con",
      techStack: [
        { name: "Astro", url: "https://astro.build", logo: "public/astro-icon-light.svg" },
        { name: "TypeScript", url: "https://www.typescriptlang.org", logo: "public/typescript-original.svg" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com", logo: "public/tailwindcss-original.svg" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: "public/images/tech/javascript.svg" }
      ]
    }
  },
  en: {
    hero: {
      greeting: "",
      title: "Software Developer + AI Specialist",
      cta: "View Projects & Experience"
    },
    nav: {
      contact: "Contact",
      about: "About Me",
      education: "Education",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills"
    },
    about: {
      title: "About Me",
      description: "Software developer specialized in Java and multiplatform development, with knowledge in designing and deploying scalable applications.\n \n I complement my technical profile with training in generative AI and process automation, applying these technologies to optimize productivity and improve user experience.\n \n Passionate about technological innovation, code efficiency and continuous improvement.",
      downloadCV: "Download CV"
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Select the language and style of CV you prefer",
      styleHarvard: "Harvard Style",
      styleDetailed: "Detailed"
    },
    education: {
      title: "Academic Background",
      subtitle: "My academic background and certifications"
    },
    experience: {
      title: "Work Experience",
      subtitle: "My professional career and work experiences",
      visitWebsite: "Visit Website"
    },
    projects: {
      title: "Projects",
      subtitle: "Featured projects that demonstrate my technical skills and creativity",
      technologies: "Technologies",
      viewGithub: "View on GitHub",
      visitWebsite: "Visit Website"
    },
    languages: {
      title: "Languages"
    },
    skills: {
      title: "Technical Skills"
    },
    contact: {
      title: "Contact",
      phone: "Phone",
      phoneValue: "(+34) 630 41 46 12",
      email: "Email",
      emailValue: "joanbonoprog@gmail.com",
      address: "Address",
      addressValue: "Assagador Street, 15. Sellent (Valencia) 46295 - Spain",
      linkedin: "LinkedIn",
      linkedinValue: "linkedin.com/in/joanbonoprog"
    },
    phone: {
      title: "My Projects & Experience",
      subtitle: "Tap the apps to see more details"
    },
    footer: {
      builtWith: "Built With",
      techStack: [
        { name: "Astro", url: "https://astro.build", logo: "https://astro.build/assets/press/astro-icon-light.svg" },
        { name: "TypeScript", url: "https://www.typescriptlang.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ]
    }
  }
};

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
    'Una aplicación de Android programado en Java, cuya finalidad es destinada a realizar una gestión completa de un partido de futbol. Esencialmente, me encargue del Backend, además del diseño y despliegue de la base de datos.': 'Una aplicación de Android programado en Java, cuya finalidad es destinada a realizar una gestión completa de un partido de futbol. Esencialmente, me encargue del Backend, además del diseño y despliegue de la base de datos.',
    'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.': 'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.',
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
    'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa': 'Creación de Contenido con IA (Imagen, Video, Audio): Creación de Contenido utilizando herramientas de IA Generativa',
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
    'Conocimientos básicos en Git': 'Conocimientos básicos en Git'
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
    'Una aplicación de Android programado en Java, cuyo objetivo es realizar una gestión completa de un partido de fútbol.\n\nEspecíficamente, me encargué del diseño y despliegue de la base de datos.': 'An Android application programmed in Java, whose purpose is to perform a complete management of a football match.\n\nSpecifically, I was in charge of the design and deployment of the database.',
    'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones.\n\nConstruida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.': 'A tool that uses artificial intelligence to convert conceptual ideas into functional and detailed application prototypes.\n\nBuilt with Kotlin Multiplatform and Compose Multiplatform, allowing developers and designers to visualize and export their concepts efficiently.',
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
    // Footer
    'Construido Con': 'Built With'
  }
};

// Aplicar traducciones
function applyTranslations() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'es';
  
  console.log('Aplicando traducciones para idioma:', lang);
  
  const t = translations[lang] || translations.es;
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
      console.log(`Traducido: ${key} = ${value}`);
    }
  });
  
  // Actualizar elementos con data-i18n-content (para contenido específico)
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const text = el.getAttribute('data-i18n-content');
    if (ct[text]) {
      el.textContent = ct[text];
      console.log(`Traducido (content): ${text} → ${ct[text]}`);
    }
  });
  
  // Traducir contenido dinámico (idiomas, educación, habilidades)
  document.querySelectorAll('p, li, h4').forEach(el => {
    const text = el.textContent.trim();
    if (ct[text]) {
      el.textContent = ct[text];
      console.log(`Contenido traducido: ${text} → ${ct[text]}`);
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
