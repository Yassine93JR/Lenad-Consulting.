'use client'

import { motion } from 'framer-motion'

const expertiseItems = [
  'Médias et communication',
  'Géopolitique des médias',
  'Systèmes de télévisions',
  'Francophonie et mondialisation',
  'Relations internationales',
  'Echanges interculturels',
  'Histoire des médias en Afrique',
  'Presse francophone',
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-32 bg-bg-light overflow-hidden">
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
              background: 'linear-gradient(135deg, #ff00f5 0%, #00f0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 0, 245, 0.5))',
            }}
          >
            Expertise
          </h2>
          <div 
            className="w-32 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-pink), transparent)',
              boxShadow: '0 0 10px var(--neon-pink)',
            }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg text-center cursor-pointer group"
              style={{
                background: 'rgba(20, 24, 41, 0.8)',
                border: '1px solid rgba(255, 0, 245, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 2,
                borderColor: 'var(--neon-pink)',
                boxShadow: '0 0 20px rgba(255, 0, 245, 0.5)',
              }}
            >
              <p 
                className="font-medium text-sm group-hover:text-white transition-colors"
                style={{
                  color: 'var(--text-light)',
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
