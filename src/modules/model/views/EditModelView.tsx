import React from 'react'

import { ModelView } from './'
import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'

interface EditModelViewProps {
  className?: string
  sceneSettings?: ISceneSettings
  model: ArrayBuffer | undefined
}

const EditModelView: React.FC<EditModelViewProps> = (props) => {
  const { className = '', model, sceneSettings } = props

  return (
    <div className={`${className} w-full h-full`}>
      <ModelView model={model} sceneSettings={sceneSettings} />
    </div>
  )
}

export default EditModelView
