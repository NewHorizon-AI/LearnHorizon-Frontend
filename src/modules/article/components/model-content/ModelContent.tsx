/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useEffect, useCallback, useState } from 'react'

import { ModelViewModule } from '@/modules/model/'

import LoadingScreen from '@/components/loading/LoadingScreen'

// Petición para obtener un modelo
import getModelByArticleId from '@/lib/models/getModelByArticleId'

interface ModelHandlerProps {
  articleId: string
  className?: string
}

const ModelHandler: React.FC<ModelHandlerProps> = (props) => {
  const { articleId, className } = props

  const [isLoading, setIsLoading] = useState<boolean>(true)
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
        <ModelViewModule model={model} viewMode="edit" />
      )}
    </div>
  )
}

export default ModelHandler
