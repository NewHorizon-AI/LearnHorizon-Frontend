'use client'

import React from 'react'
import { type IModelCard } from '@/interfaces/IBackend'

function ModelCard({ model }: { model: IModelCard }): React.JSX.Element {
  const { title, photo, description, authors, views, publicationDate } = model
  const date = new Date(publicationDate)
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

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
          {authors.map(author => (
            <span key={author._id} className="mr-2">{author.name}</span>
          ))}
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

export default ModelCard
