import {
  type CameraProps,
  type CustomCameraProps
} from '../interfaces/CameraConfig.interface'

import loadDefaultCameraProps from './loadDefaultCameraProps'
// * Encargado de combinar las propiedades por defecto con las personalizadas
export function createCameraProps(
  customProps: Partial<CustomCameraProps>
): CameraProps {
  const defaultCameraProps = loadDefaultCameraProps()

  return {
    ...defaultCameraProps, // Props por defecto
    ...customProps, // Props personalizadas sobrescriben las por defecto
    position: {
      ...defaultCameraProps.position,
      ...customProps.position
    },
    rotation: {
      ...defaultCameraProps.rotation,
      ...customProps.rotation
    },
    lookAt: {
      ...defaultCameraProps.lookAt,
      ...customProps.lookAt
    }
  }
}
