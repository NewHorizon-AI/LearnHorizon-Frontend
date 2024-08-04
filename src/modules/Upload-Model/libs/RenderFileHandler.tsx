'use client'

import React from 'react'

import FileUpload from '@/modules/Upload-Model/components/FileUpload'
import FilePreview from '@/modules/Upload-Model/components/FilePreview'

import useFormStore from '@/contexts/article/create-article/useFormStore'

const RenderFileHandler: React.FC = () => {
  const { file } = useFormStore()

  return file == null ? <FileUpload /> : <FilePreview />
}

export default RenderFileHandler
