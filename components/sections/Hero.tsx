'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const images = Array.from({ length: 17 }, (_, i) => i + 1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Animation d'entrée
    const tl = gsap.timeline()
    
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=1')
    .from('.hero-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8')
    .from('.hero-cta', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.6')

    // Effet parallaxe sur l'image
    gsap.to('.hero-image', {
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // Rotation automatique des images
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => {
      clearInterval(imageInterval)
    }
  }, [images.length])

  useEffect(() => {
    // Créer des particules animées
    const createParticle = () => {
      if (!particlesRef.current) return
      
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--neon-cyan);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--neon-cyan);
        left: ${Math.random() * 100}%;
        top: 100%;
        animation: particleFloat ${5 + Math.random() * 5}s linear infinite;
        animation-delay: ${Math.random() * 2}s;
        opacity: ${0.3 + Math.random() * 0.7};
      `
      particlesRef.current.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 10000)
    }

    // Créer des particules régulièrement
    const particleInterval = setInterval(createParticle, 300)
    
    // Créer des particules initiales
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100)
    }

    return () => {
      clearInterval(particleInterval)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particules animées */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Ligne de scan futuriste */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
          animate={{
            y: ['0vh', '100vh', '0vh'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Grille futuriste en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Image de fond avec effet holographique */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="hero-image absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            x: mousePos.x,
            y: mousePos.y,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={`/images/lenad/lenad (${images[currentImageIndex]}).jpeg`}
              alt="Lenad Consulting"
              fill
              className="object-cover opacity-20"
              priority
              style={{
                filter: 'blur(40px) brightness(0.5)',
                transform: 'scale(1.2)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-pink-500/20" />
          </div>
        </motion.div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="hero-title font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #00f0ff 0%, #ff00f5 50%, #00ff88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.5))',
            }}
          >
            Tidiane Dioh
          </motion.h1>
          
          <motion.p
            className="hero-subtitle text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-white/90"
            style={{
              textShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            }}
          >
            Fonctionnaire International
          </motion.p>
          
          <motion.p
            className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white/80"
            style={{
              textShadow: '0 0 15px rgba(255, 0, 245, 0.3)',
            }}
          >
            Responsable de programme médias à l'OIF
          </motion.p>
          
          <motion.p
            className="hero-text text-lg md:text-xl lg:text-2xl mb-12 text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Expert reconnu dans le domaine des médias et de la communication dans l'espace francophone.
          </motion.p>
          
          <motion.a
            href="#about"
            className="hero-cta inline-block px-12 py-5 text-lg font-semibold rounded-full relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 245, 0.2))',
              border: '2px solid var(--neon-cyan)',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
              color: 'white',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="relative z-10">Découvrir</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>

      {/* Indicateur de scroll futuriste */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div 
            className="w-8 h-12 border-2 rounded-full flex items-start justify-center p-2"
            style={{
              borderColor: 'var(--neon-cyan)',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                background: 'var(--neon-cyan)',
                boxShadow: '0 0 10px var(--neon-cyan)',
              }}
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
