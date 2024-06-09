/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GLTFLoader } from 'three-stdlib'
import * as THREE from 'three'

export default function loadModel(scene: THREE.Scene): void {
  const loader = new GLTFLoader()
  loader.load(
    '/assets/models/model1.gltf',
    (gltf: { scene: THREE.Object3D<THREE.Object3DEventMap> }) => {
      scene.add(gltf.scene)
    }
  )
}
