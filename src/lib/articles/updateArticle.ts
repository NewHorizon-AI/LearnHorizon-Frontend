/* eslint-disable @typescript-eslint/no-unused-vars */
import { type IArticle } from '@/interfaces/article/article.interface'

export const updateArticleById = async (
  articleId: string | undefined,
  article: IArticle
): Promise<IArticle> => {
  try {
    const { sceneSettings, users, categories, ...rest } = article

    const response = await fetch(`/api/articles/${articleId}/patch`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rest)
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const updatedArticle: IArticle = await response.json()

    return updatedArticle
  } catch (error: any) {
    console.error(error.message)
    throw error
  }
}
