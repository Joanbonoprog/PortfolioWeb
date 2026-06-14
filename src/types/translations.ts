export interface Translations {
  meta: {
    description: string;
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
    items: Array<{
      title: string;
      type: string;
      institution: string;
      year: string;
      logo: string;
      details: string;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    current: string;
    technologies: string;
    viewGallery: string;
    viewGithub: string;
    visitWebsite: string;
    items: Array<{
      id: string;
      name: string;
      subtitle: string;
      description: string;
      icon: string;
      tech?: string[];
      github?: string;
      website?: string;
      current?: boolean;
    }>;
  };
  experience: {
    title: string;
    subtitle: string;
    visitWebsite: string;
    current: string;
    items: Array<{
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
      icon: string;
      website?: string;
    }>;
  };
  skills: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      level: number;
      levelName: string;
    }>;
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
    techStack: Array<{
      name: string;
      url: string;
      logo: string;
      logoDark?: string;
    }>;
  };
  linkPreviews: {
    linkedin: {
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
