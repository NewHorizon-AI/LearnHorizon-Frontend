import useModelStore from '@/contexts/modelStore/edit-model/useModelStore'
import { type IModel } from '@/interfaces/model/model.interface'
import { type IFileGltf } from '@/interfaces/model/file.interface'

export const fetchArticle = async (articleId: string): Promise<void> => {
  try {
    console.log(`/model/${articleId}`)
    const response = await fetch(`/model/${articleId}`)
    const fileData: IFileGltf = await response.json()

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const model: IModel = {
      articleId,
      file: fileData
    }

    useModelStore.getState().setFile(model)
  } catch (error: any) {
    console.error('Error fetching article:', error.message)
    throw error
  }
}
