import { sql } from '@vercel/postgres'
import type { Category, Product } from '@/lib/types'

export default class DatabaseService {
  public getAllCategories = async (): Promise<Category[]> => {
    try {
      const { rows } = await sql<Category>`SELECT * FROM categories`
      return rows
    } catch (error) {
      throw error
    }
  }

  public getCategoryById = async (id: number): Promise<Category | undefined> => {
    try {
      const { rows } = await sql<Category>`
        SELECT * FROM products
        WHERE id = ${id}`
      return rows.at(0)
    } catch (error) {
      throw error
    }
  }

  public getAllProducts = async ({
    limit,
    offset = 10,
    category,
  }: Partial<{
    limit?: number
    offset?: number
    category?: Category
  }> = {}): Promise<Product[]> => {
    try {
      if (category) {
        const { rows } = await sql<Product>`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          WHERE category = ${category.name}
          OFFSET ${offset}`

        if (limit) {
          const { rows } = await sql<Product>`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          WHERE category = ${category.name}
          LIMIT ${limit}
          OFFSET ${offset}`

          return rows.map(product => ({
            ...product,
          }))
        }

        return rows
      }

      if (limit) {
        const { rows } = await sql<Product>`
          SELECT id, title, price, description, category, image, 
            JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
          FROM products
          OFFSET ${offset}
          LIMIT ${limit}`
        return rows
      }

      const { rows } = await sql<Product>`
        SELECT id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products
        OFFSET ${offset}`
      return rows
    } catch (error) {
      throw error
    }
  }

  public getProductById = async (id: number): Promise<Product | undefined> => {
    try {
      const { rows } = await sql<Product>`
        SELECT id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products
        WHERE id = ${id}`
      return rows.at(0)
    } catch (error) {
      throw error
    }
  }

  public getTopRatedProducts = async (limit: number = 5): Promise<Product[]> => {
    try {
      const { rows } = await sql<Product>`
      SELECT id, title, price, description, category, image, 
        JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
      FROM products
      ORDER BY Rating_rate DESC
      LIMIT ${limit};`

      return rows
    } catch (error) {
      throw error
    }
  }
}
