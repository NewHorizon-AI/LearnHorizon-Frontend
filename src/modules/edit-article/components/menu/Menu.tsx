/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React, { useState } from 'react'
import TabMenu from './tabs/TabMenu'

import {
  CameraMenu,
  GridMenu,
  ModelMenu,
  TransformationMenu
} from './tab-content'

import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'

interface MenuProps {
  sceneSettings?: ISceneSettings
  className?: string
}

const Menu: React.FC<MenuProps> = (props) => {
  const { sceneSettings, className } = props

  // Si sceneSettings no está definido, retornar null para evitar el renderizado
  if (!sceneSettings) {
    return null
  }

  // Definir tabContent solo si sceneSettings está disponible
  const tabContent: Record<string, JSX.Element> = {
    Transformaciones: (
      <TransformationMenu
        transformationsSettings={sceneSettings.transformationsSettings}
      />
    ),
    Camara: <CameraMenu cameraSettings={sceneSettings.cameraSettings} />,
    Grid: <GridMenu gridSettings={sceneSettings.gridSettings} />,
    Modelo: <ModelMenu modelSettings={sceneSettings.modelSettings} />
  }

  const tabs = Object.keys(tabContent)

  const [activeTab, setActiveTab] = useState<string>(tabs[0])

  return (
    <section className={`w-full ${className} `}>
      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-2 bg-white rounded-lg transition-opacity duration-300 ease-in-out text-gray-800">
        {tabContent[activeTab] || (
          <div>
            <h2 className="text-lg font-semibold">Contenido no disponible</h2>
            <p>
              Selecciona una pestaña válida para ver el contenido
              correspondiente.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
