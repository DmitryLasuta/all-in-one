import { formatCurrency } from './../../utils/formatCurrency'
export type Category = {
  id: number
  name: 'Clothes' | 'Electronics' | 'Furniture' | 'Shoes' | 'Miscellaneous'
  image: string
  creationAt: Date
  updatedAt: Date
}

export type Product = {
  id: number
  title: string
  price: string
  description: string
  images: string[]
  creationAt: Date
  updatedAt: Date
  category: Category
}

class FakeStore {
  private baseUrl = 'https://api.escuelajs.co/api/v1'
  private baseRevalidate = 3600

  public getAllProducts = async (): Promise<Product[]> => {
    const endpoint = `${this.baseUrl}/products`
    try {
      const response = await fetch(endpoint, {
        next: { revalidate: this.baseRevalidate },
      })

      if (response.ok) {
        const products: Product[] = await response.json()
        return products.map(product => ({
          ...product,
          price: formatCurrency(Number(product.price)),
        }))
      }
    } catch (error) {
      console.log(error)
      throw error
    }

    return []
  }

  public getCategories = async (): Promise<Category[]> => {
    const endpoint = `${this.baseUrl}/categories`
    try {
      const response = await fetch(endpoint, {
        next: { revalidate: this.baseRevalidate },
      })

      const categories: Category[] = await response.json()

      /* Replacing inaccessible links 🩼 */
      const fixedCategories = await Promise.all(
        categories.map(async category => {
          const { status } = await fetch(category.image)
          if (status !== 200) {
            return {
              ...category,
              image:
                'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
            }
          } else return category
        })
      ).then(
        filteredCategories =>
          filteredCategories.filter(category => category !== undefined) as Category[]
      )

      return fixedCategories
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  public getCategoryById = async (id: number): Promise<Category> => {
    const endpoint = `${this.baseUrl}/categories/${id}`

    try {
      const response = await fetch(endpoint)
      return await response.json()
    } catch (error) {
      throw error
    }
  }
}

export { FakeStore }
