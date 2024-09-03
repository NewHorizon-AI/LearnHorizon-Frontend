import React from 'react'

interface ArticlePageProps {
  params: {
    articleId: string
  }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  return <div>{params.articleId}</div>
}

export default ArticlePage
