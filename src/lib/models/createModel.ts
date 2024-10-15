export const createModel = async (
  articleId: string,
  file: File
): Promise<ArrayBuffer> => {
  try {
    const formData = new FormData()
    formData.append('file', file) // El archivo
    formData.append('id', articleId) // El ID asociado al archivo

    const response = await fetch('/api/models/create', {
      method: 'POST',
      body: formData
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
