import type * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const OrbitControlManager = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer
): OrbitControls => {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()
  return controls
}

export default OrbitControlManager
