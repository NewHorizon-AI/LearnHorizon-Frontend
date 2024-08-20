import { create } from 'zustand'
import { type IModelState } from './interfaces/model-store.interface'
import { createFileActions } from './utils/model-actions'

const useModelStore = create<IModelState>((set) => {
  const { setFile, resetFile } = createFileActions(set)

  return {
    model: null,
    setFile,
    resetFile
  }
})

export default useModelStore
