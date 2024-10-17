import * as THREE from 'three'

const SetupRenderer = (width: number, height: number): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)

  const isHighPerformanceDevice = window.devicePixelRatio <= 1.5 // Simplificación para este ejemplo
  renderer.setPixelRatio(isHighPerformanceDevice ? window.devicePixelRatio : 1)

  renderer.shadowMap.enabled = false

  return renderer
}

export default SetupRenderer
