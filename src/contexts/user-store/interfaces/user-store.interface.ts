import { type IUser } from '@/interfaces/user/user.interface'

export interface IUserState {
  user: IUser | null
  isLoggedIn: boolean
  setUser: (model: IUser) => void
  resetUser: () => void
  updateUser: (updates: Partial<IUser>) => void
}
