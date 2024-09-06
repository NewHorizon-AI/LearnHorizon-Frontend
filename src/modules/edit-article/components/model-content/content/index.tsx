/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useEffect, useCallback, useState } from 'react'

import UploadModel from './upload/UploadModel'
import RenderModel from './render/index'

// Petición para obtener un modelo
import getModel from '@/lib/apiModel/get/getModel'

// Tipos de datos del modelo
import { type IModel } from '@/interfaces/model/model.interface'

interface ModelHandlerProps {
  articleId: string
}

const ModelHandler: React.FC<ModelHandlerProps> = ({ articleId }) => {
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false)
  const [model, setModel] = useState<IModel>()

  // Función para obtener el modelo
  const fetchModel = useCallback(async (): Promise<void> => {
    try {
      const response = await getModel(articleId)
      setModel(response)
      setIsModelLoaded(true)
    } catch (error) {
      console.error('Error al obtener el modelo:', error)
    }
  }, [articleId])

  // useEffect para cargar el modelo cuando el componente se monta
  useEffect(() => {
    void fetchModel()
  }, [fetchModel])

  return (
    <div className="flex-1 aspect-video">
      {isModelLoaded ? <RenderModel modelData={model} /> : <UploadModel />}
    </div>
  )
}

export default ModelHandler
