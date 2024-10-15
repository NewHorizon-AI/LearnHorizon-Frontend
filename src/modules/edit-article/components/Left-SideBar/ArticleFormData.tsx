'use client'

import React from 'react'

// Importacion de los componentes de shad-cn
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Importacion de los hooks
import DynamicInput from '../../lib/DynamicInputProps'

// * Importar store de formulario
import useFormStore from '@/contexts/article/create-article/useFormStore'
import useArticleStore from '@/contexts/article/get/index'

const ArticleFormData: React.FC = () => {
  const { title, photo, description, author, category, setField } =
    useFormStore()

  const { article } = useArticleStore()

  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setField('title', e.target.value)
            }}
            placeholder={article?.title}
          />
        </div>
        {/* <div>
          <Label htmlFor="subtitle">Subtítulo</Label>
          <Input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => {
              setField('subtitle', e.target.value)
            }}
            placeholder="Subtítulo"
          />
        </div> */}
        <div>
          <Label htmlFor="photo">URL de la Foto</Label>
          <Input
            id="photo"
            type="text"
            value={photo}
            onChange={(e) => {
              setField('photo', e.target.value)
            }}
            placeholder="URL de la Foto"
          />
        </div>
        <div>
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => {
              setField('description', e.target.value)
            }}
            placeholder="Descripción"
            className="resize-none h-36"
            maxLength={200}
          />
        </div>
        <div>
          <DynamicInput
            values={author}
            setValues={(newValues) => {
              setField('author', newValues)
            }}
            label="Autores"
            placeholder="Autor"
          />
        </div>
        <div>
          <DynamicInput
            values={category}
            setValues={(newValues) => {
              setField('category', newValues)
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
