import * as THREE from 'three'

// * Componentes de la escena
import CreateBackground from './CreateBackground'
import CreateCartesianGrid from './CreateCartesianGrid'
import CreateGrid from './CreateGrid'

import { type CustomSceneConfigProps } from './interfaces/scene.interface'
import { createSceneConfigProps } from './utils/createSceneProps'

const SetupScene = (
  customProps: Partial<CustomSceneConfigProps>
): THREE.Scene => {
  // TODO: Este componente necesita recibir una estructura de datos que contenga los distintos parámetros de la escena.

  const sceneProps = createSceneConfigProps(customProps)

  const scene = new THREE.Scene()

  CreateBackground(scene, sceneProps.backgroundColor)
  CreateCartesianGrid(scene) // Añadir la grilla cartesiana
  CreateGrid(scene, sceneProps) // Añadir la grilla

  return scene
}

export default SetupScene
