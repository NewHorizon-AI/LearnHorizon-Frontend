import useModelStore from '@/contexts/modelStore/edit-model/useModelStore'
import { type IModel } from '@/interfaces/model/model.interface'

export const fetchModel = async (articleId: string): Promise<void> => {
  try {
    const response = await fetch(`/api/model/${articleId}`)

    const blobData = await response.blob()

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // Convertir Blob a File
    const fileData = new File([blobData], `${articleId}.model`, {
      type: blobData.type,
      lastModified: new Date().getTime() // O puedes usar una fecha específica si es necesario
    })

    const model: IModel = {
      articleId,
      file: fileData
    }

    useModelStore.getState().setFile(model)
  } catch (error: any) {
    console.error('Error fetching model:', error.message)
  }
}
