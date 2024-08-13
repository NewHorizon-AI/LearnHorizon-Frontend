'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

// Importacion del estado de creacion de un articulo
import useFormStore from '@/contexts/article/create-article/useFormStore'

const ArticleMarkdown: React.FC = () => {
  const { markdownContent, setField } = useFormStore()
  const [isPreview, setIsPreview] = useState(false)

  return (
    <div className="">
      <div className="border rounded-md shadow-sm">
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
              value={markdownContent}
              onChange={(e) => {
                setField('markdownContent', e.target.value)
              }}
              placeholder="Write your markdown here..."
            />
          ) : (
            <div className="prose">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleMarkdown
