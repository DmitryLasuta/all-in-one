import type { Category, Product } from '@/lib/types'

import { createKysely } from '@vercel/postgres-kysely'

interface CategoriesTable extends Category {}

interface ProductsTable extends Product {}

interface Database {
  categories: CategoriesTable
  products: ProductsTable
}

export const database = createKysely<Database>()
