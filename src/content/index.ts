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
    main: {
      greeting: "Hi, I'm",
      role: 'Full-stack Developer',
      location: "Santa Bárbara d'Oeste, SP, Brazil",
      description:
        'Full-stack Developer with [YEARS_OF_EXPERIENCE]+ years of experience in AI, Process Automation, and QA. Built Typeassist at Kyndryl — a Python tool that cut average handling time by 40% across 75+ daily tickets. Mentored 200+ students and guided 30+ AI projects at Samsung Innovation Campus. Currently at ATRIA Corp working with LLM testing, n8n, and AI-driven pipelines under agile methodologies.',
      contact: 'Get in touch',
      downloadCV: 'Download resume',
    },
    skills: {
      programmingLanguages: 'Programming Languages',
      techAndFrameworks: 'Technologies & Frameworks',
      devopsAndTooling: 'DevOps & Tooling',
      languages: 'Languages',
      level: 'Level',
      levels: {
        fluent: 'Fluent',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        beginner: 'Beginner',
        basic: 'Basic',
      },
      languageNames: {
        portuguese: 'Portuguese',
        english: 'English',
        italian: 'Italian',
        spanish: 'Spanish',
      },
    },
    certifications: {
      count: 'Certifications',
      lastCertification: 'Last Certification',
      issuedOn: 'Issued on',
      expiresOn: 'Expires on',
      showCredential: 'Show Credential',
      dateLocale: 'en-US',
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
    main: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Full-stack',
      location: "Santa Bárbara d'Oeste, SP, Brasil",
      description:
        'Desenvolvedor Full-stack com mais de [YEARS_OF_EXPERIENCE] anos de experiência com IA, Automação de processos e QA. Desenvolvi o Typeassist na Kyndryl — uma ferramenta em Python que reduziu o tempo médio de atendimento em 40% para mais de 75 tickets diários. Fui mentor de mais de 200 estudantes, orientando mais de 30 projetos que usaram IA para resolver problemas do mundo real no Samsung Innovation Campus. Atualmente, estou na ATRIA Corp trabalhando com testes de LLM, n8n e pipelines baseadas em IA usando metodologias ágeis.',
      contact: 'Entrar em contato',
      downloadCV: 'Baixar o currículo',
    },
    skills: {
      programmingLanguages: 'Linguagens de Programação',
      techAndFrameworks: 'Tecnologias & Frameworks',
      devopsAndTooling: 'DevOps & Ferramentas',
      languages: 'Idiomas',
      level: 'Nível',
      levels: {
        fluent: 'Fluente',
        advanced: 'Avançado',
        intermediate: 'Intermediário',
        beginner: 'Iniciante',
        basic: 'Básico',
      },
      languageNames: {
        portuguese: 'Português',
        english: 'Inglês',
        italian: 'Italiano',
        spanish: 'Espanhol',
      },
    },
    certifications: {
      count: 'Certificações',
      lastCertification: 'Última Certificação',
      issuedOn: 'Emitido em',
      expiresOn: 'Expira em',
      showCredential: 'Ver Credencial',
      dateLocale: 'pt-BR',
    },
  },
} as const
