import React from 'react'

import Content from '../model-content/ModelContent'

interface DisplayModelProps {
  articleId: string
}

const DisplayModel: React.FC<DisplayModelProps> = ({ articleId }) => {
  // TODO: Implementar un renderizador propio para el modelo 3D

  return (
    <div className="w-full h-48 md:h-64 lg:h-[80vh] relative">
      <div className="absolute inset-0 bg-black  flex items-center justify-center">
        <Content articleId={articleId} />
      </div>
    </div>
  )
}

export default DisplayModel
