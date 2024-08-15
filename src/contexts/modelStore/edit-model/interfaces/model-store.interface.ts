import { type IModel } from '@/interfaces/model/model.interface'

export interface IModelState {
  model: IModel | null
  setFile: (model: IModel) => void
  resetFile: () => void
}
