'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('.reveal-item')
      
      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-bg overflow-hidden"
    >
      {/* Effet de fond futuriste */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center reveal-item"
            style={{
              background: 'linear-gradient(135deg, #00f0ff 0%, #ff00f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
            }}
          >
            À Propos
          </h2>
          
          <div 
            className="w-32 h-1 mx-auto mb-16 reveal-item"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
              boxShadow: '0 0 10px var(--neon-cyan)',
            }}
          />
          
          <div className="space-y-8 text-lg md:text-xl text-text-light leading-relaxed">
            <motion.p 
              className="reveal-item"
              style={{
                textShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
              }}
            >
              Tidiane DIOH est Fonctionnaire international, Responsable de programme médias à l'Organisation Internationale de la Francophonie (OIF) depuis mars 2004.
            </motion.p>
            
            <motion.p 
              className="reveal-item"
              style={{
                textShadow: '0 0 10px rgba(255, 0, 245, 0.3)',
              }}
            >
              Il est considéré aujourd'hui, par nombre d'observateurs, comme l'un des meilleurs spécialistes des médias dans le monde francophone. Le Programme médias qu'il dirige au sein de l'OIF couvre prioritairement les pays d'Afrique, des Caraïbes, d'Asie et d'Europe de l'Est.
            </motion.p>
            
            <motion.p 
              className="reveal-item"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
              }}
            >
              Tidiane Dioh est un expert reconnu dans le domaine des médias et de la communication dans l'espace francophone. Son parcours combine une solide formation académique, une riche expérience journalistique, une expertise en tant que fonctionnaire international et une activité d'enseignement universitaire.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
