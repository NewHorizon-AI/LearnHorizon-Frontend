import { type IModel } from '@/interfaces/model/model.interface'

export interface IFileState {
  file: IModel | null
  setFile: (model: IModel) => void
  resetFile: () => void
}
