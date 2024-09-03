import React from 'react'

import EditArticle from './views/EditArticle'

interface EditArticleModuleProps {
  articleId: string
}

const EditArticleModule: React.FC<EditArticleModuleProps> = ({ articleId }) => {
  return <EditArticle articleId={articleId} />
}

export default EditArticleModule
