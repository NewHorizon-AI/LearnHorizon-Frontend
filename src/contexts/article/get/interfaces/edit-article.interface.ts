import { type IArticle } from '@/interfaces/article/article.interface'

export interface IEditArticleState {
  article: IArticle | null
  setArticle: (article: IArticle) => void
  resetArticle: () => void
  updateArticle: (updates: Partial<IArticle>) => void
}
