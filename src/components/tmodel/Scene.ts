import * as THREE from 'three'

interface SceneSetup {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
}

export default function createScene(): SceneSetup {
  const scene = new THREE.Scene()

  // Crear cámara
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  // Agregar luces
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 5, 5).normalize()
  scene.add(light)

  return { scene, camera }
}
