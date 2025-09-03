export type Product = {
  id: number
  name: string
  description: string
  price: number
  image?: string
  affiliateLink: string
  specs?: Record<string, string>
  rating?: number
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover: string
  date: string
  author: string
  tags: string[]
}
