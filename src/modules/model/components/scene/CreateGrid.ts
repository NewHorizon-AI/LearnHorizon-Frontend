import * as THREE from 'three'
import { type SceneConfigProps } from './interfaces/scene.interface'

const CreateGrid3D = (
  scene: THREE.Scene,
  sceneProps: SceneConfigProps
): void => {
  // Asignamos valores de sceneProps
  const {
    size,
    divisions,
    activarEjes,
    gridPosition,
    gridRotation,
    gridOpacity,
    gridVisible
  } = sceneProps

  const { X: activarEjeX, Y: activarEjeY, Z: activarEjeZ } = activarEjes

  // Color negro predeterminado para todas las grillas
  const gridColor = new THREE.Color(0x000000) // Negro

  // Mostrar el eje X si activarEjeX es true (Plano YZ)
  if (activarEjeX) {
    const gridYZ = new THREE.GridHelper(size, divisions, gridColor, gridColor) // Color negro
    gridYZ.rotation.z = Math.PI / 2 // Rotación para colocar la grilla en el plano YZ (eje X)
    gridYZ.position.set(gridPosition.x, gridPosition.y, gridPosition.z) // Establecer la posición
    gridYZ.rotation.set(
      THREE.MathUtils.degToRad(gridRotation.x),
      THREE.MathUtils.degToRad(gridRotation.y),
      THREE.MathUtils.degToRad(gridRotation.z)
    ) // Aplicar la rotación desde grados a radianes
    gridYZ.material.opacity = gridOpacity // Aplicar opacidad
    gridYZ.material.transparent = gridOpacity < 1 // Hacer el material transparente si hay opacidad menor a 1
    scene.add(gridYZ)
  }

  // Mostrar el eje Y si activarEjeY es true (Plano XZ)
  if (activarEjeY) {
    const gridXZ = new THREE.GridHelper(size, divisions, gridColor, gridColor) // Color negro
    gridXZ.rotation.x = Math.PI / 2 // Rotación para colocar la grilla en el plano XZ (eje Y)
    gridXZ.position.set(gridPosition.x, gridPosition.y, gridPosition.z) // Establecer la posición
    gridXZ.rotation.set(
      THREE.MathUtils.degToRad(gridRotation.x),
      THREE.MathUtils.degToRad(gridRotation.y),
      THREE.MathUtils.degToRad(gridRotation.z)
    ) // Aplicar la rotación desde grados a radianes
    gridXZ.material.opacity = gridOpacity // Aplicar opacidad
    gridXZ.material.transparent = gridOpacity < 1 // Hacer el material transparente si hay opacidad menor a 1
    scene.add(gridXZ)
  }

  // Mostrar el eje Z si activarEjeZ es true (Plano XY)
  if (activarEjeZ) {
    const gridXY = new THREE.GridHelper(size, divisions, gridColor, gridColor) // Color negro
    gridXY.position.set(gridPosition.x, gridPosition.y, gridPosition.z) // Establecer la posición
    gridXY.rotation.set(
      THREE.MathUtils.degToRad(gridRotation.x),
      THREE.MathUtils.degToRad(gridRotation.y),
      THREE.MathUtils.degToRad(gridRotation.z)
    ) // Aplicar la rotación desde grados a radianes
    gridXY.material.opacity = gridOpacity // Aplicar opacidad
    gridXY.material.transparent = gridOpacity < 1 // Hacer el material transparente si hay opacidad menor a 1
    scene.add(gridXY)
  }
}

export default CreateGrid3D
