'use client'

import React from 'react'

import FileUpload from '@/modules/Upload-Model/components/FileUpload'
import FilePreview from '@/modules/Upload-Model/components/FilePreview'

// import useFormStore from '@/contexts/article/create-article/useFormStore'
import useModelStore from '@/contexts/modelStore/edit-model/index'

const RenderFileHandler: React.FC = () => {
  const { file } = useModelStore()

  return file == null ? <FileUpload /> : <FilePreview />
}

export default RenderFileHandler
