import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type IUserState } from './interfaces/user-store.interface'
import { actions } from './actions/user.actions'

const useUserStore = create<IUserState>()(
  persist(
    (set) => {
      const { setUser, resetUser, updateUser } = actions(set)
      return {
        user: null,
        isLoggedIn: false,
        setUser,
        updateUser,
        resetUser
      }
    },
    {
      name: 'user-storage' // Nombre de la clave en localStorage
    }
  )
)

export default useUserStore
