import React from 'react'

import Transformation from './transformations/index'
import Content from './content/index'

interface ModelContentProps {
  articleId: string
}

const ModelContent: React.FC<ModelContentProps> = ({ articleId }) => {
  return (
    <div className="flex flex-row w-full">
      {/* Asigna un ancho de, por ejemplo, 2/3 para Content */}
      <div className="w-3/4">
        <Content articleId={articleId} />
      </div>
      {/* Asigna el resto (1/3) para Transformation */}
      <div className="w-1/4 ml-4">
        <Transformation />
      </div>
    </div>
  )
}

export default ModelContent
