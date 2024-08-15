'use client'

import React from 'react'

import FileUpload from '@/modules/Upload-Model/components/FileUpload'
import FilePreview from '@/modules/Upload-Model/components/FilePreview'

import useModelStore from '@/contexts/modelStore/edit-model/index'

const RenderFileHandler: React.FC = () => {
  const { model } = useModelStore()

  return model == null ? <FileUpload /> : <FilePreview />
}

export default RenderFileHandler
