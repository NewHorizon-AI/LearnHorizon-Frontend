export enum IArticleStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
}

export interface IArticle {
  _id: string // Identificador único del artículo
  title: string // Título del artículo
  users: string[] // Arreglo de IDs de autores del artículo (referencia a usuarios)
  categories: string[] // Arreglo de IDs de categorías del artículo
  photo: string // URL de la foto del artículo
  description: string // Descripción del artículo
  views: number // Número de vistas
  likes: number // Número de "me gusta"
  content: string // Contenido en formato Markdown
  status: IArticleStatus // Estado del artículo ('published', 'draft', 'deleted', etc.)
  createdAt: Date // Fecha de creación
  updatedAt: Date // Fecha de última actualización
  __v: number // Versión del documento en MongoDB
}

export interface IArticleTransformation {
  _id: string
  article_model_id: string
  position: number[]
  rotation: number[]
  scale: number[]
}
