'use client'

import React, { useEffect } from 'react'
import EditArticleModule from '@/modules/edit-article/EditArticleModule'

import { fetchArticle } from '@/utils/fetchArticle'

interface IParams {
  params: { articleId: string }
}

const EditArticlePage: React.FC<IParams> = ({ params }) => {
  useEffect(() => {
    void fetchArticle(params.articleId)
  }, [params.articleId])

  return <EditArticleModule />
}

export default EditArticlePage
