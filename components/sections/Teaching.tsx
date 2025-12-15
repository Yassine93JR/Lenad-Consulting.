'use client'

import { motion } from 'framer-motion'

const subjects = [
  'Géopolitique des médias',
  'Systèmes de télévisions',
  'Echanges interculturels, Francophonie et Mondialisation',
  'Histoire des médias',
]

export default function Teaching() {
  return (
    <section id="teaching" className="relative py-32 bg-bg overflow-hidden">
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
            Enseignement Universitaire
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)',
              boxShadow: '0 0 10px var(--neon-green)',
            }}
          />
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Chargé de Cours à l'Université Paris-III Sorbonne-Nouvelle depuis septembre 2008
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="p-8 rounded-lg"
            style={{
              background: 'rgba(20, 24, 41, 0.8)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              className="font-serif text-2xl font-bold mb-8"
              style={{
                color: 'var(--neon-green)',
                textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
              }}
            >
              Domaines d'enseignement
            </h3>
            <ul className="space-y-4">
              {subjects.map((subject, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-text-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span 
                    className="mr-3 text-xl"
                    style={{
                      color: 'var(--neon-green)',
                      textShadow: '0 0 5px var(--neon-green)',
                    }}
                  >
                    ▸
                  </span>
                  <span className="text-lg">{subject}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
