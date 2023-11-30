import { CategoryCard } from '@/components/ui'
import { DatabaseService } from '@/lib/services'
import Link from 'next/link'
import { routes } from '@/lib/utils'

export default async function CategoriesList() {
  const categories = await new DatabaseService().getAllCategories()
  return (
    <ul className="grid grid-flow-dense grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {categories.map(category => (
        <li key={category.id}>
          <Link href={routes.products(category.name)}>
            <CategoryCard category={category} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
