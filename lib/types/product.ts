import { Category } from './category'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category['name']
  image: string
  rating_rate: number
  rating_count: number
}
