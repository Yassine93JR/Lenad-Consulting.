'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Conseil en Relations Internationales',
    items: [
      'Analyse géopolitique',
      'Stratégies de relations internationales',
      'Accompagnement dans les projets internationaux',
    ],
  },
  {
    title: 'Conseil en Médias et Communication',
    items: [
      'Développement de stratégies médias',
      'Conseil en communication institutionnelle',
      'Formation des professionnels des médias',
    ],
  },
  {
    title: 'Expertise Francophonie',
    items: [
      'Conseil sur les enjeux de la francophonie',
      'Accompagnement de projets dans l\'espace francophone',
      'Stratégies de développement',
    ],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.service-card')
      
      cards?.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotationX: -90,
          duration: 1.2,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-bg-light overflow-hidden"
    >
      {/* Effet de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 245, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 245, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              background: 'linear-gradient(135deg, #ff00f5 0%, #00f0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 0, 245, 0.5))',
            }}
          >
            Lenad Consulting
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-pink), transparent)',
              boxShadow: '0 0 10px var(--neon-pink)',
            }}
          />
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Cabinet de conseil en Relations Internationales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card relative p-8 rounded-lg group cursor-pointer"
              style={{
                background: 'rgba(20, 24, 41, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                borderColor: 'var(--neon-cyan)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Effet de brillance au survol */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 245, 0.1))',
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <h3 
                  className="font-serif text-2xl font-bold mb-6"
                  style={{
                    color: 'var(--neon-cyan)',
                    textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                  }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-light flex items-start"
                    >
                      <span 
                        className="mr-3 mt-1"
                        style={{
                          color: 'var(--neon-cyan)',
                          textShadow: '0 0 5px var(--neon-cyan)',
                        }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
