/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useEffect, useCallback, useState } from 'react'

import ViewModel from '@/modules/model/'

import LoadingScreen from '@/components/loading/LoadingScreen'

// Petición para obtener un modelo
import getModelByArticleId from '@/lib/models/getModelByArticleId'

interface ModelHandlerProps {
  articleId: string
}

const ModelHandler: React.FC<ModelHandlerProps> = ({ articleId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true) // Estado de carga
  const [model, setModel] = useState<ArrayBuffer>()

  // Función para obtener el modelo
  const fetchModel = useCallback(async (): Promise<void> => {
    try {
      const response: ArrayBuffer = await getModelByArticleId(articleId)

      setModel(response)
    } catch (error) {
      console.error('No se encontro modelo')
    } finally {
      setIsLoading(false)
    }
  }, [articleId])

  // useEffect para cargar el modelo cuando el componente se monta
  useEffect(() => {
    void fetchModel()
  }, [fetchModel, setModel])

  return (
    <div className="flex-1 aspect-video  h-full">
      {isLoading ? (
        <LoadingScreen
          message="Cargando datos..."
          spinnerSize="lg"
          bgColor="bg-gray-100"
          textColor="text-gray-800"
        />
      ) : (
        // <RenderModel model={model} />
        <ViewModel model={model} />
      )}
    </div>
  )
}

export default ModelHandler
