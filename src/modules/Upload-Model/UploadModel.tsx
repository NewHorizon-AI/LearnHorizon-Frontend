'use client'

import React, { useState } from 'react'

import { type IFile } from '@/interfaces/formData/INewPublication'

import FileUpload from '@/modules/Upload-Model/components/FileUpload'

import FilePreview from '@/modules/Upload-Model/components/FilePreview'

import CustomAlert from './components/ui/CustomAlert'

const Upload: React.FC<IFile> = ({ file }) => {
  const [alert, setAlert] = useState<{
    title: string
    description: string
    variant: 'destructive' | 'default'
  } | null>(null) // Usamos useState para manejar la alerta

  return (
    <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
      {alert != null && <CustomAlert alert={alert} />}
      {file.value == null ? (
        <FileUpload file={file} alert={alert} setAlert={setAlert} />
      ) : (
        <FilePreview file={file.value} />
      )}
    </div>
  )
}

export default Upload
