'use client'

import React, { useEffect, useState } from 'react'

import ModelRender from './render/ModelRender'
import ModelTransformation from './transformations/ModelTransformation'
import UploadModel from './upload/UploadModel'

// * Importar el estado global del modelo
import useModelStore from '@/contexts/article/model/index'

const ModelContent: React.FC = () => {
  const { model, setModel } = useModelStore()
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await fetch('/api/model') // Ajusta la URL según sea necesario
        if (!response.ok) throw new Error('Failed to fetch model')
        const data = await response.json()
        if (data.success) {
          setModel(data.model) // Asumiendo que la API retorna un objeto con una propiedad model
          setIsModelLoaded(true)
        } else {
          setModel(null)
          setIsModelLoaded(false)
        }
      } catch (error) {
        console.error('Error fetching model:', error)
        setModel(null)
        setIsModelLoaded(false)
      }
    }

    fetchModel()
  }, [setModel])

  return (
    <section className="flex flex-row justify-between items-stretch w-full">
      {/* Renderizar UploadModel o ModelRender dependiendo de isModelLoaded */}
      {isModelLoaded ? (
        <div className="flex-1 aspect-video">
          <ModelRender />
        </div>
      ) : (
        <div className="flex-1 aspect-video">
          <UploadModel />
        </div>
      )}
      {/* ModelTransformation se mostrará solo en pantallas grandes y ocupará un espacio fijo */}
      <div className="hidden lg:flex lg:w-1/3 p-4">
        <ModelTransformation />
      </div>
    </section>
  )
}

export default ModelContent
