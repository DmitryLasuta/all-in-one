import { formatCurrency } from './../../utils/formatCurrency'
type Category = {
  id: number
  name: 'Clothes' | 'Electronics' | 'Furniture' | 'Shoes' | 'Miscellaneous'
  image: string
  creationAt: Date
  updatedAt: Date
}

type Product = {
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

  public getProducts = async (): Promise<Product[]> => {
    const endpoint = `${this.baseUrl}/products`
    try {
      const response = await fetch(endpoint, { next: { revalidate: 1800 } })
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
      const response = await fetch(endpoint, { next: { revalidate: 1800 } })
      return await response.json()
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
      console.log(error)
      throw error
    }
  }
}

export { FakeStore }
