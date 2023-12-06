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
        title LIKE ${`%${query}%`} OR
        description LIKE ${`%${query}%`}`

      return Math.ceil(Number(rows[0].count) / itemsPerPage)
    }

    const { rows }: { rows: { count: number }[] } = await sql`
    SELECT 
      COUNT(*) 
    FROM products 
    WHERE 
      (title LIKE ${`%${query}%`} OR description LIKE ${`%${query}%`}) AND 
      category = ${category}`

    return Math.ceil(Number(rows[0].count) / itemsPerPage)
  }

  public getAllCategories = async () => await executeSqlQuery<Category>(() => sql`SELECT * FROM categories`)

  public getCategoryById = async (id: number) => {
    const queryResult = await executeSqlQuery<Category>(() => sql`SELECT * FROM categories WHERE id = ${id}`)
    return queryResult[0]
  }

  public getAllProducts = async ({
    category,
    limit,
    orderByRating,
    withoutProduct,
  }: {
    category?: Category['name']
    limit?: number
    orderByRating?: boolean
    withoutProduct?: Product
  }) => {
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

  public getProductById = async (id: number): Promise<Product | undefined> => {
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
}
