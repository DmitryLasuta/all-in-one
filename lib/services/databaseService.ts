import type { Category, Product } from '@/lib/types'

import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export default class DatabaseService {
  public getTotalPages = async (query: string, options: { itemsPerPage: number; category?: Category['name'] }) => {
    const { itemsPerPage, category } = options

    if (!category || category === 'all') {
      const { rows }: { rows: { count: number }[] } = await sql`
      SELECT 
        COUNT(*) 
      FROM products 
      WHERE 
        title ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`}`

      return Math.ceil(Number(rows[0].count) / itemsPerPage)
    }

    const { rows }: { rows: { count: number }[] } = await sql`
    SELECT 
      COUNT(*) 
    FROM products 
    WHERE 
      (title ILIKE ${`%${query}%`} OR description ILIKE ${`%${query}%`}) AND 
      category = ${category}`

    return Math.ceil(Number(rows[0].count) / itemsPerPage)
  }

  public getAllCategories = async () => await executeSqlQuery<Category>(() => sql`SELECT * FROM categories`)

  public getCategoryById = async (id: number) => {
    const queryResult = await executeSqlQuery<Category>(() => sql`SELECT * FROM categories WHERE id = ${id}`)
    return queryResult[0]
  }

  public getAllProducts = async (category?: Category['name']) => {
    if (category)
      return await executeSqlQuery<Product>(
        () => sql`
        SELECT 
          id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating 
          FROM products 
          WHERE category = ${category}`
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

  public getProductById = async (id: number): Promise<Product> => {
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

  public getTopRatedProducts = async (limit: number = 5): Promise<Product[]> =>
    await executeSqlQuery<Product>(
      () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      ORDER BY Rating_rate DESC
      LIMIT ${limit};`
    )

  public searchProducts = async (
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
          title ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`}
        ORDER BY rating_rate DESC
        LIMIT ${itemsPerPage} OFFSET ${offset}`
      )

    return await executeSqlQuery<Product>(
      () => sql`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      WHERE 
       (title ILIKE ${`%${query}%`} OR description ILIKE ${`%${query}%`}) AND
        category = ${category}
      ORDER BY rating_rate DESC
      LIMIT ${itemsPerPage} OFFSET ${offset}`
    )
  }
}
