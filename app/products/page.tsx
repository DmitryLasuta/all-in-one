import { DatabaseService } from '@/lib/services'
import { Metadata } from 'next'
import { PRODUCTS_SEARCH_PARAMS } from '@/lib/utils'
import Pagination from '@/components/Pagination'
import { ProductCardSkeletonGroup } from '@/components/ui'
import { ProductList } from '@/components'
import { Search } from '@/components/Search'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Products | All in One',
  description:
    'Explore a curated collection of top-tier products on our e-commerce platform. From cutting-edge electronics to fashion essentials, discover a diverse range of quality items. Simplify your shopping experience with intuitive sorting and ordering options, including category filters, price range sorting, and the latest arrivals. Find what you need easily and securely, with a user-friendly interface designed for your convenience. Elevate your online shopping journey today!',
}

interface ProductsPageProps {
  searchParams: Partial<typeof PRODUCTS_SEARCH_PARAMS>
}

const ITEMS_PER_PAGE = 10

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category ?? ''
  const currentPage = Number(searchParams.page) ?? 1
  const totalPages = await new DatabaseService().getTotalPages(searchParams.query ?? '', {
    category,
    itemsPerPage: ITEMS_PER_PAGE,
  })

  return (
    <>
      <h1 className="text-3xl text-center md:text-right font-bold uppercase mb-4">
        {category ? 'All Products' : 'All Products'}
      </h1>
      <div className="flex flex-col gap-4 mb-8 lg:flex-row">
        <Search />
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </div>
      <Suspense fallback={<ProductCardSkeletonGroup count={ITEMS_PER_PAGE} />}>
        <ProductList
          query={searchParams.query ?? ''}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          category={category}
        />
      </Suspense>
    </>
  )
}
