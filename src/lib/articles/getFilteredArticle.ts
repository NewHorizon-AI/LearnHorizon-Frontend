import { type IArticle } from '@/interfaces/article/article.interface'

interface IProps {
  page?: number
  limit?: number
  sort?: string
  filters?: object
}

export const getFilteredArticle = async (
  props?: IProps
): Promise<IArticle[]> => {
  const { page = 1, limit = 10, sort = 'createdAt', filters = {} } = props ?? {}

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort
  })

  try {
    const response = await fetch(
      `/api/articles/search?${queryParams.toString()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filters })
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch article')
    }

    const article: IArticle[] = await response.json()

    console.log('Article:', article)

    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}
