import { type IArticle } from '@/interfaces/article/article.interface'

export const getArticlesByUser = async (
  userId?: string | string[] // Aceptamos tanto un string como un arreglo de IDs
): Promise<IArticle[]> => {
  // Si userId es un string, lo convertimos a un arreglo
  const userIdsArray = Array.isArray(userId) ? userId : [userId]

  // Verificamos que el arreglo no contenga valores `undefined`
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!userIdsArray[0]) {
    throw new Error('No se ha proporcionado un ID de usuario válido')
  }

  const response = await fetch('/api/articles/getall/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usersIds: userIdsArray }) // Enviamos el arreglo de userIds
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  const articles: IArticle[] = data

  return articles
}
