const getModelByArticleId = async (articleId: string): Promise<ArrayBuffer> => {
  const response = await fetch(`/api/models/articles/${articleId}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(
      `Error en la petición get hacia /api/models/articles/${articleId}`
    )
  }

  const model: ArrayBuffer = await response.arrayBuffer()

  return model
}

export default getModelByArticleId
