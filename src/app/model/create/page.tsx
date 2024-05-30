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
    />
  )
}
