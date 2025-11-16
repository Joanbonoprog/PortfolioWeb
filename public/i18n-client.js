// Sistema de traducciones del lado del cliente
const translations = {
  es: {
    hero: {
      greeting: "",
      title: "Desarrollador de Software + IA Specialist",
      cta: "Ver Proyectos y Experiencia"
    },
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      contact: "Contacto"
    },
    about: {
      title: "Sobre Mí",
      description: "Soy una persona recién titulada en desarrollo de APPS, con conocimientos de diversos lenguajes de programación, siendo el principal JAVA."
    },
    education: {
      title: "Formación Académica"
    },
    languages: {
      title: "Idiomas"
    },
    skills: {
      title: "Habilidades Técnicas"
    },
    contact: {
      title: "Contacto",
      phone: "Teléfono",
      email: "Email",
      address: "Dirección",
      linkedin: "LinkedIn"
    },
    phone: {
      title: "Mis Proyectos y Experiencia",
      subtitle: "Toca las apps para ver más detalles"
    }
  },
  en: {
    hero: {
      greeting: "",
      title: "Software Developer + AI Specialist",
      cta: "View Projects & Experience"
    },
    nav: {
      about: "About Me",
      skills: "Skills",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      description: "I am a recent graduate in APP development, with knowledge of various programming languages, the main one being JAVA."
    },
    education: {
      title: "Academic Background"
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
      email: "Email",
      address: "Address",
      linkedin: "LinkedIn"
    },
    phone: {
      title: "My Projects & Experience",
      subtitle: "Tap the apps to see more details"
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
    // Proyectos
    'Proyecto Final de Grado': 'Proyecto Final de Grado',
    'Proyecto Final de Master': 'Proyecto Final de Master',
    'Una aplicación de Android programado en Java, cuya finalidad es destinada a realizar una gestión completa de un partido de futbol. Esencialmente, me encargue del Backend, además del diseño y despliegue de la base de datos.': 'Una aplicación de Android programado en Java, cuya finalidad es destinada a realizar una gestión completa de un partido de futbol. Esencialmente, me encargue del Backend, además del diseño y despliegue de la base de datos.',
    'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.': 'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.',
    // Experiencias
    'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.': 'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.',
    'Participación en el Diseño y Estructura de la Web, Encargado de la Introducción y Prueba del Sistema de Personalizado de Productos, Participación en el Mantenimiento y Escalabilidad de la Pagina Web, Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop, Apoyo en el Posicionamiento de la Web (SEO).': 'Participación en el Diseño y Estructura de la Web, Encargado de la Introducción y Prueba del Sistema de Personalizado de Productos, Participación en el Mantenimiento y Escalabilidad de la Pagina Web, Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop, Apoyo en el Posicionamiento de la Web (SEO).',
    // Idiomas
    'Castellano (Nativo)': 'Castellano (Nativo)',
    'Valenciano/Catalán (Nativo)': 'Valenciano/Catalán (Nativo)',
    'Inglés (Básico Profesional)': 'Inglés (Básico Profesional)',
    // Educación
    'Especialista en IA Generativa': 'Especialista en IA Generativa',
    'Master - 480h': 'Master - 480h',
    'Desarrollador de Aplicaciones Multiplataforma': 'Desarrollador de Aplicaciones Multiplataforma',
    'Grado Superior': 'Grado Superior',
    // Habilidades
    'Conocimientos en Entorno Java': 'Conocimientos en Entorno Java',
    'Conocimientos básicos en C#': 'Conocimientos básicos en C#',
    'Desarrollo de Bases de Datos en mySQL': 'Desarrollo de Bases de Datos en mySQL',
    'Conocimientos básicos de JavaScript y PHP': 'Conocimientos básicos de JavaScript y PHP',
    'Conocimientos en desarrollo Android': 'Conocimientos en desarrollo Android',
    'Conocimientos básicos en el uso de motores gráficos como Unity': 'Conocimientos básicos en el uso de motores gráficos como Unity',
    'Conocimientos en herramientas de automatización como n8n o Make': 'Conocimientos en herramientas de automatización como n8n o Make',
    'Conocimientos en IAs Generativas y su implementación en Aplicaciones': 'Conocimientos en IAs Generativas y su implementación en Aplicaciones'
  },
  en: {
    // Navigation
    'Volver al Inicio': 'Back to Home',
    // Modal labels
    'Descripción': 'Description',
    'Tecnologías': 'Technologies',
    'Período': 'Period',
    'Empresa': 'Company',
    'Ver en GitHub': 'View on GitHub',
    // Projects
    'Proyecto Final de Grado': 'Final Degree Project',
    'Proyecto Final de Master': 'Final Master Project',
    'Una aplicación de Android programado en Java, cuya finalidad es destinada a realizar una gestión completa de un partido de futbol. Esencialmente, me encargue del Backend, además del diseño y despliegue de la base de datos.': 'An Android application programmed in Java, whose purpose is to perform a complete management of a football match. Essentially, I was in charge of the Backend, as well as the design and deployment of the database.',
    'Una herramienta que utiliza inteligencia artificial para convertir ideas conceptuales en prototipos funcionales y detallados de aplicaciones. Construida con Kotlin Multiplatform y Compose Multiplatform, permitiendo a desarrolladores y diseñadores visualizar y exportar sus conceptos de manera eficiente.': 'A tool that uses artificial intelligence to convert conceptual ideas into functional and detailed application prototypes. Built with Kotlin Multiplatform and Compose Multiplatform, allowing developers and designers to visualize and export their concepts efficiently.',
    // Experiences
    'Gestión y diseño de redes sociales, Venta de Productos, Diseño de carteles, flyers, etc., Organización de Eventos.': 'Social media management and design, Product Sales, Design of posters, flyers, etc., Event Organization.',
    'Participación en el Diseño y Estructura de la Web, Encargado de la Introducción y Prueba del Sistema de Personalizado de Productos, Participación en el Mantenimiento y Escalabilidad de la Pagina Web, Encargado de Pruebas y Mantenimiento de la Pasarela de Pagos de la eShop, Apoyo en el Posicionamiento de la Web (SEO).': 'Participation in Web Design and Structure, In charge of the Introduction and Testing of the Custom Product System, Participation in the Maintenance and Scalability of the Website, In charge of Testing and Maintenance of the eShop Payment Gateway, Support in Web Positioning (SEO).',
    // Languages
    'Castellano (Nativo)': 'Spanish (Native)',
    'Valenciano/Catalán (Nativo)': 'Valencian/Catalan (Native)',
    'Inglés (Básico Profesional)': 'English (Professional Basic)',
    // Education
    'Especialista en IA Generativa': 'Generative AI Specialist',
    'Master - 480h': 'Master - 480h',
    'Desarrollador de Aplicaciones Multiplataforma': 'Multiplatform Application Developer',
    'Grado Superior': 'Higher Degree',
    // Skills
    'Conocimientos en Entorno Java': 'Knowledge in Java Environment',
    'Conocimientos básicos en C#': 'Basic knowledge in C#',
    'Desarrollo de Bases de Datos en mySQL': 'Database Development in mySQL',
    'Conocimientos básicos de JavaScript y PHP': 'Basic knowledge of JavaScript and PHP',
    'Conocimientos en desarrollo Android': 'Knowledge in Android development',
    'Conocimientos básicos en el uso de motores gráficos como Unity': 'Basic knowledge in the use of graphic engines like Unity',
    'Conocimientos en herramientas de automatización como n8n o Make': 'Knowledge in automation tools like n8n or Make',
    'Conocimientos en IAs Generativas y su implementación en Aplicaciones': 'Knowledge in Generative AIs and their implementation in Applications'
  }
};

// Aplicar traducciones
function applyTranslations() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'es';
  
  console.log('🌍 Aplicando traducciones para idioma:', lang);
  
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
      console.log(`✅ Traducido: ${key} = ${value}`);
    }
  });
  
  // Actualizar elementos con data-i18n-content (para contenido específico)
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const text = el.getAttribute('data-i18n-content');
    if (ct[text]) {
      el.textContent = ct[text];
      console.log(`✅ Traducido (content): ${text} → ${ct[text]}`);
    }
  });
  
  // Traducir contenido dinámico (idiomas, educación, habilidades)
  document.querySelectorAll('p, li, h4').forEach(el => {
    const text = el.textContent.trim();
    if (ct[text]) {
      el.textContent = ct[text];
      console.log(`✅ Contenido traducido: ${text} → ${ct[text]}`);
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
