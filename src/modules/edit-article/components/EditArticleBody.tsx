'use client'

import React, { useEffect } from 'react'

import ArticleFormData from './Left-SideBar/ArticleFormData'
import ModelControllers from './Above-content/ModelControllers'
import ArticleMarkdown from './Below-Content/ArticleMarkdown'

import UploadModel from '@/modules/upload-model/UploadModel'

import { getEditArticle } from '@/lib/apiArticle/get/edit/getEditArticle'

import useEditArticleStore from '@/contexts/article/edit-article'

interface EditArticleBodyProps {
  articleId: string
}

const EditArticleBody: React.FC<EditArticleBodyProps> = ({ articleId }) => {
  const { setArticle } = useEditArticleStore()

  useEffect(() => {
    // * Fetch del articulo
    const fetchArticle = async (): Promise<void> => {
      const article = await getEditArticle(articleId)
      console.log(article)

      setArticle(article)
    }

    fetchArticle().catch((error) => {
      console.error(error)
    })
  }, [articleId, setArticle])

  return (
    <main className="flex flex-col items-center  w-full overflow-hidden ">
      <div className="flex w-full p-4">
        {/* Columna izquierda: Formulario */}
        <div className="flex flex-col w-full md:w-1/5 pr-4">
          <ArticleFormData />
        </div>

        {/* Contenedor derecho */}
        <div className="flex flex-col w-full md:w-4/5">
          <div className="flex w-full">
            {/* Subida de Archivos */}
            <div className="aspect-video w-full h-full">
              <UploadModel />
            </div>
            {/* Modelo 3D */}
            <div className="hidden lg:flex w-1/2 p-4">
              <ModelControllers />
            </div>
          </div>

          {/* Contenido de Markdown */}
          <div className="flex flex-col w-full pt-4">
            <h2 className="text-xl font-bold">Markdown Content</h2>
            <ArticleMarkdown />
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditArticleBody
