import { Category } from '@/lib/types'
import { database } from '@/lib/services/dataBase/schema'

export const getAllCategories = async (): Promise<Category[]> => {
  return await database.selectFrom('categories').selectAll().execute()
}
