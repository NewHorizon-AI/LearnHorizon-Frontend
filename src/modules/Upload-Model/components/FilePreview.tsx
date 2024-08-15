'use client'

import React from 'react'
import ModelRender from '@/modules/3D-Model-Render/3DModelRender.tsx'

const FileView: React.FC = () => {
  return (
    <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-center">
      <div className="w-full h-full">
        <ModelRender />
      </div>
    </div>
  )
}

export default FileView
