'use client'

import React, { useState } from 'react'
import { Expand, ZoomIn, ZoomOut } from 'lucide-react' // Importa los íconos
import { PrincipalInput } from '@/components/common/input/' // Importamos el componente reutilizable
import { type ICameraSettings } from '@/interfaces/scene-settings/scene-settings.interface'

import useEditArticleStore from '@/contexts/article/get'

import { UpdateSceneByArticleId } from '@/lib/sceneSettings/updateScene'

const CameraMenu: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  if (article == null) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cameraSettings, setCameraSettings] = useState<ICameraSettings>(
    article.sceneSettings.cameraSettings
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ICameraSettings
  ): void => {
    const value = parseFloat(e.target.value) // Convertimos el valor a número
    setCameraSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value
    }))

    // Actualizamos el artículo con los nuevos valores de la cámara
    updateArticle({
      ...article,
      sceneSettings: {
        ...article.sceneSettings,
        cameraSettings: {
          ...cameraSettings,
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
      <div className="flex flex-col gap-4">
        {/* Campo para FOV */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            FOV (Field of View):
          </label>
          <PrincipalInput
            value={cameraSettings.fov}
            placeholder="FOV"
            Icon={Expand} // Pasamos el ícono como prop
            onChange={(e) => {
              handleInputChange(e, 'fov')
            }}
            onBlur={handleOnBlur}
          />
        </div>

        {/* Campo para Near */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Near:
          </label>
          <PrincipalInput
            value={cameraSettings.near}
            placeholder="Near"
            Icon={ZoomIn} // Pasamos el ícono como prop
            onChange={(e) => {
              handleInputChange(e, 'near')
            }}
            onBlur={handleOnBlur}
          />
        </div>

        {/* Campo para Far */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Far:
          </label>
          <PrincipalInput
            value={cameraSettings.far}
            placeholder="Far"
            Icon={ZoomOut} // Pasamos el ícono como prop
            onChange={(e) => {
              handleInputChange(e, 'far')
            }}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
    </section>
  )
}

export default CameraMenu
