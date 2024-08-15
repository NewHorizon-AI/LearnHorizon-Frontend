'use client'

import React, { useEffect } from 'react'

import FileUpload from '@/modules/Upload-Model/components/FileUpload'
import FilePreview from '@/modules/Upload-Model/components/FilePreview'

import useModelStore from '@/contexts/modelStore/edit-model/index'

const RenderFileHandler: React.FC = () => {
  const { model } = useModelStore()

  // useEffect para hacer log del estado de 'file'
  useEffect(() => {
    console.log('Current file:', model)
  }, [model]) // Dependencia [file] asegura que el efecto se ejecute solo cuando 'file' cambie

  return model == null ? <FileUpload /> : <FilePreview />
}

export default RenderFileHandler
