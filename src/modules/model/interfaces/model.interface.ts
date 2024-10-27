import type * as THREE from 'three'
import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'

export interface ModelModuleViewProps {
  className?: string
  viewMode: 'edit' | 'view'
  sceneSettings?: ISceneSettings
  model: ArrayBuffer | undefined
}

export interface ModelViewProps
  extends Omit<ModelModuleViewProps, 'viewMode'> {}

export interface ModelViewState {
  isLoading: boolean
  showControlPanel: boolean
  cameraPosition: THREE.Vector3
  modelPosition: THREE.Vector3
  transformations: any
}
