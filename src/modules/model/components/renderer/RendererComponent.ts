import * as THREE from 'three'

const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  return renderer
}

export default createRenderer
