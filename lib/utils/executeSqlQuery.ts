import type { Category, Product } from '@/lib/types'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

interface ExecuteSqlQuery {
  <T extends Category | Product>(queryCallback: () => ReturnType<typeof sql<T>>): Promise<T[]>
}

export const executeSqlQuery: ExecuteSqlQuery = async queryCallback => {
  noStore()
  try {
    const { rows } = await queryCallback()
    return rows
  } catch (error) {
    return []
  }
}
