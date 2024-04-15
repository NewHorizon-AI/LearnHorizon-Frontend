export interface ICategory {
  title: string
  description: string
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
  author: IUser
  category: ICategory
  status: 'published' | 'review' | 'draft'
  comments: IComment[]
}
