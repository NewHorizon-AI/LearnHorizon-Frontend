import { type IArticle } from '@/interfaces/article/article.interface'

export interface IArticleCard
  extends Pick<
    IArticle,
    | '_id'
    | 'title'
    | 'users'
    | 'categories'
    | 'photo'
    | 'views'
    | 'likes'
    | 'createdAt'
  > {}
