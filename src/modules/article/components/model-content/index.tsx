import React from 'react'

import Content from './content/index'

interface ModelContentProps {
  articleId: string
}

const ModelContent: React.FC<ModelContentProps> = ({ articleId }) => {
  return <Content articleId={articleId} />
}

export default ModelContent
