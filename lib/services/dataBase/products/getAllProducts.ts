import type { Category, Product } from '@/lib/types'

import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

interface GetAllProductsParams {
  category?: Category['name']
  limit?: number
  orderByRating?: boolean
  withoutProduct?: Product
}

export const getAllProducts = async ({ category, limit = 10, orderByRating, withoutProduct }: GetAllProductsParams) => {
  if (category && orderByRating && withoutProduct)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
      FROM products 
        WHERE category = ${category} AND id != ${withoutProduct.id}
        ORDER BY Rating_rate DESC
        LIMIT ${limit}`
    )
  else if (category && orderByRating)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
        FROM products 
        WHERE category = ${category}
        ORDER BY Rating_rate DESC
        LIMIT ${limit}`
    )
  else if (category && !orderByRating && withoutProduct)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
        FROM products 
        WHERE category = ${category} AND id != ${withoutProduct.id}
        LIMIT ${limit}`
    )
  else if (category && !orderByRating)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
        FROM products 
        WHERE category = ${category}
        LIMIT ${limit}`
    )
  else if (!category && orderByRating && withoutProduct)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
      FROM products 
      WHERE id != ${withoutProduct.id}
      ORDER BY Rating_rate DESC
      LIMIT ${limit}`
    )
  else if (!category && orderByRating)
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
      FROM products
      ORDER BY Rating_rate DESC
      LIMIT ${limit}`
    )
  else
    return await executeSqlQuery<Product>(
      () => sql`
      SELECT 
        id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
      FROM products`
    )
}
