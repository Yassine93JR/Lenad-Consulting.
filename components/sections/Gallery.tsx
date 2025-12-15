'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const images = Array.from({ length: 17 }, (_, i) => i + 1)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.gallery-item')
      
      items?.forEach((item, index) => {
        gsap.from(item, {
          scale: 0.5,
          opacity: 0,
          rotation: -180,
          duration: 1.2,
          delay: index * 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative py-32 bg-bg-dark overflow-hidden"
      >
        {/* Effet de grille futuriste */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
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
                background: 'linear-gradient(135deg, #00f0ff 0%, #ff00f5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
              }}
            >
              Galerie
            </h2>
            <div 
              className="w-32 h-1 mx-auto"
              style={{
                background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                boxShadow: '0 0 10px var(--neon-cyan)',
              }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((num, index) => (
              <motion.div
                key={num}
                className="gallery-item relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleImageClick(index)}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  perspective: '1000px',
                }}
              >
                {/* Bordure néon */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: '2px solid var(--neon-cyan)',
                    boxShadow: `
                      0 0 20px var(--neon-cyan),
                      inset 0 0 20px var(--neon-cyan)
                    `,
                  }}
                />
                
                {/* Image avec effet holographique */}
                <motion.div
                  className="relative w-full h-full"
                  animate={hoveredIndex === index ? {
                    rotateY: [0, 5, -5, 0],
                    filter: [
                      'hue-rotate(0deg) brightness(1)',
                      'hue-rotate(90deg) brightness(1.2)',
                      'hue-rotate(180deg) brightness(1.2)',
                      'hue-rotate(0deg) brightness(1)',
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                >
                  <Image
                    src={`/images/lenad/lenad (${num}).jpeg`}
                    alt={`Image ${num}`}
                    fill
                    className="object-cover transition-transform duration-700"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                    }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay avec effet de scan */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                    animate={hoveredIndex === index ? {
                      y: ['-100%', '100%'],
                    } : {}}
                    transition={{ duration: 1.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />
                </motion.div>

                {/* Effet de brillance */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(255, 0, 245, 0.3))',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox futuriste */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(10, 14, 39, 0.98) 0%, rgba(5, 8, 16, 0.99) 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Effet de scan */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 240, 255, 0.1) 50%, transparent 100%)',
              }}
              animate={{
                y: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-auto p-4"
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                perspective: '1000px',
              }}
            >
              {/* Bordure néon autour de l'image */}
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  border: '3px solid var(--neon-cyan)',
                  boxShadow: `
                    0 0 30px var(--neon-cyan),
                    inset 0 0 30px var(--neon-cyan)
                  `,
                }}
              />

              <motion.div
                animate={{
                  filter: [
                    'hue-rotate(0deg)',
                    'hue-rotate(90deg)',
                    'hue-rotate(180deg)',
                    'hue-rotate(0deg)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/lenad/lenad (${images[selectedImage]}).jpeg`}
                  alt={`Image ${images[selectedImage]}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh] rounded-lg"
                  priority
                />
              </motion.div>
              
              {/* Boutons de contrôle futuristes */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(0, 240, 255, 0.2)',
                  border: '2px solid var(--neon-cyan)',
                  boxShadow: '0 0 20px var(--neon-cyan)',
                }}
                aria-label="Close"
              >
                ×
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(0, 240, 255, 0.2)',
                  border: '2px solid var(--neon-cyan)',
                  boxShadow: '0 0 20px var(--neon-cyan)',
                }}
                aria-label="Previous"
              >
                ‹
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(0, 240, 255, 0.2)',
                  border: '2px solid var(--neon-cyan)',
                  boxShadow: '0 0 20px var(--neon-cyan)',
                }}
                aria-label="Next"
              >
                ›
              </button>

              {/* Indicateur d'image */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(0, 240, 255, 0.2)',
                  border: '1px solid var(--neon-cyan)',
                  boxShadow: '0 0 10px var(--neon-cyan)',
                }}
              >
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
