export interface ICategory {
  _id: string
  title: string
  description: string
  publicationCount: number
}

export interface IUser {
  image?: string
  name: string
  username: string
  password: string
  followers: number
  editPermissions: boolean
  biography: string
  creationDate: Date
  email: string
}

export interface IComment {
  user: IUser
  comment: string
  likes: number
  dislikes: number
  commentDate: Date
  replies: IComment[]
  publication: IPublication
  edited: boolean
}

export interface IPublication {
  _id: string
  title: string
  photo: string
  subtitle: string
  description: string
  markdownContent: string
  tags: string[]
  views: number
  likes: number
  dislikes: number
  author: IUser[]
  category: ICategory[]
  status: 'published' | 'review' | 'draft'
  comments: IComment[]
  publicationDate: Date
}

export interface IUserCard {
  image?: string
  name: string
}

export interface IModelCard {
  _id: string
  title: string
  photo: string
  description: string
  views: number
  authors: IUserCard[]
  category: ICategory[]
  publicationDate: Date
}

export interface IFindModels {
  page: number
  pageSize: number
  order: 'ascendant' | 'descendant'
  modelsArray: IModelCard[]
}

// Interfaz para la respuesta visualizar articulo de un modelo

// Interfaz para la respuesta visualizar articulo de un modelo
export interface IArticleAuthor {
  image?: string
  name: string
  followers: number
}

// Interfaz para la respuesta visualizar articulo de un modelo
export interface IArticleComment {
  user: IArticleAuthor
  comment: string
  likes: number
  dislikes: number
  commentDate: Date
  replies: IArticleComment[]
  edited: boolean
}

// Interfaz para la respuesta visualizar articulo de un modelo
export interface IArticleCategories {
  title: string
  publicationCount: number
}

// Interfaz para la respuesta visualizar articulo de un modelo
export interface IArticlePublication {
  title: string
  photo: string
  subtitle: string
  description: string
  markdownContent: string
  tags: string[]
  publicationDate: Date
  views: number
  likes: number
  dislikes: number
  author: IArticleAuthor[]
  category: IArticleCategories[]
  comments: IArticleComment[]
}
