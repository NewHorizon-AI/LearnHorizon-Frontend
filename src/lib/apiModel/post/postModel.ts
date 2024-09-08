import { type IModel } from '@/interfaces/model/model.interface'

export const postModel = async (
  articleId: string,
  file: File
): Promise<IModel> => {
  try {
    const formData = new FormData()
    formData.append('file', file) // El archivo
    formData.append('id', articleId) // El ID asociado al archivo

    const response = await fetch('/api/model/post', {
      method: 'POST',
      body: formData,
      headers: {
        // Aquí no es necesario añadir Content-Type ya que fetch lo gestiona automáticamente para FormData
      }
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al subir el archivo:', error.message)
      throw new Error(`Error al realizar la petición: ${error.message}`)
    }
    throw new Error('Error desconocido al subir el archivo')
  }
}
