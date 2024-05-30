import { type IUser, type IComment, type ICategory } from './IBackend'

interface ICategoryArray
  extends Array<Pick<ICategory, '_id' | 'title' | 'publicationCount'>> {}
interface IUserArray
  extends Array<Pick<IUser, 'image' | 'name' | 'followers'>> {}
interface ICommentArray
  extends Array<
    Pick<
      IComment,
      'comment' | 'likes' | 'dislikes' | 'commentDate' | 'replies' | 'edited'
    >
  > {}

export interface IArticle {
  category: ICategoryArray
  author: IUserArray
  comments: ICommentArray
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
  publicationDate: string
}
