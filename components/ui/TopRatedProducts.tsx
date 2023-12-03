import { DatabaseService } from '@/lib/services'
import { ProductCard } from '@/components/ui'

export default async function TopRatedProducts({ count = 5 }: { count?: number }) {
  const topRatedProducts = await new DatabaseService().getTopRatedProducts(count)
  return (
    <ul className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {topRatedProducts.map(product => (
        <li className="mb-4" key={product.id}>
          <ProductCard variant="vertical" product={product} />
        </li>
      ))}
    </ul>
  )
}
