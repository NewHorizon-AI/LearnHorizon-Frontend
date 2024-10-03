import React from 'react'

import EditArticle from './views/EditArticle'
import EditArticleLayout from '@/layouts/edit-article'

interface EditArticleModuleProps {
  articleId: string
}

const EditArticleModule: React.FC<EditArticleModuleProps> = ({ articleId }) => {
  return (
    <EditArticleLayout>
      <EditArticle articleId={articleId} />
    </EditArticleLayout>
  )
}

export default EditArticleModule
