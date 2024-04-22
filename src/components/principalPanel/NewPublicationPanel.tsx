import React from 'react'

const VideoCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        src="path_to_thumbnail.jpg"
        alt="Thumbnail"
        className="w-full h-auto aspect-video rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">Título del Video</h3>
        <div className="flex items-center mt-2">
          <img
            src="path_to_author_image.jpg"
            alt="Author"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-gray-700">Nombre del Autor</span>
        </div>
        <div className="flex justify-between items-center mt-2 text-gray-600">
          <span>👁️ 150 vistas</span>
          <span>15 Sep, 2020</span>
        </div>
        <p className="text-gray-500 mt-2">
          Descripción breve del video, este texto es sólo un ejemplo.
        </p>
      </div>
    </div>
  )
}

export default VideoCard
