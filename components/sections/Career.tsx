'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const careerItems = [
  {
    period: 'Formation Universitaire',
    title: 'Université de Liège, Belgique',
    description: 'Diplômes en Philosophie morale, Economie et Gestion, Relations Politiques internationales, Sciences de l\'Information de la Communication. Thèse de doctorat à la Sorbonne nouvelle à Paris.',
  },
  {
    period: '1994 - 2000',
    title: 'Journaliste',
    description: 'Journaliste à Liège au sein de la rédaction du mensuel belge francophone C4. Rejoint Paris en 2000, journaliste au sein du groupe Jeune Afrique puis à TV5 Monde.',
  },
  {
    period: 'Depuis mars 2004',
    title: 'Fonctionnaire International',
    description: 'Responsable de programme médias à l\'Organisation Internationale de la Francophonie (OIF). Administration du Fonds d\'appui à la presse francophone du Sud.',
  },
  {
    period: 'Depuis septembre 2008',
    title: 'Enseignant Universitaire',
    description: 'Chargé de Cours à l\'Université Paris-III Sorbonne-Nouvelle. Enseignements en Géopolitique des médias, Systèmes de télévisions, Echanges interculturels.',
  },
  {
    period: 'Consultant',
    title: 'Lenad Consulting',
    description: 'Fondateur de Lenad Consulting, cabinet de conseil en Relations Internationales, communication, médias et géopolitique.',
  },
]

export default function Career() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (timelineRef.current) {
        gsap.to(timelineRef.current, {
          height: '100%',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        })
      }

      const items = sectionRef.current?.querySelectorAll('.career-item')
      items?.forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="career"
      ref={sectionRef}
      className="relative py-32 bg-bg overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ff88 0%, #00f0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))',
            }}
          >
            Parcours Professionnel
          </h2>
          <div 
            className="w-32 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)',
              boxShadow: '0 0 10px var(--neon-green)',
            }}
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline verticale futuriste */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                background: 'linear-gradient(180deg, var(--neon-cyan), var(--neon-pink))',
                boxShadow: '0 0 10px var(--neon-cyan)',
                height: '0%',
              }}
              ref={timelineRef}
            />
          </div>

          <div className="space-y-16">
            {careerItems.map((item, index) => (
              <div
                key={index}
                className="career-item relative flex items-start gap-8"
              >
                {/* Point sur la timeline */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full transform md:-translate-x-1/2 z-10"
                  style={{
                    background: 'radial-gradient(circle, var(--neon-cyan), var(--neon-pink))',
                    boxShadow: '0 0 20px var(--neon-cyan)',
                  }}
                  whileHover={{ scale: 1.5 }}
                />
                
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                  }`}
                >
                  <motion.div
                    className="p-6 rounded-lg"
                    style={{
                      background: 'rgba(20, 24, 41, 0.8)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: 'var(--neon-cyan)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                    }}
                  >
                    <div 
                      className="font-bold text-sm mb-2"
                      style={{
                        color: 'var(--neon-cyan)',
                        textShadow: '0 0 5px var(--neon-cyan)',
                      }}
                    >
                      {item.period}
                    </div>
                    <h3 
                      className="font-serif text-xl font-bold mb-3"
                      style={{
                        color: 'var(--neon-green)',
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
