import { CategoryCard } from '@/components/cards'
import { getAllCategories } from '@/lib/services/dataBase'
import Link from 'next/link'
import { routes } from '@/lib/utils'

export default async function CategoriesList() {
  const categories = await getAllCategories()
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
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
