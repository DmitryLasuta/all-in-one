import { PRODUCTS_SEARCH_PARAMS, routes } from '@/lib/utils'

import { DatabaseService } from '@/lib/services'
import { ParametersList } from '@/components'
import { SidePanel } from '@/components/sidePanel'

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const categories = await new DatabaseService().getAllCategories()
  const categoriesLinks = [
    { title: 'All', href: routes.products.withParams({}) },
    ...categories.map(({ name }) => ({
      title: name,
      href: routes.products.withParams({ category: name }),
    })),
  ]

  return (
    <div className="container grid grid-cols-1 md:grid-cols-[fit-content(300px)_auto] gap-8 min-h-screen py-8">
      <SidePanel>
        <ParametersList parameter={PRODUCTS_SEARCH_PARAMS.category} caption="Categories" links={categoriesLinks} />
      </SidePanel>
      <main>{children}</main>
    </div>
  )
}
