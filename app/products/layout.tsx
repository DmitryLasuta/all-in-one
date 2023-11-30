import { DatabaseService } from '@/lib/services'
import { NavigationLinks } from '@/lib/types'
import { ParametersList } from '@/components/ui/ParametrsList'
import { SidePanel } from '@/components/ui'
import { routes } from '@/lib/utils'

const storeDB = new DatabaseService()

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const categories = await storeDB.getAllCategories()
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
        <ParametersList caption="Categories" links={categoriesLinks} />
      </SidePanel>
      <div className="flex-1">{children}</div>
    </div>
  )
}
