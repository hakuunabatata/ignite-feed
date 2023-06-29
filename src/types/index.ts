export interface IPost {
  id: number
  content: IContent[]
  author: IAuthor
  publishedAt: Date
}

export interface IAuthor {
  id: number
  name: string
  role: string
  avatar: string
}

export interface IContent {
  type: 'paragraph' | 'link'
  text: string
}
