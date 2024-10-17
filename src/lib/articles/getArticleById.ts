import { type IArticle } from '@/interfaces/article/article.interface'

export const getArticleById = async (articleId: string): Promise<IArticle> => {
  const response: IArticle = await (
    await fetch(`/api/articles/${articleId}`)
  ).json()

  return response
}
