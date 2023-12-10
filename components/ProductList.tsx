import type { Category, Product } from '@/lib/types'
import { Grid, GridItem } from '@/components/common'

import { DatabaseService } from '@/lib/services'
import { ProductCard } from '@/components/cards'

interface ProductListProps {
  category?: Category['name']
  count?: number
  orderByRating?: boolean
  withoutProduct?: Product
}

export default async function ProductList({ category, count, orderByRating, withoutProduct }: ProductListProps) {
  const productList = await new DatabaseService().getAllProducts({
    category,
    limit: count,
    orderByRating,
    withoutProduct,
  })

  if (productList.length === 0) return <p>No products found</p>
  return (
    <Grid>
      {productList.map(product => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  )
}
