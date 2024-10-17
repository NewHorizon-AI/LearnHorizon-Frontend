import { type ISceneSettings } from '../interfaces/scene-settings.interface'

export const actions = (set: any): any => ({
  setSceneSettings: (sceneSettings: ISceneSettings) => {
    set((state: any) => ({
      ...state,
      sceneSettings,
      isSceneSettingsLoaded: sceneSettings !== null
    }))
  },
  updateSceneSettings: (updates: Partial<ISceneSettings>) => {
    set((state: any) => ({
      ...state,
      sceneSettings: { ...state.sceneSettings, ...updates },
      isSceneSettingsLoaded: updates !== null
    }))
  },
  resetSceneSettings: () => {
    set((state: any) => ({
      ...state.sceneSettings,
      sceneSettings: null,
      isSceneSettingsLoaded: false
    }))
  }
})
