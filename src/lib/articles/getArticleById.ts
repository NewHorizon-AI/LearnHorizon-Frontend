import { type IArticle } from '@/interfaces/article/article.interface'

// TODO Extender la capacidad de la función para trabajar del lado del servidor

export const getArticleById = async (articleId: string): Promise<IArticle> => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL != null || 'http://localhost:3000'

  try {
    const response = await fetch(`${baseUrl}/api/articles/${articleId}`)

    if (!response.ok) {
      throw new Error('Failed to fetch article')
    }

    const article: IArticle = await response.json()

    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}
