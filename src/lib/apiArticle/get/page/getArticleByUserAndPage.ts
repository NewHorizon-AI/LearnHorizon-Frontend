import { type IArticleWithData } from '@/interfaces/article/article.interface'

export const getPagedArticlesByUsername = async (
  userId?: string,
  page?: number,
  pageSize?: number,
  order?: 'ascendant' | 'descendant'
): Promise<IArticleWithData[]> => {
  const response = await fetch(
    `/api/article/get/u/${userId}?page=${page}&pageSize=${pageSize}&order=${order}`
  )

  // TODO: Arreglar la ruta de la API

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()

  const article: IArticleWithData[] = data

  return article
}
