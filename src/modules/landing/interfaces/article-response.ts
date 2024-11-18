import { type IArticleCard } from '../components/articleList/interfaces/articleCard.interface'

export interface IArticleResponse {
  items: IArticleCard[]
  total: number
  page: string
  limit: string
}
