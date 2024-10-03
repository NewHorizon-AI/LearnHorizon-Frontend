export interface IModel {
  file: ArrayBuffer
}

export interface IPostModel extends IModel {
  articleId: string
}
