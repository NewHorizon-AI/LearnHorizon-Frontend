import React from 'react'
import ArticleView from './views/ArticleView'

interface ArticleModuleProps {
  articleId: string
}

const ArticleModule: React.FC<ArticleModuleProps> = ({ articleId }) => {
  return <ArticleView articleId={articleId} />
}

export default ArticleModule
