import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'
export interface ViewModelProps {
  sceneSettings?: ISceneSettings
  model: ArrayBuffer | undefined
}
