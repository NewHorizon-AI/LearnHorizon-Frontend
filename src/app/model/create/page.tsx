'use client'

import React from 'react'
import FormLayout from '@/components/publicationForm/FormLayout'
import useFormField from '@/hooks/useFormField'

export default function Page(): React.JSX.Element {
  // Estados para los datos de la publicación
  const title = useFormField<string>('')
  const subtitle = useFormField<string>('')
  const photo = useFormField<string>('')
  const description = useFormField<string>('')
  const markdownContent = useFormField<string>('')
  const author = useFormField<string>('')
  const category = useFormField<string>('')

  // Estados para los datos del modelo 3D
  const objectName = useFormField<string>('')
  const coordinates = useFormField<[number, number, number]>([0, 0, 0])
  const rotationAngles = useFormField<[number, number, number]>([0, 0, 0])
  const scale = useFormField<[number, number, number]>([1, 1, 1])

  // Estado para el archivo 3D
  const file = useFormField<File | null>(null)

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

    // // Imprimir el contenido de formData
    // console.log('Datos a enviar:', payload)

    try {
      const response = await fetch('/api/model/new', {
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
