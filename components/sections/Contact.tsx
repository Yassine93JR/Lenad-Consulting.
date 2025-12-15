'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(3, 'Le sujet doit contenir au moins 3 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      reset()
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-bg overflow-hidden">
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
              background: 'linear-gradient(135deg, #00f0ff 0%, #00ff88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
            }}
          >
            Contact
          </h2>
          <div 
            className="w-32 h-1 mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
              boxShadow: '0 0 10px var(--neon-cyan)',
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-lg"
              style={{
                background: 'rgba(20, 24, 41, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 
                className="font-serif text-xl font-bold mb-4"
                style={{
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                }}
              >
                Organisation Internationale de la Francophonie (OIF)
              </h3>
              <p className="text-text-light">Responsable de programme médias</p>
            </div>

            <div className="p-6 rounded-lg"
              style={{
                background: 'rgba(20, 24, 41, 0.8)',
                border: '1px solid rgba(255, 0, 245, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 
                className="font-serif text-xl font-bold mb-4"
                style={{
                  color: 'var(--neon-pink)',
                  textShadow: '0 0 10px rgba(255, 0, 245, 0.5)',
                }}
              >
                Lenad Consulting
              </h3>
              <p className="text-text-light mb-2">Fondateur : Tidiane Dioh</p>
              <a
                href="https://lenad-consulting.com/"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
                style={{
                  color: 'var(--neon-cyan)',
                  textShadow: '0 0 5px var(--neon-cyan)',
                }}
              >
                https://lenad-consulting.com/
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-lg"
            style={{
              background: 'rgba(20, 24, 41, 0.8)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--neon-cyan)' }}>
                  Nom
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                  style={{
                    background: 'rgba(10, 14, 39, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: 'var(--text-light)',
                  }}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--neon-cyan)' }}>
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                  style={{
                    background: 'rgba(10, 14, 39, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: 'var(--text-light)',
                  }}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--neon-cyan)' }}>
                  Sujet
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                  style={{
                    background: 'rgba(10, 14, 39, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: 'var(--text-light)',
                  }}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--neon-cyan)' }}>
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none resize-none transition-all"
                  style={{
                    background: 'rgba(10, 14, 39, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: 'var(--text-light)',
                  }}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 245, 0.2))',
                  border: '2px solid var(--neon-cyan)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                >
                  Message envoyé avec succès !
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  Une erreur est survenue. Veuillez réessayer.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
