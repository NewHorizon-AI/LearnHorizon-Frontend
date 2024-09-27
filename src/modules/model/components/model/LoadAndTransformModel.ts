/* eslint-disable @typescript-eslint/explicit-function-return-type */
import LoadGLTFModel from './LoadGLTFModel'
import ApplyTransformations from './ApplyTransformations'

import { type TransformationProps } from './interfaces/transformation.interface'
import { createTransformationsPops } from './utils/createTransformationProps'

const LoadAndTransformModel = async (
  model: ArrayBuffer,
  customTransformationProps: Partial<TransformationProps>
) => {
  const transformationProps = createTransformationsPops(
    customTransformationProps
  )

  const modelLoaded = await LoadGLTFModel(model)
  ApplyTransformations(modelLoaded, transformationProps)
  return modelLoaded
}

export default LoadAndTransformModel
