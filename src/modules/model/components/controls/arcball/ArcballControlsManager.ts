import type * as THREE from 'three'
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js'

const ArcballControlsManager = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene
): ArcballControls => {
  const controls = new ArcballControls(camera, renderer.domElement, scene)
  controls.update() // Actualizar el control
  return controls
}

export default ArcballControlsManager
