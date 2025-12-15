'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer 
      className="relative py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.95), rgba(5, 8, 16, 0.98))',
        borderTop: '1px solid rgba(0, 240, 255, 0.2)',
      }}
    >
      {/* Effet de grille */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 
              className="font-serif text-lg mb-4"
              style={{
                color: 'var(--neon-cyan)',
                textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
              }}
            >
              Liens Utiles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://lenad-consulting.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-text-light hover:text-cyan-400 transition-colors"
                  style={{
                    textShadow: '0 0 5px rgba(0, 240, 255, 0.3)',
                  }}
                >
                  Lenad Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.francophonie.org/"
                  target="_blank"
                  rel="noopener"
                  className="text-text-light hover:text-cyan-400 transition-colors"
                  style={{
                    textShadow: '0 0 5px rgba(0, 240, 255, 0.3)',
                  }}
                >
                  OIF
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 
              className="font-serif text-lg mb-4"
              style={{
                color: 'var(--neon-pink)',
                textShadow: '0 0 10px rgba(255, 0, 245, 0.5)',
              }}
            >
              Contact
            </h4>
            <p className="text-text-light text-sm">
              Organisation Internationale de la Francophonie (OIF)
            </p>
            <p className="text-text-light text-sm mt-2">
              Université Paris-III Sorbonne-Nouvelle
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 
              className="font-serif text-lg mb-4"
              style={{
                color: 'var(--neon-green)',
                textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
              }}
            >
              Lenad Consulting
            </h4>
            <p className="text-text-light text-sm">
              Conseil en Relations Internationales
            </p>
          </motion.div>
        </div>
        
        <div 
          className="border-t pt-8 text-center"
          style={{
            borderColor: 'rgba(0, 240, 255, 0.2)',
          }}
        >
          <p 
            className="text-sm"
            style={{
              color: 'var(--text-light)',
              opacity: 0.6,
            }}
          >
            © 2024 Tidiane Dioh & Lenad Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
