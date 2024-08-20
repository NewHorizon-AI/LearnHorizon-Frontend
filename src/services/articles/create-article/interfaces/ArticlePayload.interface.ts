export interface ArticlePayload {
  publication: {
    title: string
    markdownContent: string
    subtitle: string
    photo: string
    description: string
    author: string[]
    category: string[]
  }
  object3D: {
    name: string
    coordinates: [number, number, number]
    rotationAngles: [number, number, number]
    scale: [number, number, number]
  }
}
