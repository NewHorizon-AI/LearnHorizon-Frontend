import { type IUser } from '@/interfaces/IBackend'

export const createFileActions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param user: IUser - Usuario a manipular
   */

  setUser: (user: IUser) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, user }))
  },
  resetFile: () => {
    set((state: any) => ({ ...state.user, file: null }))
  }
})
