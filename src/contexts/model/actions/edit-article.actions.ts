import { type IModel } from '@/interfaces/model/model.interface'

export const actions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param article: IModel - Articulo a manipular
   */

  setModel: (model: IModel) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, model, isModelLoaded: model !== null }))
  },
  updateModel: (updates: Partial<IModel>) => {
    set((state: any) => ({
      model: { ...state.model, ...updates }
    }))
  },
  resetModel: () => {
    set((state: any) => ({ ...state.model, model: null, isModelLoaded: false }))
  }
})
