import type { Product } from '@/lib/types'
import { database } from '@/lib/services/dataBase/schema'

export const getProductById = async (id: number): Promise<Product | undefined> =>
  await database.selectFrom('products').selectAll().where('id', '=', id).executeTakeFirst()
