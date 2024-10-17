import * as THREE from 'three'
import { type CustomCameraProps } from './interfaces/CameraConfig.interface'
import { createCameraProps } from './utils/createCameraProps'

// * Encargado de crear la instancia de la cámara.
const CreatePerspectiveCamera = (
  customCameraProps: Partial<CustomCameraProps>
): THREE.PerspectiveCamera => {
  const cameraProps = createCameraProps(customCameraProps) // Unir props por defecto y personalizados

  const { width, height, fov, near, far, position, rotation, lookAt } =
    cameraProps

  // * Variables de la cámara.
  const aspect = width / height // Relación de aspecto.

  // * Instancia de la cámara (Perspectiva por defecto, puedes adaptar para ortográfica si necesitas).
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  // * Posición de la cámara.
  camera.position.set(position.x, position.y, position.z)

  // * Rotación de la cámara.
  camera.rotation.set(rotation.x, rotation.y, rotation.z)

  // * Orientación de la cámara.
  camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z)) // Mirar al centro de la escena (u otra posición definida).

  return camera
}

export default CreatePerspectiveCamera
