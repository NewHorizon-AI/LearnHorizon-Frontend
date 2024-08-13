import { create } from 'zustand'
import { type IArticleComposite } from '@/interfaces/article/article.interface'

interface ArticleState {
  article: IArticleComposite | null
  setArticle: (article: IArticleComposite) => void
  resetArticle: () => void
}

const useArticleStore = create<ArticleState>((set) => ({
  article: null,
  setArticle: (article) => {
    set(() => ({ article }))
  },
  resetArticle: () => {
    set(() => ({ article: null }))
  }
}))

export default useArticleStore
