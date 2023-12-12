import type { Category } from '@/lib/types'
import { executeSqlQuery } from '@/lib/utils'
import { sql } from '@vercel/postgres'

export const getAllCategories = async () => await executeSqlQuery<Category>(() => sql`SELECT * FROM categories`)
