/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */
'use client'

import React, { useState, useEffect } from 'react'
import { ModelsDisplay } from '@/components/ui/modelsDisplay'
import { useRouter } from 'next/navigation'

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
  

export default function ShowCategories(): React.JSX.Element {
    const [models, setModels] = useState<IFindModels>({
      page: 1,
      pageSize: 10,
      order: 'descendant',
      modelsArray: []
    })

  const [categories, setCategories] = useState<ICategory[]>([])

  // Estados de carga y error para los modelos
  const [loadingModels, setLoadingModels] = useState(true)
  const [errorModels, setErrorModels] = useState<string | null>(null)

  // Estados de carga y error para las categorías
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [errorCategories, setErrorCategories] = useState<string | null>(null)

  // Estado de carga y error para el carrusel
  const [carousel] = useState(carouselData)
  const [loadingCarousel, setLoadingCarousel] = useState(false)
  const [errorCarousel, setErrorCarousel] = useState<string | null>(null)


  useEffect(() => {
    const fetchModels = async () => {
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
        console.error(error)
        setErrorModels(error.message)
      } finally {
        setLoadingModels(false)
      }
    }
    void fetchModels()
  }, [models.page, models.pageSize, models.order])

  useEffect(() => {
    const fetchCategories = async () => {
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
        console.error(error)
        setErrorCategories(error.message)
      } finally {
        setLoadingCategories(false)
      }
    }

    void fetchCategories()
  }, [])

  if (loadingModels || loadingCategories) {
    return <div>Cargando...</div>
  }

  if (errorModels != null) {
    return <div>Error cargando modelos: {errorModels}</div>
  }

  if (errorCategories != null) {
    return <div>Error cargando categorías: {errorCategories}</div>
  }

  return (
    <div>
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
      <h1>Categorías</h1>
      {categories.map(category => (
        <div key={category._id}>
          <h2>{category.title}</h2>
        </div>
      ))}
    </div>
  )
}
