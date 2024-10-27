'use client'

import React, { useState } from 'react'

import { type IModelSettings } from '@/interfaces/scene-settings/scene-settings.interface'

import { Checkbox } from '@/components/ui/checkbox'

import useEditArticleStore from '@/contexts/article/get'

import { UpdateSceneByArticleId } from '@/lib/sceneSettings/updateScene'

const ModelSettings: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  if (article == null) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modelSettings, setModelSettings] = useState<IModelSettings>(
    article.sceneSettings.modelSettings
  )

  const handleCheckboxChange = (checked: boolean | 'indeterminate'): void => {
    // Actualiza el estado local
    setModelSettings((prevSettings) => ({
      ...prevSettings,
      visible: checked === true // Maneja si está marcado o no
    }))

    // Actualiza el artículo en el store
    updateArticle({
      ...article,
      sceneSettings: {
        ...article.sceneSettings,
        modelSettings: {
          ...article.sceneSettings.modelSettings,
          visible: checked === true
        }
      }
    })
  }

  const handleOnBlur = (): void => {
    const updateSceneSettings = async (): Promise<void> => {
      await UpdateSceneByArticleId(article._id, article.sceneSettings)
    }

    updateSceneSettings().catch((error) => {
      console.error(error.message)
    })
  }

  return (
    <section className="flex flex-col gap-4 mb-6">
      <label
        htmlFor="model-visible"
        className="text-sm font-medium leading-none"
      >
        Visible
      </label>
      <Checkbox
        id="model-visible"
        checked={modelSettings.visible}
        onCheckedChange={handleCheckboxChange}
        onBlur={handleOnBlur}
      />
    </section>
  )
}

export default ModelSettings
