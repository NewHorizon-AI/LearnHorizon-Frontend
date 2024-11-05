'use client'

import React, { useEffect } from 'react'
import useEditArticleStore from '@/contexts/article/get'
import { getArticleById } from '@/lib/articles/getArticleById'

import EditArticleView from './views/EditArticleView'
import EditArticleLayout from '@/layouts/edit-article'

interface EditArticleModuleProps {
  articleId: string
}

const EditArticleModule: React.FC<EditArticleModuleProps> = (props) => {
  const { articleId } = props
  const { setArticle } = useEditArticleStore()

  // * Obtener el articulo con el id proporcionado

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      const article = await getArticleById(articleId)

      setArticle(article)
    }

    fetchArticle().catch((error) => {
      console.error('Error fetching article', error)
    })
  }, [articleId, setArticle])

  return (
    <EditArticleLayout>
      <EditArticleView />
    </EditArticleLayout>
  )
}

export { EditArticleModule }
