import { type IUserWithoutPassword } from '@/interfaces/user/user.interface'

export interface IUserState {
  user: IUserWithoutPassword | null
  setUser: (model: IUserWithoutPassword) => void
  resetUser: () => void
}
