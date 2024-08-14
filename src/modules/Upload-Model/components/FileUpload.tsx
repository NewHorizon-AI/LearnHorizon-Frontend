'use client'

import React from 'react'
import { UploadIcon } from '@radix-ui/react-icons'
import parseFile from '../libs/parseFile'

// Importacion del estado de creacion de un articulo
import useFormStore from '@/contexts/article/create-article/useFormStore'

import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

const FileUpload: React.FC = () => {
  const { setField } = useFormStore()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileExists = e.target.files?.[0]
    if (fileExists != null) {
      const result = parseFile(fileExists)
      setField('alert', result.alert)
      console.log(result.alert)
      if (result.valid) {
        setField('file', fileExists)
      }
    }
  }

  return (
    <div className="w-full h-full border-dashed border-gray-300 rounded-lg bg-gray-100 border-2 relative">
      <Input
        type="file"
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
        id="file-upload"
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <UploadIcon className="w-12 h-12 text-gray-600" />
        <span className="mt-2 text-gray-600">
          Haz clic aquí para buscar el archivo
        </span>
      </div>
    </div>
  )
}

export default FileUpload
