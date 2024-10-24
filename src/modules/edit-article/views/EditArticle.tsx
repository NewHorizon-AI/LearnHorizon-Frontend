/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client'

import React, { useEffect, useState } from 'react'

// * Importacion de componentes
import { ModelHandler } from '../components/model-content'
import { ArticleFormData } from '../components/left-sidebar'
import { ArticleMarkdown } from '../components/below-content'
import { Menu } from '../components/menu'

import { getArticleById } from '@/lib/articles/getArticleById'
import useEditArticleStore from '@/contexts/article/get'
import { type IArticle } from '@/interfaces/article/article.interface'

interface EditArticleProps {
  articleId: string
}

const EditArticle: React.FC<EditArticleProps> = ({ articleId }) => {
  // TODO: Eliminar el uso del estado de zustand

  const { setArticle, article } = useEditArticleStore.getState()

  const [article2, setArticle2] = useState<IArticle | null>(null)

  useEffect(() => {
    // * Fetch del artículo
    const fetchArticle = async (): Promise<void> => {
      const response: IArticle = await getArticleById(articleId)
      setArticle(response)
      setArticle2(response)
    }

    fetchArticle().catch((error) => {
      console.error('Failed to fetch article:', error)
    })
  }, [article, articleId, setArticle])

  return (
    <main className="flex flex-col items-center w-full overflow-hidden ">
      <div className="flex flex-col md:flex-row w-full">
        <ModelHandler
          articleId={articleId}
          className="flex-grow md:flex-grow-0 md:w-3/4 aspect-video"
        />

        <Menu
          sceneSettings={article2?.sceneSettings}
          className="flex-grow md:w-1/4 px-4 pt-4 "
        />
      </div>

      <div className="flex w-full px-4 pt-4">
        <div className="w-1/4">
          <ArticleFormData />
        </div>
        <div className="flex-1 pl-4">
          <h2 className="text-xl font-bold mb-4">Markdown Content</h2>
          <ArticleMarkdown />
        </div>
      </div>
    </main>
  )
}

export default EditArticle
