/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React, { useState } from 'react'
import TabMenu from './tabs/TabMenu'

import {
  CameraMenu,
  GridMenu,
  ModelMenu,
  TransformationMenu,
  UnavailableMenu
} from './tab-content'

import useEditArticleStore from '@/contexts/article/get'

interface MenuProps {
  className?: string
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className } = props
  const { article } = useEditArticleStore()

  if (article == null) {
    return (
      <div>
        <h1>Article not found</h1>
      </div>
    )
  }

  // Definir tabContent solo si sceneSettings está disponible
  const tabContent: Record<string, JSX.Element> = {
    Transformaciones: <TransformationMenu />,
    Camara: <CameraMenu />,
    Grid: <GridMenu />,
    Modelo: <ModelMenu />
  }

  const tabs = Object.keys(tabContent)

  const [activeTab, setActiveTab] = useState<string>(tabs[0])

  return (
    <section className={`w-full ${className} `}>
      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-2 transition-opacity duration-300 ease-in-out">
        {tabContent[activeTab] || <UnavailableMenu />}
      </div>
    </section>
  )
}

export default Menu
