import React from 'react'

import Image from 'next/image'
import { IArticle } from '@/interface/IArticle'

export default function ArticleView({
  model
}: {
  model: IArticle
}): React.JSX.Element {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {model.title}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{model.subtitle}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Publicado por</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {model.author?.map((author) => (
                <div key={author.name} className="flex items-center">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={author.image || '/images/default-profile.png'}
                    alt={author.name}
                    width={32}
                    height={32}
                  />
                  <span className="ml-2">{author.name}</span>
                </div>
              ))}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Descripción</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {model?.description}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Categoría</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {model.category?.map((category) => (
                <span key={category._id}>{category.title} </span>
              ))}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Likes / Dislikes
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {model.likes} likes / {model.dislikes} dislikes
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Fecha de publicación
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {model?.publicationDate
                ? new Date(model.publicationDate).toLocaleDateString()
                : ''}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
