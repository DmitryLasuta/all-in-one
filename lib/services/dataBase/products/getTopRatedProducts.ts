import type { Product } from '@/lib/types'
import { database } from '@/lib/services/dataBase/schema'

export const getTopRatedProducts = async (limit: number = 5): Promise<Product[]> =>
  await database.selectFrom('products').selectAll().orderBy('rating_rate', 'desc').limit(limit).execute()
