import React from 'react'

interface LoadingScreenProps {
  message?: string
  spinnerSize?: 'sm' | 'md' | 'lg'
  bgColor?: string
  textColor?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Cargando...',
  spinnerSize = 'md',
  bgColor = 'bg-background',
  textColor = 'text-foreground'
}) => {
  const spinnerSizeClass = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }[spinnerSize]

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full ${bgColor}`}
    >
      <div className={`${spinnerSizeClass} mb-4`}>
        <div className="w-full h-full border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className={`text-center ${textColor}`}>{message}</p>
    </div>
  )
}

export default LoadingScreen
