import { Category } from '@/app/api/products/categories/route'

export class StoreAccessAPI {
  private baseUrl: string = `${process.env.BASE_URL}/api`

  public getAllCategories = async () => {
    try {
      const response = await fetch(`${this.baseUrl}/products/categories`, {
        next: {
          revalidate: 60,
        },
        mode: 'same-origin',
      })

      const categories: Category[] = await response.json()
      return categories
    } catch (error) {
      throw error
    }
  }

  public getCategoryById = async (id: number) => {
    try {
      const response = await fetch(`${this.baseUrl}/products/categories/${id}`, {
        next: {
          revalidate: 60,
        },
        mode: 'same-origin',
      })

      const category: Category = await response.json()
      return category
    } catch (error) {
      throw error
    }
  }
}
