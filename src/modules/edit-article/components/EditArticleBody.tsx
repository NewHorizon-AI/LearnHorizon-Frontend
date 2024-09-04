'use client'

import React, { useEffect } from 'react'

import ArticleFormData from './Left-SideBar/ArticleFormData'
import ArticleMarkdown from './Below-Content/ArticleMarkdown'
import ModelContent from './model-content/index'

import { getEditArticle } from '@/lib/apiArticle/get/edit/getEditArticle'
import useEditArticleStore from '@/contexts/article/edit/index'

interface EditArticleBodyProps {
  articleId: string
}

const EditArticleBody: React.FC<EditArticleBodyProps> = ({ articleId }) => {
  const { setArticle } = useEditArticleStore()

  useEffect(() => {
    // * Fetch del artículo
    const fetchArticle = async (): Promise<void> => {
      const article = await getEditArticle(articleId)
      console.log(article)
      setArticle(article)
    }

    fetchArticle().catch((error) => {
      console.error('Failed to fetch article:', error)
    })
  }, [articleId, setArticle])

  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <div className="flex flex-row w-full p-4">
        {/* Modelo y transformaciones */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Modelo 3D */}
          <div className="flex-1">
            <ModelContent />
          </div>
        </div>
      </div>
      {/* Formulario y Markdown */}
      <div className="flex flex-row w-full p-4">
        {/* Sidebar con formulario */}
        <div className="w-1/4 p-4">
          <ArticleFormData />
        </div>
        {/* Contenido de Markdown */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4">Markdown Content</h2>
          <ArticleMarkdown />
        </div>
      </div>
    </main>
  )
}

export default EditArticleBody
