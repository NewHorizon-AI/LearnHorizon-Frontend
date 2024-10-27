'use client'

import React from 'react'

import { type ModelModuleViewProps } from './interfaces/model.interface'
import { EditModelView, ArticleModelView } from './views/'
import { LoadingScreen } from '@/components/loading'
import useEditArticleStore from '@/contexts/article/get'

const ModelViewModule: React.FC<ModelModuleViewProps> = (props) => {
  const { article } = useEditArticleStore()

  const { model, viewMode = 'view' } = props

  // * Aqui se pueden agregar más modos de visualización
  const viewComponents = {
    view: <ArticleModelView model={model} />,
    edit: <EditModelView model={model} />
  }

  // * Mostrar pantalla de carga si no se ha cargado el artículo
  if (article == null) {
    return (
      <LoadingScreen
        message="Cargando artículo..."
        spinnerSize="lg"
        bgColor="bg-gray-100"
        textColor="text-gray-800"
      />
    )
  }

  return (
    <div className="h-full w-full">
      {viewMode in viewComponents ? (
        viewComponents[viewMode]
      ) : (
        <div>No hay vista disponible para el modo: {viewMode}</div>
      )}
    </div>
  )
}

export default ModelViewModule
