import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'
import React from 'react'

interface ArticleModelViewProps {
  className?: string
  sceneSettings?: ISceneSettings
  model: ArrayBuffer | undefined
}

const ArticleModelView: React.FC<ArticleModelViewProps> = () => {
  return <div>ArticleModelView</div>
}

export default ArticleModelView
