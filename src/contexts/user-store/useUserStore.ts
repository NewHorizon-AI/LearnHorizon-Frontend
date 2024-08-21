import { create } from 'zustand'

import { type IUserState } from './interfaces/user-store.interface'

import { createFileActions } from './utils/model-actions'

const useModelStore = create<IUserState>((set) => {
  const { setUser, resetUser } = createFileActions(set)

  return {
    user: null,
    setUser,
    resetUser
  }
})

export default useModelStore
