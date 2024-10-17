/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */

/*
TODO: Mejorar la implementacion de la subida de archivos
* No cargar un modelo la primera vez que se entra
* Mejorar implementacion de pantallas de carga
* Mejorar la implementacion de la subida de modelos
* Revisar manejo de estados y useEffect
*/

'use client'

import React, { useEffect, useCallback, useState } from 'react'

import UploadModel from './upload/UploadModel'

import ViewModel from '@/modules/model/'

import LoadingScreen from '@/components/loading/LoadingScreen'

// Petición para obtener un modelo
import getModelByArticleId from '@/lib/models/getModelByArticleId'

interface ModelHandlerProps {
  articleId: string
}

const ModelHandler: React.FC<ModelHandlerProps> = ({ articleId }) => {
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true) // Estado de carga
  const [model, setModel] = useState<ArrayBuffer>()

  // Función para obtener el modelo
  const fetchModel = useCallback(async (): Promise<void> => {
    try {
      const response: ArrayBuffer = await getModelByArticleId(articleId)

      setModel(response)
      setIsModelLoaded(true)
    } catch (error) {
      console.error('No se encontro modelo')
    } finally {
      setIsLoading(false)
    }
  }, [articleId, isModelLoaded])

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
      ) : isModelLoaded ? (
        <ViewModel model={model} />
      ) : (
        <UploadModel
          articleId={articleId}
          setModel={setModel}
          setIsLoading={setIsLoading}
          setIsModelLoaded={setIsModelLoaded}
        />
      )}
    </div>
  )
}

export default ModelHandler
