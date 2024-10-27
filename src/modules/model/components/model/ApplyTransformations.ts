import type * as THREE from 'three'
import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'

const ApplyTransformations = (
  model: THREE.Object3D, // Cambiado a Object3D para mayor flexibilidad
  transformations: ITransformationsSettings
): void => {
  const { position, rotation, scale } = transformations

  // Aplicar la posición, rotación y escala usando los valores de los arrays
  model.position.set(position[0], position[1], position[2])
  model.rotation.set(rotation[0], rotation[1], rotation[2])
  model.scale.set(scale[0], scale[1], scale[2])
}

export default ApplyTransformations
