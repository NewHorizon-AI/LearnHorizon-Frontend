/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { UploadCloud } from 'lucide-react'

// import { type IModel } from '@/interfaces/model/model.interface'
import { createModel } from '@/lib/models/createModel'

interface UploadModelProps {
  articleId: string
  setModel: (model: ArrayBuffer) => void
  setIsLoading: (isLoading: boolean) => void
  setIsModelLoaded: (isModelLoaded: boolean) => void
}

const UploadModel: React.FC<UploadModelProps> = (props) => {
  const [file, setFile] = useState<File | null>(null)

  const { setIsModelLoaded, articleId, setModel, setIsLoading } = props

  // Manejar el cambio del input de archivo y automáticamente subir el archivo
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    setFile(selectedFile)

    if (selectedFile) {
      props.setIsLoading(true)
      try {
        // Llamada al backend para subir el modelo
        const responseModel = await createModel(props.articleId, selectedFile)

        // Actualiza el estado con el modelo subido
        props.setModel(responseModel)
      } catch (error) {
        console.error('Error al subir el archivo:', error)
      } finally {
        props.setIsLoading(false)
        props.setIsModelLoaded(true)
      }
    }
  }

  return (
    <div className="w-full h-full border-dashed border-gray-300 rounded-lg bg-gray-100 border-2 relative transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50">
      <Input
        type="file"
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
        id="file-upload"
        onChange={handleFileChange} // Se llama a handleFileChange automáticamente cuando el usuario selecciona un archivo
      />
      <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <UploadCloud className="w-12 h-12 text-gray-600 transition-colors duration-300 ease-in-out hover:text-blue-500" />
        <span className="mt-2 text-gray-600 transition-colors duration-300 ease-in-out hover:text-blue-500">
          Haz clic aquí para buscar el archivo
        </span>
      </div>
    </div>
  )
}

export default UploadModel
