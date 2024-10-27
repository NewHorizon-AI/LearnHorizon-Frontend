import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'

export interface TransformationProps extends ITransformationsSettings {}

export interface CustomTransformationProps
  extends Partial<ITransformationsSettings> {}
