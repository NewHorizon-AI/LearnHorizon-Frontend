import {
  type CameraProps,
  type CustomCameraProps
} from '../interfaces/camera.interface'
import defaultCameraProps from './defaultCameraProps'

export function createCameraProps(
  customProps: Partial<CustomCameraProps>
): CameraProps {
  return {
    ...defaultCameraProps,
    ...customProps,
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
