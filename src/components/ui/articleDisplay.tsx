/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

// Importando tipos
import { type IArticleCard } from '@/interfaces/IBackend'

function ArticlesDisplay({
  articles
}: {
  articles: IArticleCard[]
}): React.JSX.Element {
  const router = useRouter()

  const handleArticle = (_id: string): void => {
    router.push(`/article/?id=${_id}`)
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div
            key={article._id}
            onClick={() => {
              handleArticle(article._id)
            }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ArticleCard({
  article
}: {
  article: IArticleCard
}): React.JSX.Element {
  const { title, photo, description, authors, views, publicationDate } = article
  // Convertir la fecha de publicación a un objeto Date
  const date = new Date(publicationDate)
  // Formatear la fecha a un formato legible
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  // Asegurarse de que authors es un arreglo

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        src={photo}
        alt="Thumbnail"
        className="w-full h-auto aspect-video rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
        <div className="flex items-center mt-2">
          {/* Iterar sobre el arreglo de autores y generar un elemento para cada uno */}
        </div>
        <div className="flex justify-between items-center mt-2 text-gray-600">
          <span>👁️ {views} vistas</span>
          <span>{formattedDate}</span>
        </div>
        <p className="text-gray-500 mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export { ArticlesDisplay }
