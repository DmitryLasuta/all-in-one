import type { Category, Product } from '@/lib/types'
import { sql } from '@vercel/postgres'

interface ExecuteSqlQuery {
  <T extends Category | Product>(queryCallback: () => ReturnType<typeof sql<T>>): Promise<T[]>
}

export const executeSqlQuery: ExecuteSqlQuery = async queryCallback => {
  try {
    const { rows } = await queryCallback()
    return rows
  } catch (error) {
    console.log(error)
    return []
  }
}
