import type * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const LoadModel = async (modelData: ArrayBuffer): Promise<THREE.Group> => {
  return await new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.parse(
      modelData,
      '',
      (gltf) => {
        const model = gltf.scene
        model.scale.set(1, 1, 1)
        model.position.set(0, 0, 0)
        resolve(model)
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export default LoadModel
