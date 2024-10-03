/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useEffect, useCallback, useState } from 'react'

import RenderModel from './model/ThreeModel'

// * Importar nuevo render de modelo
import { ThreeModel } from '@/modules/model'

import LoadingScreen from '@/components/loading/LoadingScreen'

// Petición para obtener un modelo
import getModel from '@/lib/apiModel/get/getModel'

interface ModelHandlerProps {
  articleId: string
}

const ModelHandler: React.FC<ModelHandlerProps> = ({ articleId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true) // Estado de carga
  const [model, setModel] = useState<ArrayBuffer>()

  // Función para obtener el modelo
  const fetchModel = useCallback(async (): Promise<void> => {
    try {
      const response: ArrayBuffer = await getModel(articleId)

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
        <ThreeModel model={model} />
      )}
    </div>
  )
}

export default ModelHandler
