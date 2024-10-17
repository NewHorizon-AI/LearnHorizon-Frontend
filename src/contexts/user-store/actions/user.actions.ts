import { type IUser } from '@/interfaces/IBackend'

export const actions = (set: any): any => ({
  setUser: (user: IUser) => {
    set((state: any) => ({ ...state, user, isLoggedIn: user !== null }))
  },
  updateUser: (updates: Partial<IUser>) => {
    set((state: any) => ({
      ...state,
      user: { ...state.user, ...updates },
      isLoggedIn: updates !== null
    }))
  },
  resetUser: () => {
    set((state: any) => ({ ...state.user, user: null, isLoggedIn: false }))
  }
})
