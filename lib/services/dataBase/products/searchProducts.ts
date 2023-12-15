import type { Category, OrderBy, Product } from '@/lib/types'

import { database } from '@/lib/services/dataBase/schema'

interface SearchProductsParams {
  query: string
  currentPage: number
  itemsPerPage: number
  orderby: OrderBy
  category: Category['name']
}

type FetchProductsFunction = (args: SearchProductsParams) => Promise<Product[]>

export const searchProducts: FetchProductsFunction = async ({
  currentPage,
  itemsPerPage,
  orderby,
  query,
  category = 'all',
}) => {
  const offset = (currentPage - 1) * itemsPerPage

  const sqlQuery = database
    .selectFrom('products')
    .selectAll()
    .where('title', 'like', `%${query}%`)
    .where('description', 'like', `%${query}%`)

  if (category === 'all') sqlQuery.where('category', '=', category)
  switch (orderby) {
    case 'count in stock':
      sqlQuery.orderBy('rating_count', 'desc')
      break
    case 'price':
      sqlQuery.orderBy('price', 'desc')
      break
    case 'rating':
      sqlQuery.orderBy('rating_rate', 'desc')
      break
    default:
      sqlQuery.orderBy('rating_rate', 'desc')
      break
  }

  sqlQuery.limit(itemsPerPage).offset(offset)
  return await sqlQuery.execute()
}
