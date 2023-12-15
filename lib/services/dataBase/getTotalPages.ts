import type { Category } from '@/lib/types'
import { database } from '@/lib/services/dataBase/schema'

type CalculateTotalPagesFunction = (
  query: string,
  options: { itemsPerPage: number; category?: Category['name'] }
) => Promise<number>

export const getTotalPages: CalculateTotalPagesFunction = async (query, { itemsPerPage, category = 'all' }) => {
  const sqlQuery = database
    .selectFrom('products')
    .selectAll()
    .where('title', 'like', `%${query}%`)
    .where('description', 'like', `%${query}%`)

  if (category || category === 'all') {
    sqlQuery.where('category', '=', category)
  }

  const countOfRows = (await sqlQuery.execute()).length

  return Math.ceil(countOfRows / itemsPerPage)
}
