import React from 'react'
import EditArticleBody from '../components/EditArticleBody'
import CreateArticleLayout from '@/layouts/Create-Article-Layout/CreateArticleLayout'

interface EditArticleProps {
  articleId: string
}

const EditArticle: React.FC<EditArticleProps> = ({ articleId }) => {
  return (
    <CreateArticleLayout>
      <EditArticleBody articleId={articleId} />
    </CreateArticleLayout>
  )
}

export default EditArticle
