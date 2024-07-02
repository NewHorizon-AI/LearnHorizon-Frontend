import React from 'react'
import ModelRender from '@/modules/3D-Model-Render/3DModelRender.tsx'

import { type IFile } from '@/interfaces/formData/INewPublication'

const FileView: React.FC<IFile> = ({ file }) => {
  return (
    <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-center">
      <div className="w-full h-full">{file && <ModelRender file={file} />}</div>
    </div>
  )
}

export default FileView
