import defaultCameraPropsJson from '../config/defaultCameraProps.json'
import { type CameraProps } from '../interfaces/CameraConfig.interface'

// Carga y devuelve las propiedades por defecto desde el archivo JSON
const loadDefaultCameraProps = (): CameraProps => {
  return defaultCameraPropsJson as CameraProps
}

export default loadDefaultCameraProps
