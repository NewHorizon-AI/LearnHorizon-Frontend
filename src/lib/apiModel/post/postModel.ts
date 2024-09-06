import { type IPostModel } from '@/interfaces/model/model.interface'

export const postModel = async (
  userId: string,
  file: File
): Promise<IPostModel> => {
  try {
    const formData = new FormData()
    formData.append('users', userId)
    formData.append('file', file)

    const response = await fetch('/api/model/post', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data: IPostModel = await response.json()
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error uploading GLTF file:', error.message)
      throw new Error(`Fetch error: ${error.message}`)
    }
    throw new Error('Unknown error occurred during GLTF file upload')
  }
}
