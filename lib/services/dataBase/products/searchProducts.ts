import type { Category, Product } from '@/lib/types'

import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export const searchProducts = async (
  query: string,
  currentPage: number,
  itemsPerPage: number = 10,
  category?: Category['name']
): Promise<Product[]> => {
  const offset = (currentPage - 1) * itemsPerPage

  if (!category || category === 'all')
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      WHERE 
        title LIKE ${`%${query}%`} OR
        description LIKE ${`%${query}%`}
      ORDER BY rating_rate DESC
      LIMIT ${itemsPerPage} OFFSET ${offset}`
    )

  return await executeSqlQuery<Product>(
    () => sql`
    SELECT id, title, price, description, category, image, 
      JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
    FROM products
    WHERE 
     (title LIKE ${`%${query}%`} OR description LIKE ${`%${query}%`}) AND
      category = ${category}
    ORDER BY rating_rate DESC
    LIMIT ${itemsPerPage} OFFSET ${offset}`
  )
}
