'use client'

import React, { useEffect } from 'react'
import FormLayout from './components/ManageArticlePage'
import useFormField from '@/hooks/useFormField'
import CreateArticleLayout from '@/layouts/Create-Article-Layout/CreateArticleLayout'

const CreateArticle: React.FC = () => {
  // Estados para los datos de la publicación
  const title = useFormField<string>('')
  const subtitle = useFormField<string>('DELETE')
  const photo = useFormField<string>('')
  const description = useFormField<string>('')
  const author = useFormField<string[]>([''])
  const category = useFormField<string[]>([''])

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

  useEffect(() => {
    console.log('title:', title.value)
    console.log('subtitle:', subtitle.value)
    console.log('photo:', photo.value)
    console.log('description:', description.value)
    console.log('author:', author.value)
    console.log('category:', category.value)
    console.log('markdownContent:', markdownContent.value)
    console.log('isPreview:', isPreview.value)
    console.log('objectName:', objectName.value)
    console.log('coordinates:', coordinates.value)
    console.log('rotationAngles:', rotationAngles.value)
    console.log('scale:', scale.value)
    console.log('file:', file.value)
  }, [
    title.value,
    subtitle.value,
    photo.value,
    description.value,
    author.value,
    category.value,
    markdownContent.value,
    isPreview.value,
    objectName.value,
    coordinates.value,
    rotationAngles.value,
    scale.value,
    file.value
  ])

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
    <CreateArticleLayout>
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
    </CreateArticleLayout>
  )
}

export default CreateArticle
