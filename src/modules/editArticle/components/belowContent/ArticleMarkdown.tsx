'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import useEditArticleStore from '@/contexts/article/get'
import { updateArticleById } from '@/lib/articles/updateArticle'

const ArticleMarkdown: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  // const { markdownContent, setField } = useFormStore()
  const [isPreview, setIsPreview] = useState(false)

  const handleOnBlur = (): void => {
    const updateSceneSettings = async (): Promise<void> => {
      await updateArticleById(article?._id, article)
    }

    updateSceneSettings().catch((error) => {
      console.error(error.message)
    })

    // Actualizamos el artículo completo en el store
    updateArticle({
      ...article
    })
  }

  return (
    <div className="">
      <div className="border rounded-md min-h-screen">
        <div className="flex border-b">
          <button
            className={`flex-1 text-center p-2 ${!isPreview ? 'bg-gray-200' : 'bg-white'} border-r`}
            onClick={() => {
              setIsPreview(false)
            }}
          >
            Write
          </button>
          <button
            className={`flex-1 text-center p-2 ${isPreview ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => {
              setIsPreview(true)
            }}
          >
            Preview
          </button>
        </div>

        <div className="p-4">
          {!isPreview ? (
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={article?.content}
              onChange={(e) => {
                updateArticle({ content: e.target.value })
              }}
              onBlur={handleOnBlur}
              placeholder="Write your markdown here..."
            />
          ) : (
            <div className="prose">
              <ReactMarkdown>{article?.content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { ArticleMarkdown }
