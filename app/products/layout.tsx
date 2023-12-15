import { FiltersAndSorting } from '@/components/filtersAndSorting'
import { getAllCategories } from '@/lib/services/dataBase'

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const categories = await getAllCategories()

  return (
    <div className="container grid grid-cols-1 md:grid-cols-[fit-content(300px)_auto] gap-8 min-h-screen py-8">
      <FiltersAndSorting categories={categories} />
      <main>{children}</main>
    </div>
  )
}
