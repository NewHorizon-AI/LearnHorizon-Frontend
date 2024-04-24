// Implementamos el componente funcional con las propiedades tipadas
import React from 'react'
import { type IPublicationCard } from '@/interface/IBackend'

const PublicationCard: React.FC<IPublicationCard> = ({
  _id,
  title,
  photo,
  description,
  author,
  views,
  publicationDate
}) => {
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
          <img
            src="path_to_author_image.jpg" // Reemplazar con la ruta de la imagen real del autor si es necesario
            alt="Author"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-gray-700">{author}</span>
        </div>
        <div className="flex justify-between items-center mt-2 text-gray-600">
          <span>👁️ {views} vistas</span>
          <span>{publicationDate}</span>
        </div>
        <p className="text-gray-500 mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default PublicationCard
