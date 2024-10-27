import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// * Importar interfaces
import { type IEditArticleState } from './interfaces/edit-article.interface'

// * Importar los actions
import { actions } from './actions/edit-article.actions'

const useEditArticleStore = create<IEditArticleState>()(
  persist(
    (set) => {
      const { setArticle, resetArticle, updateArticle } = actions(set)
      return {
        article: null,
        setArticle,
        updateArticle,
        resetArticle
      }
    },
    {
      name: 'article-storage'
    }
  )
)

export default useEditArticleStore
