import { useState } from 'react'
import {
  type ISceneSettings,
  type IVector3,
  type ICameraSettings,
  type IGridSettings,
  type IModelSettings,
  type ITransformationsSettings
} from '@/interfaces/scene-settings/scene-settings.interface'

const initialVector3: IVector3 = { x: 0, y: 0, z: 0 }

const useSceneSettings = () => {
  const initialCameraSettings: ICameraSettings = {
    _id: '1',
    fov: 60,
    near: 0.5,
    far: 500,
    position: initialVector3,
    lookAt: initialVector3,
    rotation: initialVector3,
    cameraType: 'perspective',
    __v: 0
  }

  const initialGridSettings: IGridSettings = {
    _id: '1',
    backgroundColor: '#ffffff',
    size: 20,
    divisions: 15,
    activarEjes: 'XY',
    gridVisible: true,
    gridOpacity: 1,
    __v: 0
  }

  const initialModelSettings: IModelSettings = {
    _id: '1',
    visible: true,
    __v: 0
  }

  const initialTransformationsSettings: ITransformationsSettings = {
    _id: '1',
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    __v: 0
  }

  const [sceneSettings, setSceneSettings] = useState<ISceneSettings>({
    _id: '1',
    cameraSettings: initialCameraSettings,
    gridSettings: initialGridSettings,
    modelSettings: initialModelSettings,
    transformationsSettings: initialTransformationsSettings,
    __v: 0
  })

  const updateSettings = (
    section: keyof ISceneSettings,
    key: string,
    value: any
  ) => {
    setSceneSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
  }

  return { sceneSettings, updateSettings }
}

export default useSceneSettings
