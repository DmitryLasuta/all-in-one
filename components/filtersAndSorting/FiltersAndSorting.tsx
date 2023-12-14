'use client'

import type { Category, NavigationLinks, OrderBy } from '@/lib/types'
import { PRODUCTS_SEARCH_PARAMS, routes } from '@/lib/utils'

import { ParametersList } from '@/components/filtersAndSorting'
import { useSearchParams } from 'next/navigation'

interface SidePanelProps {
  categories: Category[]
}

export function FiltersAndSorting({ categories }: SidePanelProps) {
  const searchParams = useSearchParams()
  const categoriesLinks = [
    {
      title: 'All',
      href: routes.products.withParams({
        orderBy: (searchParams.get('orderBy') as OrderBy) || 'rating',
        category: 'all',
      }),
    },
    ...categories.map(({ name }) => ({
      title: name,
      href: routes.products.withParams({
        category: name,
        orderBy: (searchParams.get('orderBy') as OrderBy) || 'rating',
      }),
    })),
  ]

  const orderByLinks: NavigationLinks[] = [
    {
      title: 'Rating',
      href: routes.products.withParams({ orderBy: 'rating', category: searchParams.get('category') || 'all' }),
    },
    {
      title: 'Price',
      href: routes.products.withParams({ orderBy: 'price', category: searchParams.get('category') || 'all' }),
    },
    {
      title: 'Count in stock',
      href: routes.products.withParams({
        orderBy: 'count in stock',
        category: searchParams.get('category') || 'all',
      }),
    },
  ]

  return (
    <aside className="md:pr-4 lg:pr-8 min-h-full border-b-2 md:border-r-2 md:border-b-0">
      <div className="w-full h-fit sticky top-[100px]">
        <h3 className="uppercase font-bold text-xl mb-2 text-center md:text-left">Filters & Sorting</h3>
        <div>
          <ParametersList parameter={PRODUCTS_SEARCH_PARAMS.category} caption="Categories" links={categoriesLinks} />
          <ParametersList parameter={PRODUCTS_SEARCH_PARAMS.orderBy} caption="Order by" links={orderByLinks} />
        </div>
      </div>
    </aside>
  )
}
