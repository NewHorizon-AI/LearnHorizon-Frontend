'use client'

import React, { useEffect } from 'react'
import EditArticleModule from '@/modules/edit-article/EditArticleModule'

import { fetchArticle } from '@/lib/article/fetchArticle'
import { fetchModel } from '@/lib/apiModel/fetchModel'

interface IParams {
  params: { articleId: string }
}

const EditArticlePage: React.FC<IParams> = ({ params }) => {
  useEffect(() => {
    console.log(`Carga de artículo con id: ${params.articleId}`)
    void fetchArticle(params.articleId)
    void fetchModel(params.articleId)
  }, [params.articleId])

  return <EditArticleModule />
}

export default EditArticlePage
