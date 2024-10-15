/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import useEditArticleStore from '@/contexts/article/get'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const ArticleContent: React.FC = () => {
  const { article } = useEditArticleStore()

  if (!article) {
    return (
      <p className="text-center text-muted">El artículo no está disponible</p>
    )
  }

  return (
    <main className="flex-1 w-full px-4 md:px-16 mt-8 mb-16">
      <div className="flex flex-col max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">{article.title}</h2>

        <p className="text-gray-600">
          Fecha de publicación:{' '}
          {new Date(article.createdAt).toLocaleDateString()}
        </p>

        {/* Descripción del artículo */}
        <p className="text-gray-700">{article.description}</p>

        {/* Categorías */}
        <div className="space-x-2">
          <strong className="text-gray-800">Categorías:</strong>{' '}
          {article.categories.map((category) => (
            <Badge key={category} variant="secondary" className="mr-2">
              {category}
            </Badge>
          ))}
        </div>

        {/* Autores */}
        <div className="flex items-center space-x-2">
          <strong className="text-gray-800">Autores:</strong>{' '}
          {article.users.map((user, index) => (
            <div key={index} className="flex items-center ">
              <Avatar className="inline-block" />
              <div>{user}</div>
            </div>
          ))}
        </div>

        {/* Estado del artículo */}
        <div className="space-x-2">
          <strong className="text-gray-800">Estado:</strong>{' '}
          <Badge variant="outline">{article.status}</Badge>
        </div>

        {/* Vistas y Likes */}
        <div className="flex space-x-4">
          <div>
            <strong className="text-gray-800">Vistas:</strong> {article.views}
          </div>
          <div>
            <strong className="text-gray-800">Likes:</strong> {article.likes}
          </div>
        </div>

        {/* Contenido del artículo (Markdown en HTML) */}
        <div className="prose prose-gray">
          <h3>Contenido del artículo:</h3>
          <div>{article.content}</div>
        </div>

        {/* Fecha de última actualización */}
        <p className="text-gray-600">
          Última actualización:{' '}
          {new Date(article.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </main>
  )
}

export default ArticleContent
