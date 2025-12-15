'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage') as 'fr' | 'en' | null
    if (saved) {
      setLanguage(saved)
    }
  }, [])

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang)
    localStorage.setItem('preferredLanguage', lang)
    // Déclencher un événement pour mettre à jour les traductions
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }))
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'text-accent border-b-2 border-accent'
            : 'text-primary hover:text-accent'
        }`}
      >
        FR
      </button>
      <span className="text-primary/30">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'text-accent border-b-2 border-accent'
            : 'text-primary hover:text-accent'
        }`}
      >
        EN
      </button>
    </div>
  )
}

