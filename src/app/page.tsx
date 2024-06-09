/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
Explicación:
  - Este archivo es el componente principal de la página principal.
  - Este componente se encarga de manejar el estado de los modelos y las categorías.
  - Se encarga de hacer las peticiones al servidor para obtener los datos de los modelos y las categorías.
  - Se encarga de renderizar el componente LandingPage.
  - Se encarga de pasarle los datos de los modelos, categorías y carrusel al componente LandingPage.
  - Se encarga de manejar el cambio de página de los modelos.
  - Se encarga de manejar el cambio de orden de los modelos.
*/

'use client'

import React, { useState, useEffect } from 'react'

// Importando componentes
import LandingPage from '@/components/landingPage/LandingPage'

// Importando datos de prueba
import carouselData from '@/data/carouselData.json'

// Importando tipos
import {
  type IFindModels,
  type IModelCard,
  type ICategory
} from '@/interfaces/IBackend'

export default function Home(): React.JSX.Element {
  const [models, setModels] = useState<IFindModels>({
    page: 1,
    pageSize: 10,
    order: 'descendant',
    modelsArray: []
  })

  // Estados de carga y error para los modelos
  const [loadingModels, setLoadingModels] = useState(true)
  const [errorModels, setErrorModels] = useState<string | null>(null)

  const [categories, setCategories] = useState<ICategory[]>([])

  // Estados de carga y error para las categorías
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [errorCategories, setErrorCategories] = useState<string | null>(null)

  // Manejar los datos del carrusel
  const [carousel] = useState(carouselData)

  // Estados de carga y error para el carrusel
  const [loadingCarousel, setLoadingCarousel] = useState(false)
  const [errorCarousel, setErrorCarousel] = useState<string | null>(null)

  // Fetch models when page, pageSize, or order changes
  useEffect(() => {
    const fetchModels = async (): Promise<void> => {
      setLoadingModels(true)
      setErrorModels(null)
      try {
        const response = await fetch(
          `/api/model?page=${models.page}&pageSize=${models.pageSize}&order=${models.order}`
        )
        if (!response.ok) {
          throw new Error('Error fetching models')
        }
        const data: IModelCard[] = await response.json()
        setModels((prevModels: any) => ({
          ...prevModels,
          modelsArray: data
        }))
      } catch (error: any) {
        if (error instanceof Error) {
          console.error(error)
          setErrorModels(error.message)
        } else {
          console.error('Error desconocido')
          setErrorModels('Error desconocido')
        }
      } finally {
        setLoadingModels(false)
      }
    }
    void fetchModels()
  }, [models.page, models.pageSize, models.order])

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
    <LandingPage
      carousel={carousel}
      loadingCarousel={loadingCarousel}
      errorCarousel={errorCarousel}
      models={models.modelsArray}
      setModels={setModels}
      categories={categories}
      loadingModels={loadingModels}
      errorModels={errorModels}
      loadingCategories={loadingCategories}
      errorCategories={errorCategories}
    />
  )
}
