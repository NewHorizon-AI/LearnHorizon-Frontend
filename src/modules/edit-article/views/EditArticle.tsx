'use client'

import React, { useEffect } from 'react'

import { MarkdownContent, Sidebar, ModelContent } from '../components'

import { getEditArticle } from '@/lib/apiArticle/get/edit/getEditArticle'
import useEditArticleStore from '@/contexts/article/get/index'

interface EditArticleProps {
  articleId: string
}

const EditArticle: React.FC<EditArticleProps> = ({ articleId }) => {
  const { setArticle } = useEditArticleStore()

  useEffect(() => {
    // * Fetch del artículo
    const fetchArticle = async (): Promise<void> => {
      const article = await getEditArticle(articleId)

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
            <ModelContent articleId={articleId} />
          </div>
        </div>
      </div>
      {/* Formulario y Markdown */}
      <div className="flex flex-row w-full p-4">
        {/* Sidebar con formulario */}
        <div className="w-1/4 p-4">
          <Sidebar />
        </div>
        {/* Contenido de Markdown */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4">Markdown Content</h2>
          <MarkdownContent />
        </div>
      </div>
    </main>
  )
}

export default EditArticle
