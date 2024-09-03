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
      name: 'article-storage' // Nombre de la clave en localStorage
    }
  )
)

export default useEditArticleStore

// ({
//       article: null,
//       setArticle: (article) => {
//         set({ article })
//       },
//       resetArticle: () => {
//         set({ article: null })
//       }
//     }),
//     {
//       name: 'article-storage', // nombre del item en el almacenamiento local
//       getStorage: () => localStorage // especifica dónde se almacena el estado
//     }
//   )
