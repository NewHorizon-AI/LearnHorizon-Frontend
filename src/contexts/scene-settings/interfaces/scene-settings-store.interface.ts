import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'

export interface ISceneSettingsState {
  sceneSettings: ISceneSettings | null
  isSeceneSettingsLoaded: boolean
  setSceneSettings: (sceneSettings: ISceneSettings) => void
  resetSceneSettings: () => void
  updateSceneSettings: (updates: Partial<ISceneSettings>) => void
}
