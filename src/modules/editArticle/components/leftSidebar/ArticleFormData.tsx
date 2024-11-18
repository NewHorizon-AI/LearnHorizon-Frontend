'use client'

import React from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import useEditArticleStore from '@/contexts/article/get'
import { updateArticleById } from '@/lib/articles/updateArticle'

const ArticleFormData: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  if (article == null) {
    return null
  }

  const handleOnBlur = (): void => {
    const updateSceneSettings = async (): Promise<void> => {
      await updateArticleById(article?._id, article)
    }

    updateSceneSettings().catch((error) => {
      console.error(error.message)
    })

    updateArticle({
      ...article
    })
  }

  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Input
            type="text"
            value={article?.title ?? ''}
            onChange={(e) => {
              updateArticle({ title: e.target.value })
            }}
            onBlur={handleOnBlur}
            placeholder="Título del Artículo"
          />
        </div>
        <div>
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            value={article?.description ?? ''}
            onChange={(e) => {
              updateArticle({ description: e.target.value })
            }}
            onBlur={handleOnBlur}
            placeholder="Descripción"
            className="resize-none h-36"
            maxLength={200}
          />
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  )
}

export { ArticleFormData }
