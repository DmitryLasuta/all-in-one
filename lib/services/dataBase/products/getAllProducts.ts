import type { Category, Product } from '@/lib/types'

import { database } from '@/lib/services/dataBase/schema'

interface GetAllProductsParams {
  category?: Category['name']
  limit?: number
  orderByRating?: boolean
  withoutProduct?: Product
}

type FetchProducts = (args: GetAllProductsParams) => Promise<Product[]>

export const getAllProducts: FetchProducts = async ({ category, limit = 10, orderByRating, withoutProduct }) => {
  const sqlQuery = database.selectFrom('products').selectAll()

  if (category) sqlQuery.where('category', '=', category)
  if (orderByRating) sqlQuery.orderBy('rating_rate', 'desc')
  if (withoutProduct) sqlQuery.where('id', '!=', withoutProduct.id)
  if (limit) sqlQuery.limit(limit)

  return await sqlQuery.execute()
}
