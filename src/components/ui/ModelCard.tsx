import React from 'react'
import {
  type IPublicationCard,
  type IPublicationUserCard
} from '@/interface/IBackend'

const PublicationCard: React.FC<IPublicationCard> = ({
  title,
  photo,
  description,
  author,
  views,
  publicationDate
}) => {
  // Convertir la fecha de publicación a un objeto Date
  const date = new Date(publicationDate)
  // Formatear la fecha a un formato legible
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  // Asegurarse de que author es un arreglo
  const authorArray = Array.isArray(author) ? author : [author]

  console.log(author)

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
          {authorArray.slice(0, 2).map((authorObj, index) => (
            <div
              key={index}
              style={{ position: 'relative', left: `${index * -10}px` }}
            >
              <img
                src={authorObj.image}
                alt="Author"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="ml-2 text-gray-700">{authorObj.name}</span>
            </div>
          ))}
          {author.length > 2 && <span className="ml-2 text-gray-700">...</span>}
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

export default PublicationCard
