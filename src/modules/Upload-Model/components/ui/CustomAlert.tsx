import React, { useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { type FileValidated } from '../../interfaces/IFileValidation'

const CustomAlert: React.FC<FileValidated> = ({ alert }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(true) // Asegúrate de mostrar la alerta cuando cambia

    const timer = setTimeout(() => {
      setShow(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [alert]) // Dependencia del efecto

  const handleClose = () => {
    setShow(false)
  }

  if (!show || !alert) {
    return null
  }

  // Valores predeterminados en caso de que alert sea null
  const {
    variant = 'default',
    title = 'Default Title',
    description = 'Default Description'
  } = alert || {}

  return (
    <div className="fixed bottom-5 right-5 z-50 rounded-lg p-4 text-white text-lg">
      <Alert variant={variant}>
        <div className="flex justify-between items-center">
          <div>
            <AlertTitle className="text-lg">{title}</AlertTitle>
            <AlertDescription className="text-base">
              {description}
            </AlertDescription>
          </div>
          <button
            onClick={handleClose}
            className="text-2xl leading-none p-1 -mr-2 text-white hover:text-gray-300"
          >
            &times; {/* Símbolo de X */}
          </button>
        </div>
      </Alert>
    </div>
  )
}

export default CustomAlert
