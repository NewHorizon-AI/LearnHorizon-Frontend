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
} from '@/interface/IBackend'

export default function Home(): React.JSX.Element {
  const [models, setModels] = useState<IFindModels>({
    page: 0,
    pageSize: 10,
    order: 'descendant',
    modelsArray: []
  })

  const [categories, setCategories] = useState<ICategory[]>([])

  // Manejar el los datos del carrusel
  const [carousel] = useState(carouselData)

  // Manejar el cambio de página
  useEffect(() => {
    const fetchModels = async () => {
      const response = await fetch(
        `/api/publication?page=${models.page}&pageSize=${models.pageSize}&order=${models.order}`
      )
      const data: IModelCard[] = await response.json()
      setModels((prevModels) => ({
        ...prevModels,
        modelsArray: data
      }))
    }
    fetchModels()
  }, [models.page, models.pageSize, models.order])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/category')
      const data: ICategory[] = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  return (
    <>
      <LandingPage
        carousel={carousel}
        models={models.modelsArray}
        setModels={setModels}
        categories={categories}
      />
    </>
  )
}
