import type { Category } from '@/lib/types'
import { sql } from '@vercel/postgres'

export const getTotalPages = async (query: string, options: { itemsPerPage: number; category?: Category['name'] }) => {
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
