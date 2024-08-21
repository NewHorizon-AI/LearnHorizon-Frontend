import { create } from 'zustand'

import { type IUserState } from './interfaces/user-store.interface'

import { createFileActions } from './actions/user.actions'

const useModelStore = create<IUserState>((set) => {
  const { setUser, resetUser, updateUser } = createFileActions(set)

  return {
    user: null,
    isLoggedIn: false,
    setUser,
    updateUser,
    resetUser
  }
})

export default useModelStore
