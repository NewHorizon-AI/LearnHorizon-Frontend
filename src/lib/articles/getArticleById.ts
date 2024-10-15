import useEditArticleStore from '@/contexts/article/get'
import { type IArticle } from '@/interfaces/article/article.interface'

export const fetchArticle = async (articleId: string): Promise<void> => {
  const { setArticle } = useEditArticleStore.getState()

  const response: IArticle = await (
    await fetch(`/api/articles/${articleId}`)
  ).json()

  setArticle(response)
}
