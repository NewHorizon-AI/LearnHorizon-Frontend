// * Interfaz para definir la estructura de un artículo proveniente de la base de datos
export interface IArticle {
  _id: string
  title: string
  status: string
  users: 'published' | 'draft' | 'deleted'
}

export interface IArticleData {
  photo: string
  description: number
  views: number
  likes: number
  dislikes: number
}

export interface IArticleMarkdown {
  content: string
}

// * Interfaz para definir la estructura de una transformacion para un modelo proveniente de la base de datos

export interface IArticleTransformation {
  _id: string
  article_model_id: string
  position: number[]
  rotation: number[]
  scale: number[]
}

// * Interfaz compuesta que incluye IArticle y opcionalmente incluye IArticleTransformation
export interface IArticleComposite {
  article: IArticle
  data?: IArticleData
  markdown?: IArticleMarkdown
  transformation?: IArticleTransformation
}

// * Interfaz para un articulo con datos
export interface IArticleWithData extends IArticle {
  data: IArticleData
}
