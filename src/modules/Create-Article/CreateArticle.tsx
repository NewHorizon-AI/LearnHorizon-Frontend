'use client'

import React from 'react'
import FormLayout from './components/ManageArticlePage'
import useFormField from '@/hooks/useFormField'
import CreateArticleLayout from '@/layouts/Create-Article-Layout/CreateArticleLayout'

import {} from '@/context/article'

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
      />
    </CreateArticleLayout>
  )
}

export default CreateArticle
