import { Breadcrumbs, Catalog, Pagination, Search } from '@/components'
import { PRODUCTS_SEARCH_PARAMS, routes } from '@/lib/utils'

import type { BreadcrumbProps } from '@/components'
import type { Metadata } from 'next'
import { ProductCardSkeletonGroup } from '@/components/cards'
import { Suspense } from 'react'
import { getTotalPages } from '@/lib/services/dataBase'
import type { OrderBy } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Products | All in One',
  description:
    'Explore a curated collection of top-tier products on our e-commerce platform. From cutting-edge electronics to fashion essentials, discover a diverse range of quality items. Simplify your shopping experience with intuitive sorting and ordering options, including category filters, price range sorting, and the latest arrivals. Find what you need easily and securely, with a user-friendly interface designed for your convenience. Elevate your online shopping journey today!',
}

interface ProductsPageProps {
  searchParams: Partial<typeof PRODUCTS_SEARCH_PARAMS>
}

const ITEMS_PER_PAGE = 8

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category ?? ''
  const currentPage = Number(searchParams.page) || 1
  const query = searchParams.query ?? ''
  const orderBy: OrderBy = (searchParams.orderBy as OrderBy) || 'price'

  const totalPages = await getTotalPages(query, {
    category,
    itemsPerPage: ITEMS_PER_PAGE,
  })

  const crumbs: BreadcrumbProps[] = [{ label: 'All Products', href: routes.products.list, active: category === 'all' }]
  if (category && category !== 'all') {
    crumbs.push({ label: category, href: routes.products.withParams({ category }), active: true })
  }
  return (
    <>
      <h1>
        <Breadcrumbs breadcrumbs={crumbs} />
      </h1>
      <div className="flex flex-col  gap-4 mb-8 lg:flex-row">
        <Search />
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </div>
      <Suspense key={query + currentPage} fallback={<ProductCardSkeletonGroup count={ITEMS_PER_PAGE} />}>
        <Catalog
          query={searchParams.query ?? ''}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          category={category}
          orderby={orderBy}
        />
      </Suspense>
    </>
  )
}
