import { type IUserWithoutPassword } from '@/interfaces/user/user.interface'

export const createFileActions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param user: IUser - Usuario a manipular

   TODO: Cambiar la interfaz de user por IUserWithoutPassword
   */

  setUser: (user: IUserWithoutPassword) => {
    set((state: any) => ({ ...state, user, isLoggedIn: user !== null }))
  },
  resetUser: () => {
    set((state: any) => ({ ...state.user, user: null, isLoggedIn: false }))
  }
})
