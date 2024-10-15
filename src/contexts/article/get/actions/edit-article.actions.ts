import { type IArticle } from '@/interfaces/article/article.interface'

export const actions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param article: IArticle - Articulo a manipular
   */

  setArticle: (article: IArticle) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, article }))
  },
  updateArticle: (updates: Partial<IArticle>) => {
    set((state: any) => ({
      article: { ...state.article, ...updates }
    }))
  },
  resetArticle: () => {
    set((state: any) => ({ ...state.article, article: null }))
  }
})
