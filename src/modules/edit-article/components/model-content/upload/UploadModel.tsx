'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { UploadCloud } from 'lucide-react'

// * Asegúrate de que el nombre de la importación y el path sean correctos
import useModelStore from '@/contexts/article/model/index' // Asumiendo que el archivo de store se llama modelStore.js y está en el directorio contexts

const UploadModel: React.FC = () => {
  const { setModel } = useModelStore()
  const [fileName, setFileName] = useState('') // Declaración del estado para el nombre del archivo

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      setModel(file) // Esto establecerá el modelo en la tienda Zustand
      setFileName(file.name) // Actualiza el estado local con el nombre del archivo
    } else {
      setFileName('') // Reiniciar el nombre del archivo si no hay archivo
    }
  }

  return (
    <div className="w-full h-full border-dashed border-gray-300 rounded-lg bg-gray-100 border-2 relative transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50">
      <Input
        type="file"
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
        id="file-upload"
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <UploadCloud className="w-12 h-12 text-gray-600 transition-colors duration-300 ease-in-out hover:text-blue-500" />
        <span className="mt-2 text-gray-600 transition-colors duration-300 ease-in-out hover:text-blue-500">
          {fileName || 'Haz clic aquí para buscar el archivo'}
        </span>
      </div>
    </div>
  )
}

export default UploadModel
