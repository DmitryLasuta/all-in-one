import { CategoryCard } from '@/components/ui'
import { DatabaseService } from '@/lib/services'
import Link from 'next/link'
import { routes } from '@/lib/utils'

export default async function CategoriesList() {
  const categories = await new DatabaseService().getAllCategories()
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {categories.map(category => (
        <li key={category.id}>
          <Link href={routes.products.withParams({ category: category.name })}>
            <CategoryCard category={category} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
