export interface EducationItem {
  title: string;
  type: string;
  institution: string;
  year: string;
  logo: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  tech?: string[];
  github?: string;
  website?: string;
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  icon: string;
  website?: string;
  current?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  levelName: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    jobTitle: string;
    author: string;
    siteName: string;
    scrollToTop: string;
    sections: {
      about: string;
      education: string;
      projects: string;
      experience: string;
      skills: string;
      contact: string;
    };
  };
  nav: {
    contact: string;
    about: string;
    education: string;
    projects: string;
    experience: string;
    skills: string;
    sections: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    cta: string;
    pageTitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    profileTitle?: string;
    description: string;
    downloadCV: string;
    status?: {
      title: string;
      value: string;
      available: boolean;
    };
    driverLicense?: {
      title: string;
      value: string;
    };
    continuousLearning?: {
      title: string;
      description: string;
    };
  };
  cv: {
    title: string;
    subtitle: string;
    styleHarvard: string;
    styleDetailed: string;
    spanish: string;
    english: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    phoneValue: string;
    email: string;
    emailValue: string;
    address: string;
    addressValue: string;
    linkedin: string;
    linkedinValue: string;
    github: string;
    githubValue: string;
  };
  education: {
    title: string;
    subtitle: string;
    items: EducationItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    current: string;
    technologies: string;
    viewGallery: string;
    viewGithub: string;
    visitWebsite: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    visitWebsite: string;
    current: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    items: SkillItem[];
  };
  languages: {
    title: string;
    items: string[];
  };
  gallery: {
    swipeDown: string;
    swipeNavigate: string;
    images: Record<string, string>;
  };
  footer: {
    builtWith: string;
    footerRole: string;
    techStack: Array<{
      name: string;
      url: string;
      logo: string;
      logoDark?: string;
    }>;
  };
  accessibility: {
    title: string;
    textSize: string;
    normal: string;
    large: string;
    extraLarge: string;
    hint: string;
  };
  copyMessages: {
    emailCopied: string;
    phoneCopied: string;
    copyEmailAria: string;
    copyPhoneAria: string;
    copyError: string;
    copyFallback: string;
  };
  ariaLabels: {
    goToAbout: string;
    backToHome: string;
    openNavMenu: string;
    toggleTheme: string;
    changeLanguage: string;
    closeGallery: string;
    previousImage: string;
    nextImage: string;
    zoomOut: string;
    zoomReset: string;
    zoomIn: string;
  };
  header: {
    backToHome: string;
    sections: string;
  };
  linkPreviews: {
    linkedin: {
      title: string;
      desc: string;
    };
    github: {
      title: string;
      desc: string;
    };
    artimark: {
      title: string;
      desc: string;
    };
    projectLiveFootball: {
      desc: string;
    };
    projectPrototypeCreator: {
      desc: string;
    };
  };
}
