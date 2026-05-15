export type Language = 'en' | 'pt'

export const translations = {
  en: {
    nav: {
      start: 'Start',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      awards: 'Awards',
      contactInfo: 'Contact Info',
    },
    footer: {
      contactMe: 'Contact me',
    },
  },
  pt: {
    nav: {
      start: 'Início',
      projects: 'Projetos',
      skills: 'Habilidades',
      certifications: 'Certificações',
      awards: 'Premiações',
      contactInfo: 'Contato',
    },
    footer: {
      contactMe: 'Fale comigo',
    },
  },
} as const
