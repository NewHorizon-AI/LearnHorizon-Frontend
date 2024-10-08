const getModel = async (articleId: string): Promise<ArrayBuffer> => {
  const response = await fetch(`/api/model/get/e/${articleId}`)
  if (!response.ok)
    throw new Error(
      `Error en la peticion get hacia /api/model/get/e/${articleId}`
    )

  const gltfText: string = await response.text()

  const model: ArrayBuffer = JSON.parse(gltfText)

  return model
}

export default getModel
