import React from 'react'
import ArticleModule from '@/modules/article/index'

interface ArticlePageProps {
  params: {
    articleId: string
  }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  return <ArticleModule articleId={params.articleId} />
}

export default ArticlePage
