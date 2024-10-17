import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// * Importar interfaces
import { type ISceneSettingsState } from './interfaces/scene-settings-store.interface'

// * Importar los actions
import { actions } from './actions/scene-settings.actions'

const useSceneSettingsStore = create<ISceneSettingsState>()(
  persist(
    (set) => {
      const { setSceneSettings, resetSceneSettings, updateSceneSettings } =
        actions(set)
      return {
        sceneSettings: null,
        isSeceneSettingsLoaded: false,
        setSceneSettings,
        updateSceneSettings,
        resetSceneSettings
      }
    },
    {
      name: 'sceneSettings-storage' // Nombre de la clave en localStorage
    }
  )
)

export default useSceneSettingsStore
