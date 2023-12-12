import type { Product } from '@/lib/types'
import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export const getTopRatedProducts = async (limit: number = 5): Promise<Product[]> =>
  await executeSqlQuery<Product>(
    () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      ORDER BY Rating_rate DESC
      LIMIT ${limit};`
  )
