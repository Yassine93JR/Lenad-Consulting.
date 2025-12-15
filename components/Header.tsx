'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { href: '#home', label: 'Accueil', en: 'Home' },
  { href: '#about', label: 'À propos', en: 'About' },
  { href: '#gallery', label: 'Galerie', en: 'Gallery' },
  { href: '#contact', label: 'Contact', en: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(`#${current}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.2)' : 'none',
        boxShadow: isScrolled ? '0 0 20px rgba(0, 240, 255, 0.1)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="relative z-50"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Lenad Consulting"
                width={120}
                height={60}
                className="h-12 w-auto"
                priority
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))',
                }}
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href
                    ? 'text-cyan-400'
                    : 'text-text-light hover:text-cyan-400'
                }`}
                style={{
                  textShadow: activeSection === item.href ? '0 0 10px rgba(0, 240, 255, 0.5)' : 'none',
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{
                      background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                      boxShadow: '0 0 10px var(--neon-cyan)',
                    }}
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5"
              style={{
                background: 'var(--neon-cyan)',
                boxShadow: '0 0 5px var(--neon-cyan)',
              }}
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
            />
            <motion.span
              className="block w-6 h-0.5"
              style={{
                background: 'var(--neon-cyan)',
                boxShadow: '0 0 5px var(--neon-cyan)',
              }}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-6 h-0.5"
              style={{
                background: 'var(--neon-cyan)',
                boxShadow: '0 0 5px var(--neon-cyan)',
              }}
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: 'rgba(10, 14, 39, 0.98)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 pt-24 pb-8">
              <motion.ul
                className="flex flex-col gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="text-2xl font-serif transition-colors"
                      style={{
                        color: 'var(--neon-cyan)',
                        textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + navItems.length * 0.05 }}
                >
                  <LanguageSwitcher />
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
