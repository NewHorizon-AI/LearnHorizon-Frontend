import React from 'react'
import { EditArticleModule } from '@/modules/edit-article'

interface EditArticlePageParams {
  params: {
    articleId: string
  }
}

const EditArticlePage: React.FC<EditArticlePageParams> = ({ params }) => {
  return <EditArticleModule articleId={params.articleId} />
}

export default EditArticlePage
