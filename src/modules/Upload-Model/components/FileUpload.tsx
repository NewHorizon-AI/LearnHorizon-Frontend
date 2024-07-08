'use client'

import React from 'react'
import { UploadIcon } from '@radix-ui/react-icons'
import parseFile from '../libs/parseFile'

// Importacion del estado de creacion de un articulo
import useFormStore from '@/contexts/article/create-article/useFormStore'

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
    <div className="w-full h-full">
      <input
        type="file"
        className="hidden"
        id="file-upload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center justify-center h-full w-full"
      >
        <UploadIcon className="w-12 h-12 text-gray-600" />
        <span className="mt-2 text-gray-600">
          Haz clic aquí para buscar el archivo
        </span>
      </label>
    </div>
  )
}

export default FileUpload
