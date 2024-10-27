import type * as THREE from 'three'
import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'

const ApplyTransformations = (
  model: THREE.Object3D, // Cambiado a Object3D para mayor flexibilidad
  transformations: ITransformationsSettings
): void => {
  const { position, rotation, scale } = transformations

  // Aplicar la posición, rotación y escala usando los valores de los arrays
  model.position.set(
    Number(position[0]),
    Number(position[1]),
    Number(position[2])
  )
  model.rotation.set(
    Number(rotation[0]),
    Number(rotation[1]),
    Number(rotation[2])
  )
  model.scale.set(Number(scale[0]), Number(scale[1]), Number(scale[2]))
}

export default ApplyTransformations
