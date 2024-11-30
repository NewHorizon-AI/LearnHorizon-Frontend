/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState, useEffect } from 'react'
import { PrincipalInput } from '@/components/common/input'

import { RotateCcw, Move, Maximize } from 'lucide-react'

import useEditArticleStore from '@/contexts/article/get'
import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'

import { UpdateSceneByArticleId } from '@/lib/sceneSettings/updateScene'

// TODO Hacer Responsivo

const TransformationMenu: React.FC = () => {
  const { article, updateArticle } = useEditArticleStore()

  if (article == null) return null

  const [transformationsSettings, setTransformationsSettings] =
    useState<ITransformationsSettings>()

  useEffect(() => {
    setTransformationsSettings(article.sceneSettings?.transformationsSettings)
  }, [article])

  const handleInputChange = (
    type: 'position' | 'rotation' | 'scale',
    axis: number,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value

    const isValidNumber = /^(\s*-?\d+)?.?(\d+)?$/.test(value)
    const cleanedInput = value.trim().replace(/\s+/g, ' ')

    if (!isValidNumber) {
      alert('Por favor, ingrese un número válido')
      return
    }

    if (transformationsSettings == null) return

    const updatedTransformations = {
      ...transformationsSettings,
      [type]: [...transformationsSettings[type]]
    }

    updatedTransformations[type][axis] = cleanedInput

    setTransformationsSettings(updatedTransformations)
  }

  const handleOnBlur = (): void => {
    const updateSceneSettings = async (): Promise<void> => {
      await UpdateSceneByArticleId(article._id, article.sceneSettings)
    }

    updateSceneSettings().catch((error) => {
      console.error(error.message)
    })

    updateArticle({
      sceneSettings: {
        ...article.sceneSettings,
        transformationsSettings:
          transformationsSettings ??
          article.sceneSettings.transformationsSettings
      }
    })
  }

  return (
    <section className="mb-6">
      {/* Position */}
      <div>
        <label>Posición</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.position[0]}
              placeholder="0"
              Icon={Move}
              onChange={(e) => {
                handleInputChange('position', 0, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.position[1]}
              placeholder="0"
              Icon={Move}
              onChange={(e) => {
                handleInputChange('position', 1, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.position[2]}
              placeholder="0"
              Icon={Move}
              onChange={(e) => {
                handleInputChange('position', 2, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
      </div>

      {/* Rotation */}
      <div className="mt-4">
        <label>Rotación</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[0]}
              placeholder="0"
              Icon={RotateCcw}
              onChange={(e) => {
                handleInputChange('rotation', 0, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[1]}
              placeholder="0"
              Icon={RotateCcw}
              onChange={(e) => {
                handleInputChange('rotation', 1, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[2]}
              placeholder="0"
              Icon={RotateCcw}
              onChange={(e) => {
                handleInputChange('rotation', 2, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
      </div>

      {/* Scale */}
      <div className="mt-4">
        <label>Escala</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.scale[0]}
              placeholder="0"
              Icon={Maximize}
              onChange={(e) => {
                handleInputChange('scale', 0, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.scale[1]}
              placeholder="0"
              Icon={Maximize}
              onChange={(e) => {
                handleInputChange('scale', 1, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.scale[2]}
              placeholder="0"
              Icon={Maximize}
              onChange={(e) => {
                handleInputChange('scale', 2, e)
              }}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformationMenu
