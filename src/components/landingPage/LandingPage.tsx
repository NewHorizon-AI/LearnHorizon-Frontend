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
import ArticleExplorer from '@/components/landingPage/landingContent/ArticleExplorer'
import Footer from '@/components/landingPage/landingContent/Footer'

// Importing types
import {
  type IArticleCard,
  type IFindArticles,
  type ICategory
} from '@/interfaces/IBackend'

export default function LandingPage({
  carousel,
  loadingCarousel,
  errorCarousel,
  articles,
  setArticles,
  categories,
  loadingArticles,
  errorArticles,
  loadingCategories,
  errorCategories
}: {
  carousel: any
  loadingCarousel: boolean
  errorCarousel: string | null
  articles: IArticleCard[]
  setArticles: React.Dispatch<React.SetStateAction<IFindArticles>>
  categories: ICategory[]
  loadingArticles: boolean
  errorArticles: string | null
  loadingCategories: boolean
  errorCategories: string | null
}): React.JSX.Element {
  return (
    <>
      <NavBar />
      <MainCarousel
        carouselData={carousel}
        loadingCarousel={loadingCarousel}
        errorCarousel={errorCarousel}
      />
      <main className="container">
        <WelcomeSection />
        <ArticleExplorer
          articles={articles}
          setArticles={setArticles}
          categories={categories}
          loadingArticles={loadingArticles}
          errorArticles={errorArticles}
          loadingCategories={loadingCategories}
          errorCategories={errorCategories}
        />
      </main>
      <Footer />
    </>
  )
}
