import React from 'react'

import { type IPublicationFormProps } from '@/interfaces/formData/INewPublication'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

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
        <div>
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
        </div>
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
          <Input
            id="description"
            type="text"
            value={description.value}
            onChange={(e) => {
              description.setValue(e.target.value)
            }}
            placeholder="Descripción"
          />
        </div>
        <div>
          <Label htmlFor="author">Autor</Label>
          <Input
            id="author"
            type="text"
            value={author.value}
            onChange={(e) => {
              author.setValue(e.target.value)
            }}
            placeholder="Autor"
          />
        </div>
        <div>
          <Label htmlFor="category">Categoría</Label>
          <Input
            id="category"
            type="text"
            value={category.value}
            onChange={(e) => {
              category.setValue(e.target.value)
            }}
            placeholder="Categoría"
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleFormData

// <DescriptionInput id="description" placeholder="Descripción" maxLength={200} />
