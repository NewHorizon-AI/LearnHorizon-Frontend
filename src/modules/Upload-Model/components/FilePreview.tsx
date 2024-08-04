'use client'

import React from 'react'
import ModelRender from '@/modules/3D-Model-Render/3DModelRender.tsx'

import useFormStore from '@/contexts/article/create-article/useFormStore'

const FileView: React.FC = () => {
  const { file } = useFormStore()

  return (
    <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-center">
      <div className="w-full h-full">
        <ModelRender file={file} />
      </div>
    </div>
  )
}

export default FileView
