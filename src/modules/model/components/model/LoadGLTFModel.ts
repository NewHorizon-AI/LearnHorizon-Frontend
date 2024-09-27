import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type * as THREE from 'three'

const LoadGLTFModel = async (modelData: ArrayBuffer): Promise<THREE.Group> => {
  return await new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.parse(
      modelData,
      '',
      (gltf) => {
        resolve(gltf.scene)
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export default LoadGLTFModel
