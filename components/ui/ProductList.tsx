import type { Category, Product } from '@/lib/types'

import { DatabaseService } from '@/lib/services'
import { Grid } from './common'
import { ProductCard } from '@/components/ui'

export default async function ProductList({
  category,
  count,
  orderByRating,
  withoutProduct,
}: {
  count?: number
  category?: Category['name']
  orderByRating?: boolean
  withoutProduct?: Product
}) {
  const productList = await new DatabaseService().getAllProducts({
    category,
    limit: count,
    orderByRating,
    withoutProduct,
  })
  return (
    <Grid>
      {productList.map(product => (
        <li className="sm:w-[60%] md:w-full sm:mx-auto" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </Grid>
  )
}
