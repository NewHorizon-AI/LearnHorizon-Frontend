import React from 'react'
import MainLayout from '@/layouts/main'
import ArticleView from './views/ArticleView'

interface ArticleModuleProps {
  articleId: string
}

const ArticleModule: React.FC<ArticleModuleProps> = ({ articleId }) => {
  return (
    <MainLayout>
      <ArticleView articleId={articleId} />
    </MainLayout>
  )
}

export default ArticleModule
