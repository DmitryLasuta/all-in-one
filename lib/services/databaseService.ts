import { sql } from '@vercel/postgres'

export type Category = {
  id: number
  name: string
  image: string
}
export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: Pick<Category, 'name'>
  image: string
  rating: {
    rate: number
    count: number
  }
}

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

  public getAllProducts = async (
    limit?: number,
    offset?: number,
    category?: Category
  ): Promise<Product[]> => {
    try {
      const { rows } = await sql<Product>`
        SELECT id, title, price, description, category, image, 
          JSON_BUILD_OBJECT('rate', rating_rate, 'count', rating_count) AS rating
        FROM products
        ${category ? `WHERE category = ${category.name}` : ''}
        ${limit ? `LIMIT ${limit}` : ''}
        ${offset ? `OFFSET ${offset}` : ''}
      `
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
}
