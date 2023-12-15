import type { Category } from '@/lib/types'
import { database } from '@/lib/services/dataBase/schema'

export const getCategoryById = async (id: number): Promise<Category | undefined> =>
  await database.selectFrom('categories').selectAll().where('id', '=', id).executeTakeFirst()
