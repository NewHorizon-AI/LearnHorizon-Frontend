import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export default function loadModel(scene: THREE.Scene): void {
  const loader = new GLTFLoader()
  loader.load('/assets/models/model1.gltf', (gltf) => {
    scene.add(gltf.scene)
  })
}
