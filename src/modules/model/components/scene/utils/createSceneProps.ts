import {
  type SceneConfigProps,
  type CustomSceneConfigProps
} from '../interfaces/scene.interface'
import defaultSceneConfig from './defaultSceneProps'

export function createSceneConfigProps(
  customProps: Partial<CustomSceneConfigProps>
): SceneConfigProps {
  return {
    ...defaultSceneConfig,
    ...customProps,
    activarEjes: {
      ...defaultSceneConfig.activarEjes,
      ...customProps.activarEjes
    },
    axisColors: {
      ...defaultSceneConfig.axisColors,
      ...customProps.axisColors
    },
    gridPosition: {
      ...defaultSceneConfig.gridPosition,
      ...customProps.gridPosition
    },
    gridRotation: {
      ...defaultSceneConfig.gridRotation,
      ...customProps
    }
  }
}
