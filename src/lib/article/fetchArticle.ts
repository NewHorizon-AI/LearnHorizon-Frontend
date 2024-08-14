import useArticleStore from '@/contexts/article/edit-article/useArticleStore'
import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const fetchArticle = async (articleId: string): Promise<void> => {
  try {
    console.log(`/api/article/${articleId}`)
    const response = await fetch(`/api/article/${articleId}`)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const article: IArticleComposite = data
    useArticleStore.getState().setArticle(article)
  } catch (error: any) {
    console.error('Error fetching article:', error.message)
    throw error
  }
}
