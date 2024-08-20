import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const ErrorAlert: React.FC = () => {
  const variant = 'destructive'
  const title = 'Error'
  const description = 'Ha ocurrido un error inesperado.'

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
        </div>
      </Alert>
    </div>
  )
}

export default ErrorAlert
