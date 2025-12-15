// Système de traductions pour le site

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      career: 'Parcours',
      services: 'Services',
      publications: 'Publications',
      teaching: 'Enseignement',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    hero: {
      title: 'Tidiane Dioh',
      subtitle: 'Fonctionnaire international, Responsable de programme médias à l\'OIF',
      text: 'Expert reconnu dans le domaine des médias et de la communication dans l\'espace francophone.',
      cta: 'Découvrir',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      career: 'Career',
      services: 'Services',
      publications: 'Publications',
      teaching: 'Teaching',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Tidiane Dioh',
      subtitle: 'International Civil Servant, Media Programme Manager at the OIF',
      text: 'Recognized expert in media and communication in the French-speaking world.',
      cta: 'Discover',
    },
  },
}

export type Language = 'fr' | 'en'

export function getTranslation(key: string, lang: Language = 'fr'): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

