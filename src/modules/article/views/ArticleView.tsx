'use client'

import React, { useEffect } from 'react'

import {
  DisplayModel,
  ArticleContent,
  LeftSidebar,
  RightSidebar
} from '../components'
import { getArticleById } from '@/lib/articles/getArticleById'

interface ArticleViewProps {
  articleId: string
}

const ArticleView: React.FC<ArticleViewProps> = ({ articleId }) => {
  useEffect(() => {
    const fetchArticleData = async (): Promise<void> => {
      await getArticleById(articleId)
    }

    fetchArticleData().catch((error) => {
      console.error('Error fetching article:', error)
    })
  }, [articleId])

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
