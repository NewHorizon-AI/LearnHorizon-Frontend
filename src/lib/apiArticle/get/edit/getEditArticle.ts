import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const getEditArticle = async (
  articleId?: string
): Promise<IArticleComposite> => {
  const response = await fetch(`/api/article/get/e/${articleId}`)

  // TODO: Arreglar la ruta de la API

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()

  const article: IArticleComposite = data

  return article
}
