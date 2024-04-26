/*
  Explicacion:
  - Página de inicio que se muestra al usuario cuando no ha iniciado sesión.
  
  - Muestra un carrusel con imágenes de modelos.
  - Muestra un mensaje de bienvenida.
  - Muestra una sección para explorar los modelos.
  - Muestra el footer.

  - Recibe los datos del carrusel, los modelos y las categorías.
  - Recibe una función para cambiar los modelos.
  - Recibe las categorías.
*/

import React from 'react'

// Importing components
import NavBar from '@/components/navbar/NavBar'
import MainCarousel from '@/components/landingPage/landingContent/carousel/MainCarousel'
import WelcomeSection from '@/components/landingPage/landingContent/WelcomeSection'
import ModelExplorer from '@/components/landingPage/landingContent/ModelExplorer'
import Footer from '@/components/landingPage/landingContent/Footer'

// Importing types
import {
  type IModelCard,
  type IFindModels,
  type ICategory
} from '@/interface/IBackend'

export default function LandingPage({
  carousel,
  models,
  setModels,
  categories
}: {
  carousel: any
  models: IModelCard[]
  setModels: React.Dispatch<React.SetStateAction<IFindModels>>
  categories: ICategory[]
}): React.JSX.Element {
  return (
    <>
      <NavBar />
      <MainCarousel carouselData={carousel} />
      <main className="container">
        <WelcomeSection />
        <ModelExplorer
          models={models}
          setModels={setModels}
          categories={categories}
        />
      </main>
      <Footer />
    </>
  )
}
