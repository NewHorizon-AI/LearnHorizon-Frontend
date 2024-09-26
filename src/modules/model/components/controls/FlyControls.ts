import type * as THREE from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const CreateFlyControls = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer
): FlyControls => {
  const controls = new FlyControls(camera, renderer.domElement)

  // Configurar las propiedades del control según tus necesidades
  controls.movementSpeed = 1 // Velocidad de movimiento
  controls.rollSpeed = 0.005 // Velocidad de rotación
  controls.dragToLook = false // Permite mirar alrededor arrastrando el mouse
  controls.autoForward = false // Movimiento automático hacia adelante

  controls.update()

  return controls
}

export default CreateFlyControls
