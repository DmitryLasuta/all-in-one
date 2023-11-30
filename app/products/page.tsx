import { DatabaseService } from '@/lib/services'
import { Metadata } from 'next'
import Pagination from '@/components/Pagination'

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

const ITEMS_PER_PAGE = 1
const storeDB = new DatabaseService()
const totalPages = Math.ceil((await storeDB.getAllProducts()).length / ITEMS_PER_PAGE)

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category ?? 'all'
  const currentPage = Number(searchParams.page) || 1

  return (
    <>
      <h1>Products Page</h1>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  )
}
