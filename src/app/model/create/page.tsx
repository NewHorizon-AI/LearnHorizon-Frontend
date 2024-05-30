'use client'

import React, { useState } from 'react'
import FormLayout from '@/components/publicationForm/FormLayout'

export default function Page(): React.JSX.Element {
  // Estados para los datos de la publicacion
  const [title, setTitle] = useState({
    value: '',
    setValue: (v: string) => {
      setTitle({ ...title, value: v })
    }
  })
  const [subtitle, setSubtitle] = useState({
    value: '',
    setValue: (v: string) => {
      setSubtitle({ ...subtitle, value: v })
    }
  })
  const [photo, setPhoto] = useState({
    value: '',
    setValue: (v: string) => {
      setPhoto({ ...photo, value: v })
    }
  })
  const [description, setDescription] = useState({
    value: '',
    setValue: (v: string) => {
      setDescription({ ...description, value: v })
    }
  })
  const [markdownContent, setMarkdownContent] = useState({
    value: '',
    setValue: (v: string) => {
      setMarkdownContent({ ...markdownContent, value: v })
    }
  })
  const [author, setAuthor] = useState({
    value: '',
    setValue: (v: string) => {
      setAuthor({ ...author, value: v })
    }
  })
  const [category, setCategory] = useState({
    value: '',
    setValue: (v: string) => {
      setCategory({ ...category, value: v })
    }
  })

  // Estados para los datos del modelo 3D
  const [objectName, setObjectName] = useState({
    value: '',
    setValue: (v: string) => {
      setObjectName({ ...objectName, value: v })
    }
  })
  const [coordinates, setCoordinates] = useState({
    value: [0, 0, 0],
    setValue: (v: [number, number, number]) => {
      setCoordinates({ ...coordinates, value: v })
    }
  })
  const [rotationAngles, setRotationAngles] = useState({
    value: [0, 0, 0],
    setValue: (v: [number, number, number]) => {
      setRotationAngles({ ...rotationAngles, value: v })
    }
  })
  const [scale, setScale] = useState({
    value: [1, 1, 1],
    setValue: (v: [number, number, number]) => {
      setScale({ ...scale, value: v })
    }
  })

  // Estado para el archivo 3D
  const [file, setFile] = useState({
    value: null as File | null,
    setValue: (f: File | null) => {
      setFile({ ...file, value: f })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      publication: {
        title: title.value,
        content: markdownContent.value,
        subtitle: subtitle.value,
        photo: photo.value,
        description: description.value,
        author: author.value,
        category: category.value
      },
      object3D: {
        name: objectName.value,
        coordinates: coordinates.value,
        rotationAngles: rotationAngles.value,
        scale: scale.value
      }
    }

    const formData = new FormData()
    formData.append('payload', JSON.stringify(payload))
    if (file.value) {
      formData.append('file', file.value)
    }

    // Imprimir el contenido de formData
    console.log('Datos a enviar:', payload)

    try {
      const response = await fetch('/api/publications', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Error en el envío de datos')
      }

      const result = await response.json()
      console.log('Datos enviados exitosamente:', result)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  return (
    <FormLayout
      {...{
        title,
        subtitle,
        photo,
        description,
        markdownContent,
        author,
        category,
        objectName,
        coordinates,
        rotationAngles,
        scale,
        file
      }}
      onSubmit={handleSubmit}
    />
  )
}
