import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type * as THREE from 'three'

export default function loadModel(scene: THREE.Scene): void {
  const loader = new GLTFLoader()
  loader.load(
    '/assets/models/model1.gltf',
    (gltf: GLTF) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      scene.add(gltf.scene)
    },
    undefined,
    (error: any) => {
      console.error('An error occurred while loading the model:', error)
    }
  )
}
