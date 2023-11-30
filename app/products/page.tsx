import { DatabaseService } from '@/lib/services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All in One | Products',
  description:
    'Explore a curated collection of top-tier products on our e-commerce platform. From cutting-edge electronics to fashion essentials, discover a diverse range of quality items. Simplify your shopping experience with intuitive sorting and ordering options, including category filters, price range sorting, and the latest arrivals. Find what you need easily and securely, with a user-friendly interface designed for your convenience. Elevate your online shopping journey today!',
}

interface ProductsPageProps {
  searchParams: {
    category?: string
    page?: string
  }
}

const storeDB = new DatabaseService()

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category ?? 'all'
  // const categories = await storeDB.getAllCategories()

  if (!category || category === 'all') {
    const allProducts = await storeDB.getAllProducts()
  }

  console.log(searchParams)

  return (
    <main className="px-4">
      <h1>Products Page</h1>
      {/* <ProductGrid /> */}
    </main>
  )
}
