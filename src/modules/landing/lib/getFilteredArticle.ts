import { type IArticleResponse } from '../interfaces/article-response'

interface IProps {
  page?: number
  limit?: number
  sort?: string
  filters?: object
}

export const getFilteredArticle = async (
  props?: IProps
): Promise<IArticleResponse> => {
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

    const article: IArticleResponse = await response.json()

    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}
