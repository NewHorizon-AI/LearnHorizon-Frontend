import { create } from 'zustand'
import { type IFileState } from './interfaces/model-store.interface'
import { createFileActions } from './utils/model-actions'

const useModelStore = create<IFileState>((set) => {
  const { setFile, resetFile } = createFileActions(set)

  return {
    file: null,
    setFile,
    resetFile
  }
})

export default useModelStore
