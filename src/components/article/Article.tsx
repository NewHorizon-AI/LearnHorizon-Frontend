'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ModeloView(): React.ReactElement {
  // Suponiendo que los datos vendrían de una API o un estado global
  const [modelo] = useState({
    imageUrl: 'https://via.placeholder.com/150/f9cee5', // Reemplaza con la URL de tu imagen
    title: 'Nombre del modelo',
    creator: 'Doctor A.',
    description: 'Descripción detallada del modelo...',
    tags: ['3D', 'modeling', 'art', 'design', 'CGI'], // Reemplazar con las etiquetas reales
    comments: [
      {
        user: 'user1',
        comment: '¡Gran trabajo!'
      }
    ]
  })

  return (
    <div className="flex flex-col items-center">
      <img
        src={modelo.imageUrl}
        alt={modelo.title}
        width={600}
        height={600}
        className="rounded-t-lg"
      />
      <h1 className="text-4xl font-bold mt-4 mb-2">{modelo.title}</h1>
      <p className="text-md mb-2">Creado por {modelo.creator}</p>
      <p className="text-md mb-4">{modelo.description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {modelo.tags.map((tag, index) => (
          <Button key={index} variant="outline">
            {tag}
          </Button>
        ))}
      </div>
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-2">Comentarios</h2>
        <div className="mb-4">
          {modelo.comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <strong>{comment.user}</strong>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <Input placeholder="Escribe un comentario..." className="mb-2" />
        <Button>Enviar</Button>
      </div>
    </div>
  )
}
