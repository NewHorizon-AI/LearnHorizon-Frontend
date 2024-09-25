import { type CameraProps } from '../interfaces/camera.interface'

const defaultCameraProps: CameraProps = {
  width: 800,
  height: 600,
  fov: 75,
  near: 0.1,
  far: 1000,
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    x: 0,
    y: 0,
    z: 0
  },
  lookAt: {
    x: 0,
    y: 0,
    z: 0
  }
}

export default defaultCameraProps
