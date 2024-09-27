import type * as THREE from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const CreateFlyControls = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer
): FlyControls => {
  const controls = new FlyControls(camera, renderer.domElement)

  // Configuración de controles
  controls.movementSpeed = 10 // Aumentar la velocidad de movimiento para que sea más instantáneo
  controls.rollSpeed = 1 // Ajustar la velocidad de rotación
  controls.dragToLook = true // Permite mover la cámara con el mouse

  return controls
}

export default CreateFlyControls
