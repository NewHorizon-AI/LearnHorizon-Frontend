import { type IModel } from '@/interfaces/model/model.interface'

export interface IEditModelState {
  model: IModel | null
  setModel: (model: IModel) => void
  resetModel: () => void
  updateModel: (updates: Partial<IModel>) => void
}
