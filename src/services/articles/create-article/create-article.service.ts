import { type ArticlePayload } from './interfaces/ArticlePayload.interface'

export const sendArticleData = async (
  payload: ArticlePayload,
  file: File | null
): Promise<void> => {
  const formData = new FormData()
  formData.append('payload', JSON.stringify(payload))
  if (file != null) {
    formData.append('file', file)
  }

  try {
    const response = await fetch('/api/article/new', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Error en el envío de datos')
    }

    const result = await response.json()
    console.log('Datos enviados exitosamente:', result)
  } catch (error) {
    console.error('Error al enviar los datos:', error)
    throw error
  }
}
