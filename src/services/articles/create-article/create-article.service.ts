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
      const errorMessage = await response.text()
      throw new Error(
        `Error en el envío de datos: ${response.status} ${response.statusText} - ${errorMessage}`
      )
    }

    const result = await response.json()
    console.log('Datos enviados exitosamente:', result)
  } catch (error: any) {
    console.error(error)
  }
}
