import { type IArticleComposite } from '@/interfaces/article/article.interface'

export const createDefaultArticle = async (): Promise<IArticleComposite> => {
  try {
    const response = await fetch('/api/article/create/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: ['66aff0e5be741923832d6be6']
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
