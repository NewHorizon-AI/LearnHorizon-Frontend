import useFormStore from '../useFormStore'
import { sendArticleData } from '@/services/articles/create-article/create-article.service'

export const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  e.preventDefault()
  const {
    title,

    photo,
    description,
    author,
    category,
    markdownContent,
    objectName,
    coordinates,
    rotationAngles,
    scale,
    file
  } = useFormStore.getState()
  const payload = {
    publication: {
      title,
      markdownContent,

      photo,
      description,
      author,
      category
    },
    object3D: {
      name: objectName,
      coordinates,
      rotationAngles,
      scale
    }
  }

  try {
    console.log('payload', payload)
    // await sendArticleData(payload, file)
  } catch (error) {
    console.error(error)
  }
}
