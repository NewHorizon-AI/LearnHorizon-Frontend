import { type IUser } from '@/interfaces/IBackend'
export interface IUserState {
  user: IUser | null
  isLoggedIn: boolean
  setUser: (model: IUser) => void
  resetUser: () => void
  updateUser: (updates: Partial<IUser>) => void
}
