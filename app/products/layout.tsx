import { PRODUCTS_SEARCH_PARAMS, routes } from '@/lib/utils'

import { DatabaseService } from '@/lib/services'
import { NavigationLinks } from '@/lib/types'
import { ParametersList } from '@/components/ui/ParametersList'
import { SidePanel } from '@/components/ui'

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const categories = await new DatabaseService().getAllCategories()
  const categoriesLinks = [
    { title: 'All', href: routes.products() },
    ...categories.map(({ name }) => ({
      title: name,
      href: routes.products(name),
    })),
  ]
  return (
    <div className="flex flex-col md:flex-row gap-4 min-h-screen py-8">
      <SidePanel title="Filters & Sorting">
        <ParametersList parameter={PRODUCTS_SEARCH_PARAMS.category} caption="Categories" links={categoriesLinks} />
      </SidePanel>
      <main className="flex-1 px-4">{children}</main>
    </div>
  )
}
