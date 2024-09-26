import * as THREE from 'three'

// * Encargado de crear la instancia de la cámara.

import { type CustomCameraProps } from './interfaces/camera.interface'
import { createCameraProps } from './utils/createCameraProps'

const CreateCamera = (
  customCameraProps: Partial<CustomCameraProps>
): THREE.PerspectiveCamera => {
  const cameraProps = createCameraProps(customCameraProps)

  const { width, height, fov, near, far, position, rotation, lookAt } =
    cameraProps

  // * Variables de la cámara.
  const aspect = width / height // Relación de aspecto.

  // * Instancia de la cámara.
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  // const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);

  // * Posición de la cámara.
  camera.position.set(position.x, position.y, position.z)

  // * Rotación de la cámara.
  camera.rotation.set(rotation.x, rotation.y, rotation.z)

  // * Orientación de la cámara.
  camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z)) // Mirar al centro de la escena (u otra posición definida).

  // perspectiveCamera.position.set(0, 0, 5); // x, y, z

  return camera
}

export default CreateCamera
