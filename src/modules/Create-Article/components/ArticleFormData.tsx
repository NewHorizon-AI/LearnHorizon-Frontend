import React from 'react'

import { type IPublicationFormProps } from '@/interfaces/formData/INewPublication'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import DynamicInput from '../lib/DynamicInputProps'

const ArticleFormData = ({
  title,
  subtitle,
  photo,
  author,
  category,
  description
}: IPublicationFormProps): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-xl font-semibold">Crear un articulo</h4>
        <p className="text-md">
          Llena el formulario a continuación para crear una nueva publicación.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            type="text"
            value={title.value}
            onChange={(e) => {
              title.setValue(e.target.value)
            }}
            placeholder="Título"
          />
        </div>
        {/* <div>
          <Label htmlFor="subtitle">Subtítulo</Label>
          <Input
            id="subtitle"
            type="text"
            value={subtitle.value}
            onChange={(e) => {
              subtitle.setValue(e.target.value)
            }}
            placeholder="Subtítulo"
          />
        </div> */}
        <div>
          <Label htmlFor="photo">URL de la Foto</Label>
          <Input
            id="photo"
            type="text"
            value={photo.value}
            onChange={(e) => {
              photo.setValue(e.target.value)
            }}
            placeholder="URL de la Foto"
          />
        </div>
        <div>
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            value={description.value}
            onChange={(e) => {
              description.setValue(e.target.value)
            }}
            placeholder="Descripción"
            className="resize-none h-36"
            maxLength={200}
          />
        </div>
        <div>
          <DynamicInput
            values={author.value}
            setValues={(newValues) => {
              author.setValue(newValues)
            }}
            label="Autores"
            placeholder="Autor"
          />
        </div>
        <div>
          <DynamicInput
            values={category.value}
            setValues={(newValues) => {
              category.setValue(newValues)
            }}
            label="Categorías"
            placeholder="Categoría"
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleFormData
