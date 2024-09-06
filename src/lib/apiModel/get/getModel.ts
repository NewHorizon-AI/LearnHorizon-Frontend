import { type IModel } from '@/interfaces/model/model.interface'

const getModel = async (articleId: string): Promise<IModel> => {
  const response = await fetch(`/api/model/get/e/${articleId}`)
  if (!response.ok)
    throw new Error(
      `Error en la peticion get hacia /api/model/get/e/${articleId}`
    )

  const gltfText: string = await response.text()

  const model: IModel = JSON.parse(gltfText)
  return model
}

export default getModel
