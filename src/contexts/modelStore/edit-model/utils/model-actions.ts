import type { IModel } from '@/interfaces/model/model.interface'

export const createFileActions = (set: any): any => ({
  /*
   * Funcion encargada de setear el archivo en el store
   @param {IFileGltf} file - Archivo a setear
   TODO: Evitar el uso de any en la definición de la función y en el parámetro de entrada, ademas de las funciones set y resetFile

   */

  setFile: (model: IModel) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, model }))
  },
  resetFile: () => {
    set((state: any) => ({ ...state.model, file: null }))
  }
})
