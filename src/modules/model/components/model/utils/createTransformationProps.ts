import {
  type TransformationProps,
  type CustomTransformationProps
} from '../interfaces/transformation.interface'
import defaultTransformationsProps from './defaultTransformationProps'

export function createTransformationsPops(
  customProps: Partial<CustomTransformationProps>
): TransformationProps {
  return {
    position: {
      ...defaultTransformationsProps.position,
      ...customProps.position
    },
    rotation: {
      ...defaultTransformationsProps.rotation,
      ...customProps.rotation
    },
    scale: {
      ...defaultTransformationsProps.scale,
      ...customProps.scale
    }
  }
}
