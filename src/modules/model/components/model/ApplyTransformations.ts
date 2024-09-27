/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type * as THREE from 'three'
import { type TransformationProps } from './interfaces/transformation.interface'

const ApplyTransformations = (
  model: THREE.Group,
  transformations: TransformationProps
) => {
  const { position, rotation, scale } = transformations

  model.position.set(position.x, position.y, position.z)
  model.rotation.set(rotation.x, rotation.y, rotation.z)
  model.scale.set(scale.x, scale.y, scale.z)
}

export default ApplyTransformations
