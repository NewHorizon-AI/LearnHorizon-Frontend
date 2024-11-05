'use client'

import React, { useState } from 'react'
import { PrincipalInput } from '@/components/common/input'
import { type IGridSettings } from '@/interfaces/scene-settings/scene-settings.interface'
import { PaintBucket, Maximize, Grid } from 'lucide-react' // Importa los íconos de lucide-react
import useEditArticleStore from '@/contexts/article/get'

import { UpdateSceneByArticleId } from '@/lib/sceneSettings/updateScene'

const GridSettings: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  if (article == null) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [gridSettings, setGridSettings] = useState<IGridSettings>(
    article.sceneSettings.gridSettings
  )

  const handleInputChange = (
    field: keyof IGridSettings,
    value: string | number
  ): void => {
    // Actualiza el estado local
    setGridSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value
    }))

    // Actualiza el artículo en el store
    updateArticle({
      ...article,
      sceneSettings: {
        ...article.sceneSettings,
        gridSettings: {
          ...gridSettings,
          [field]: value
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
    <section>
      <div className="flex gap-4 flex-col">
        {/* Color del fondo */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Background Color:
          </label>
          <PrincipalInput
            type="text"
            value={gridSettings.backgroundColor}
            onChange={(e) => {
              handleInputChange('backgroundColor', e.target.value)
            }}
            placeholder="Background Color"
            Icon={PaintBucket}
            onBlur={handleOnBlur}
          />
        </div>

        {/* Tamaño de la grilla */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Size:
          </label>
          <PrincipalInput
            type="number"
            value={gridSettings.size}
            onChange={(e) => {
              handleInputChange('size', parseFloat(e.target.value))
            }}
            placeholder="Grid Size"
            Icon={Maximize}
            onBlur={handleOnBlur}
          />
        </div>

        {/* Divisiones de la grilla */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Divisions:
          </label>
          <PrincipalInput
            type="number"
            value={gridSettings.divisions}
            onChange={(e) => {
              handleInputChange('divisions', parseFloat(e.target.value))
            }}
            placeholder="Grid Divisions"
            Icon={Grid}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
    </section>
  )
}

export default GridSettings
