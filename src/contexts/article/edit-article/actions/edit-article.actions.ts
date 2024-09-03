import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const actions = (set: any): any => ({
  /*
   * Funcion encargada de la manipulacion de los datos de un usuario
   @ Param article: IArticleComposite - Articulo a manipular
   */

  setArticle: (article: IArticleComposite) => {
    // * Se setea el archivo en el store

    set((state: any) => ({ ...state, article }))
  },
  updateArticle: (updates: Partial<IArticleComposite>) => {
    set((state: any) => ({
      article: { ...state.article, ...updates }
    }))
  },
  resetArticle: () => {
    set((state: any) => ({ ...state.article, article: null }))
  }
})
