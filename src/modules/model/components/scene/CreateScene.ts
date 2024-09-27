import * as THREE from 'three'
import CreateBackground from './CreateBackground'
// import CreateGrid from './CreateGrid'

const CreateScene = (): THREE.Scene => {
  const scene = new THREE.Scene()

  CreateBackground(scene, 0xffffff) // Fondo azul claro
  // CreateGrid(scene) // Añadir la grilla

  return scene
}

export default CreateScene
