import React from 'react'

import {
  DisplayModel,
  ArticleContent,
  LeftSidebar,
  RightSidebar
} from '../components'

interface ArticleViewProps {
  articleId: string
}

const ArticleView: React.FC<ArticleViewProps> = ({ articleId }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DisplayModel articleId={articleId} />
      <div className="flex flex-col md:flex-row flex-1">
        <LeftSidebar />
        <ArticleContent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default ArticleView
