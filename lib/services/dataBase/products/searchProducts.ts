import type { Category, OrderBy, Product } from '@/lib/types'

import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

interface SearchProductsParams {
  query: string
  currentPage: number
  itemsPerPage: number
  orderby: OrderBy
  category: Category['name']
}

export const searchProducts = async ({
  currentPage,
  itemsPerPage,
  orderby,
  query,
  category = 'all',
}: SearchProductsParams): Promise<Product[]> => {
  const offset = (currentPage - 1) * itemsPerPage

  if (category === 'all')
    switch (orderby) {
      case 'count in stock':
        return await executeSqlQuery<Product>(
          () => sql`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          WHERE 
            title LIKE ${`%${query}%`} OR
            description LIKE ${`%${query}%`}
          ORDER BY rating_count DESC
          LIMIT ${itemsPerPage} OFFSET ${offset}`
        )
      case 'price':
        return await executeSqlQuery<Product>(
          () => sql`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          WHERE 
            title LIKE ${`%${query}%`} OR
            description LIKE ${`%${query}%`}
          ORDER BY price ASC
          LIMIT ${itemsPerPage} OFFSET ${offset}`
        )
      default:
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
    }
  else {
    switch (orderby) {
      case 'count in stock':
        return await executeSqlQuery<Product>(
          () => sql`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          WHERE 
            (title LIKE ${`%${query}%`} OR description LIKE ${`%${query}%`}) AND
            category = ${category}
          ORDER BY rating_count DESC
          LIMIT ${itemsPerPage} OFFSET ${offset}`
        )
      case 'price':
        return await executeSqlQuery<Product>(
          () => sql`
            SELECT id, title, price, description, category, image, 
              JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
            FROM products
            WHERE 
              (title LIKE ${`%${query}%`} OR description LIKE ${`%${query}%`}) AND
              category = ${category}
            ORDER BY price ASC
            LIMIT ${itemsPerPage} OFFSET ${offset}`
        )

      default:
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
  }
}
