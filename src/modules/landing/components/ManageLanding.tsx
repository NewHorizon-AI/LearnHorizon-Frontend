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

// import MainCarousel from '@/components/landingPage/landingContent/carousel/MainCarousel'
// import WelcomeSection from '@/components/landingPage/landingContent/WelcomeSection'
// import ArticleExplorer from '@/components/landingPage/landingContent/ArticleExplorer'

import MainCarousel from './Carousel/MainCarousel'
import WelcomeSection from './Welcome/WelcomeSection'
import ArticleList from './Article-List/ArticleList'

// Importing types
import {
  type IArticleCard,
  type IFindArticles,
  type ICategory
} from '@/interfaces/IBackend'

function ManageLanding({
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
    <div>
      <MainCarousel
        carouselData={carousel}
        loadingCarousel={loadingCarousel}
        errorCarousel={errorCarousel}
      />

      <WelcomeSection />
      <ArticleList
        articles={articles}
        setArticles={setArticles}
        categories={categories}
        loadingArticles={loadingArticles}
        errorArticles={errorArticles}
        loadingCategories={loadingCategories}
        errorCategories={errorCategories}
      />
    </div>
  )
}

export default ManageLanding
