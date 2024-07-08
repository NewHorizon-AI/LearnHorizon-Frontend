import React from 'react'
import ManageArticlePage from './components/ManageArticlePage'
import CreateArticleLayout from '@/layouts/Create-Article-Layout/CreateArticleLayout'

const CreateArticle: React.FC = () => {
  return (
    <CreateArticleLayout>
      <ManageArticlePage />
    </CreateArticleLayout>
  )
}

export default CreateArticle
