import React from 'react'
import ArticleModule from '@/modules/article/index'

import { MainLayout } from '@/layouts/main/MainLayout'

interface ArticlePageProps {
  params: {
    articleId: string
  }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  return (
    <MainLayout>
      <ArticleModule articleId={params.articleId} />
    </MainLayout>
  )
}

export default ArticlePage
