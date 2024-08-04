/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
Explicación:
  - Este archivo es el componente principal de la página principal.
  - Este componente se encarga de manejar el estado de los articleos y las categorías.
  - Se encarga de hacer las peticiones al servidor para obtener los datos de los articleos y las categorías.
  - Se encarga de renderizar el componente LandingPage.
  - Se encarga de pasarle los datos de los articleos, categorías y carrusel al componente LandingPage.
  - Se encarga de manejar el cambio de página de los articleos.
  - Se encarga de manejar el cambio de orden de los articleos.
*/

'use client'

import React, { useState, useEffect } from 'react'

// Importando componentes
import LandingPage from '@/modules/Landing-Page/LandingPage'

import MainLayout from '@/layouts/Main-Layout/MainLayout'

// Importando datos de prueba
import carouselData from '@/data/carouselData.json'

// Importando tipos
import {
  type IFindArticles,
  type IArticleCard,
  type ICategory
} from '@/interfaces/IBackend'
import ManageLanding from './components/ManageLanding'

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

  // Fetch articles when page, pageSize, or order changes
  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      setLoadingArticles(true)
      setErrorArticles(null)
      try {
        const response = await fetch(
          `/api/article?page=${articles.page}&pageSize=${articles.pageSize}&order=${articles.order}`
        )
        if (!response.ok) {
          throw new Error('Error fetching articles')
        }
        const data: IArticleCard[] = await response.json()
        setArticles((prevArticles: any) => ({
          ...prevArticles,
          articlesArray: data
        }))
      } catch (error: any) {
        if (error instanceof Error) {
          console.error(error)
          setErrorArticles(error.message)
        } else {
          console.error('Error desconocido')
          setErrorArticles('Error desconocido')
        }
      } finally {
        setLoadingArticles(false)
      }
    }
    void fetchArticles()
  }, [articles.page, articles.pageSize, articles.order])

  // Fetch categories on initial render
  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setLoadingCategories(true)
      setErrorCategories(null)
      try {
        const response = await fetch('/api/category')
        if (!response.ok) {
          throw new Error('Error fetching categories')
        }
        const data: ICategory[] = await response.json()
        setCategories(data)
      } catch (error: any) {
        if (error instanceof Error) {
          console.error(error)
          setErrorCategories(error.message)
        } else {
          console.error('Error desconocido')
          setErrorCategories('Error desconocido')
        }
      } finally {
        setLoadingCategories(false)
      }
    }

    void fetchCategories()
  }, [])

  return (
    <MainLayout>
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
    </MainLayout>
  )
}
