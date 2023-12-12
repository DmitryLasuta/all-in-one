import type { Category } from '@/lib/types'
import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export const getCategoryById = async (id: number) => {
  const queryResult = await executeSqlQuery<Category>(() => sql`SELECT * FROM categories WHERE id = ${id}`)
  return queryResult[0]
}
