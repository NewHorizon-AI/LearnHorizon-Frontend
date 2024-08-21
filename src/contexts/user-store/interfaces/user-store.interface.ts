import { type IUser } from '@/interfaces/IBackend'
export interface IUserState {
  user: IUser | null
  setUser: (model: IUser) => void
  resetUser: () => void
}
