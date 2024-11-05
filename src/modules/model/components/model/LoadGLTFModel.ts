import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type * as THREE from 'three'

const LoadGLTFModel = async (modelData: ArrayBuffer): Promise<THREE.Group> => {
  // Verificar que modelData es un ArrayBuffer válido
  if (!(modelData instanceof ArrayBuffer) || modelData.byteLength === 0) {
    throw new Error(
      'El modelo proporcionado no es un ArrayBuffer válido o está vacío'
    )
  }

  return await new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    try {
      loader.parse(
        modelData,
        '',
        (gltf) => {
          resolve(gltf.scene)
        },
        (error) => {
          console.error('Error al cargar el modelo GLTF:', error.message)
          reject(error)
        }
      )
    } catch (error) {
      console.error('Error en la carga y parseo del modelo GLTF:', error)
      reject(error)
    }
  })
}

export default LoadGLTFModel
