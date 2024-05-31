import React from 'react'
import { type IPublicationFormProps } from '@/interfaces/formData/INewPublication'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Form: React.FC<IPublicationFormProps> = ({
  title,
  subtitle,
  photo,
  description,
  markdownContent,
  author,
  category
}) => (
  <div className="space-y-4">
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
        <Label htmlFor="markdownContent">Contenido en Markdown</Label>
        <Textarea
          id="markdownContent"
          value={markdownContent.value}
          onChange={(e) => {
            markdownContent.setValue(e.target.value)
          }}
          placeholder="Contenido en Markdown"
          className="min-h-[100px]"
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

export default Form
