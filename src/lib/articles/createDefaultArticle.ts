import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const createDefaultArticle = async (
  _id?: string
): Promise<IArticleComposite> => {
  try {
    const response = await fetch('/api/articles/create/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: [_id]
      })
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return await response.json()
  } catch (error: any) {
    console.error(error.message)
    throw error
  }
}
