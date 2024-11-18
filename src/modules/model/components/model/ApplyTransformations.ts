import * as THREE from 'three'
import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'

const ApplyTransformations = (
  model: THREE.Object3D, // Cambiado a Object3D para mayor flexibilidad
  transformations: ITransformationsSettings = {
    position: ['0', '0', '0'],
    rotation: ['0', '0', '0'],
    scale: ['0', '0', '0']
  }
): void => {
  const {
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [0, 0, 0]
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  } = transformations || {}

  // Aplicar la posición, rotación y escala usando los valores de los arrays, con valores predeterminados de 0
  model.position.set(
    Number(position[0]),
    Number(position[1]),
    Number(position[2])
  )

  model.rotation.set(
    THREE.MathUtils.degToRad(Number(rotation[0])), // X
    THREE.MathUtils.degToRad(Number(rotation[1])), // Y
    THREE.MathUtils.degToRad(Number(rotation[2])) // Z
  )

  model.scale.set(Number(scale[0]), Number(scale[1]), Number(scale[2]))
}

export default ApplyTransformations
