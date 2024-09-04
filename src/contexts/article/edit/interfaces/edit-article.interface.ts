import { type IArticleComposite } from '@/interfaces/article/article.interface'

export interface IEditArticleState {
  article: IArticleComposite | null
  setArticle: (article: IArticleComposite) => void
  resetArticle: () => void
  updateArticle: (updates: Partial<IArticleComposite>) => void
}
