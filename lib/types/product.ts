import { Category } from './category'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category['name']
  image: string
  rating: {
    rate: number
    count: number
  }
}
