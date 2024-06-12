/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React from 'react'
import FormLayout from '@/components/article/create/ManageArticlePage'
import useFormField from '@/hooks/useFormField'

export default function Page(): React.JSX.Element {
  // Estados para los datos de la publicación
  const title = useFormField<string>('')
  const subtitle = useFormField<string>('')
  const photo = useFormField<string>('')
  const description = useFormField<string>('')
  const author = useFormField<string>('')
  const category = useFormField<string>('')

  // Estados para el contenido en markdown
  const markdownContent = useFormField<string>('')
  const isPreview = useFormField<boolean>(false)

  // Estados para los datos del modelo 3D
  const objectName = useFormField<string>('')
  const coordinates = useFormField<[number, number, number]>([0, 0, 0])
  const rotationAngles = useFormField<[number, number, number]>([0, 0, 0])
  const scale = useFormField<[number, number, number]>([1, 1, 1])

  // Estado para el archivo 3D
  const file = useFormField<File | null>(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
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
    if (file.value != null) {
      formData.append('file', file.value)
    }

    // // Imprimir el contenido de formData
    // console.log('Datos a enviar:', payload)

    try {
      const response = await fetch('/api/article/new', {
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

  // Función contenedor que no retorna una Promise
  const handleSubmitWrapper = (e: React.FormEvent): void => {
    handleSubmit(e).catch((error) => {
      console.error(error)
    })
  }

  return (
    <FormLayout
      {...{
        title,
        subtitle,
        photo,
        description,
        markdownContent,
        isPreview,
        author,
        category,
        objectName,
        coordinates,
        rotationAngles,
        scale,
        file
      }}
      onSubmit={handleSubmitWrapper}
    />
  )
}
