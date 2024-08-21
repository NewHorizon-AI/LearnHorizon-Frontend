import useArticleStore from '@/contexts/article/edit-article/useArticleStore'
import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const fetchArticle = async (articleId: string): Promise<void> => {
  try {
    const response = await fetch(`/api/article/${articleId}`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()

    const article: IArticleComposite = data
    useArticleStore.getState().setArticle(article)
  } catch (error: any) {
    console.error('Error fetching article:', error.message)
    throw error
  }
}
