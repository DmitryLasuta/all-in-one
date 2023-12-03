import type { Category, Product } from '@/lib/types'

import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export default class DatabaseService {
  public getAllCategories = async () => await executeSqlQuery<Category>(() => sql`SELECT * FROM categories`)

  public getCategoryById = async (id: number) => {
    const queryResult = await executeSqlQuery<Category>(() => sql`SELECT * FROM categories WHERE id = ${id}`)
    return queryResult[0]
  }

  public getAllProducts = async (options?: { limit: number; offset: number; category?: Category['name'] }) => {
    if (!options) {
      return await executeSqlQuery<Product>(
        () => sql`
        SELECT id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products`
      )
    }

    const { category, limit, offset } = options
    if (!category) {
      return await executeSqlQuery<Product>(
        () => sql`
        SELECT id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products 
        LIMIT ${limit} 
        OFFSET ${offset}`
      )
    }

    return await executeSqlQuery<Product>(
      () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products 
        WHERE category = ${category} 
      LIMIT ${limit} 
      OFFSET ${offset}`
    )
  }

  public getProductById = async (id: number): Promise<Product> => {
    const queryResult = await executeSqlQuery<Product>(() => sql`SELECT * FROM products WHERE id = ${id}`)
    return queryResult[0]
  }

  public getTopRatedProducts = async (limit: number = 5): Promise<Product[]> =>
    await executeSqlQuery<Product>(
      () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      ORDER BY Rating_rate DESC
      LIMIT ${limit};`
    )
}
