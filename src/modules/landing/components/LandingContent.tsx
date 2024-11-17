'use client'

import React, { useState } from 'react'

// Importando datos de prueba
import carouselData from '@/data/carouselData.json'

// Importando tipos
import { type IFindArticles, type ICategory } from '@/interfaces/IBackend'
import ManageLanding from './ManageLanding'

export default function Home(): React.JSX.Element {
  const [articles, setArticles] = useState<IFindArticles>({
    page: 1,
    pageSize: 10,
    order: 'descendant',
    articlesArray: []
  })

  // Estados de carga y error para los articleos
  const [loadingArticles, setLoadingArticles] = useState(true)
  const [errorArticles, setErrorArticles] = useState<string | null>(null)

  const [categories, setCategories] = useState<ICategory[]>([])

  // Estados de carga y error para las categorías
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [errorCategories, setErrorCategories] = useState<string | null>(null)

  // Manejar los datos del carrusel
  const [carousel] = useState(carouselData)

  // Estados de carga y error para el carrusel
  const [loadingCarousel, setLoadingCarousel] = useState(false)
  const [errorCarousel, setErrorCarousel] = useState<string | null>(null)

  return (
    <ManageLanding
      carousel={carousel}
      loadingCarousel={loadingCarousel}
      errorCarousel={errorCarousel}
      articles={articles.articlesArray}
      setArticles={setArticles}
      categories={categories}
      loadingArticles={loadingArticles}
      errorArticles={errorArticles}
      loadingCategories={loadingCategories}
      errorCategories={errorCategories}
    />
  )
}
