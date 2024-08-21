import { type IUser } from '@/interfaces/IBackend'

export const createFileActions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param user: IUser - Usuario a manipular
   */

  setUser: (user: IUser) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, user, isLoggedIn: user !== null }))
  },
  updateUser: (updates: Partial<IUser>) => {
    set((state: any) => ({
      user: { ...state.user, ...updates }
    }))
  },
  resetFile: () => {
    set((state: any) => ({ ...state.user, user: null, isLoggedIn: false }))
  }
})
