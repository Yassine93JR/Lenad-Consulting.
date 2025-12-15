'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const publications = [
  {
    date: '2007',
    title: 'Nouvelles approches des problématiques de communication sur l\'Afrique subsaharienne',
    editor: 'Éditions L\'Harmattan, Paris',
  },
  {
    date: '2007',
    title: 'Touba, voyage au coeur d\'un Islam nègre',
    editor: 'Éditions Alternatives, Paris',
  },
  {
    date: '2009',
    title: 'Histoire de la télévision en Afrique noire francophone, des origines à nos jours',
    editor: 'Éditions Karthala, Paris',
  },
]

export default function Publications() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.publication-card')
      
      cards?.forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
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
      id="publications"
      ref={sectionRef}
      className="relative py-32 bg-bg-light overflow-hidden"
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
              background: 'linear-gradient(135deg, #00f0ff 0%, #ff00f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
            }}
          >
            Publications
          </h2>
          <div 
            className="w-32 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
              boxShadow: '0 0 10px var(--neon-cyan)',
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="publication-card p-8 rounded-lg group cursor-pointer"
              style={{
                background: 'rgba(20, 24, 41, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ 
                x: 10, 
                scale: 1.02,
                borderColor: 'var(--neon-cyan)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
              }}
            >
              <div 
                className="font-bold text-sm mb-3"
                style={{
                  color: 'var(--neon-pink)',
                  textShadow: '0 0 5px var(--neon-pink)',
                }}
              >
                {pub.date}
              </div>
              <h3 
                className="font-serif text-2xl font-bold mb-4"
                style={{
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                }}
              >
                {pub.title}
              </h3>
              <p className="text-text-light">{pub.editor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
