import { type ISceneSettings } from '../scene-settings/scene-settings.interface'
import { type IArticleUser } from '../user/user.interface'
import { type ICategory } from '../categories/categories.interface'

export enum IArticleStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
}

export interface IArticle {
  _id: string // Identificador único del artículo
  title: string // Título del artículo
  users: IArticleUser[] // Arreglo de IDs de autores del artículo (referencia a usuarios)
  categories: ICategory[] // Arreglo de IDs de categorías del artículo
  photo: string // URL de la foto del artículo
  description: string // Descripción del artículo
  views: number // Número de vistas
  likes: number // Número de "me gusta"
  content: string // Contenido en formato Markdown
  status: IArticleStatus // Estado del artículo ('published', 'draft', 'deleted', etc.)
  createdAt: Date // Fecha de creación
  updatedAt: Date // Fecha de última actualización
  __v: number // Versión del documento en MongoDB
  sceneSettings: ISceneSettings // Configuración de la escena
}
