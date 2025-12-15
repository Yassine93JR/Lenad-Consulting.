'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="relative">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </PageTransition>
  )
}

