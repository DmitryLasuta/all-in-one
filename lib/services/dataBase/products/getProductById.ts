import type { Product } from '@/lib/types'
import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export const getProductById = async (id: number): Promise<Product | undefined> => {
  const queryResult = await executeSqlQuery<Product>(
    () => sql`
    SELECT 
      id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
    FROM products 
    WHERE id = ${id}`
  )
  return queryResult[0]
}
