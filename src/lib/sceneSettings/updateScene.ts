import { type ISceneSettings } from '@/interfaces/scene-settings/scene-settings.interface'

export const UpdateSceneByArticleId = async (
  articleId: string,
  article: ISceneSettings
): Promise<void> => {
  try {
    const response = await fetch(`/api/sceneSettings/${articleId}/patch`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }
  } catch (error: any) {
    console.error(error.message)
    throw error
  }
}
