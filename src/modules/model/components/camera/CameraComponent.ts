import * as THREE from 'three'

// * Encargado de crear la instancia de la cámara.

import { type CameraProps } from './camera.interface'

const CreateCamera = (cameraProps: CameraProps): THREE.PerspectiveCamera => {
  const { width, height } = cameraProps

  // * Variables de la cámara.
  const fov = 60 // Campo de visión.
  const aspect = width / height // Relación de aspecto.
  const near = 0.1 // Distancia más cercana.
  const far = 1000 // Distancia más lejana.

  // * Instancia de la cámara.
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  // const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);

  // * Posición de la cámara.
  camera.position.z = 5
  // camera.position.y = 1
  // camera.position.x = 1

  // perspectiveCamera.position.set(0, 0, 5); // x, y, z

  // * Rotación de la cámara.
  // camera.rotation.x = 0.5

  // * Orientación de la cámara.
  // camera.lookAt(new THREE.Vector3(0, 0, 0)) // Mirar al centro de la escena.

  return camera
}

export default CreateCamera
