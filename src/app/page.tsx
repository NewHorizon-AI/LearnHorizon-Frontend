'use client'

import React, { useState } from 'react'

import NavBar from '@/components/navbar/NavBar'

import IntroSection from '@/components/intro/IntroSection'
import PublicationExplorer from '@/components/explorer/PublicationExplorer'

import Footer from '@/components/footer/Footer'

// Importando datos de prueba
import carouselData from '@/data/carouselData.json'

export default function Home(): React.JSX.Element {
  // Manejar el los datos del carrusel

  const [carousel] = useState(carouselData)

  return (
    <>
      <NavBar />
      <main>
        <IntroSection carousel={carousel} />
        <PublicationExplorer />
        <Footer />
      </main>
    </>
  )
}
