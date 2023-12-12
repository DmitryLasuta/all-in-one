import type { Category, Product } from '@/lib/types'
import { Grid, GridItem } from '@/components/common'

import { getAllProducts } from '@/lib/services/dataBase'
import { ProductCard } from '@/components/cards/product/ProductCard'

interface ProductListProps {
  category?: Category['name']
  count?: number
  orderByRating?: boolean
  withoutProduct?: Product
}

export default async function ProductList({ category, count, orderByRating, withoutProduct }: ProductListProps) {
  const productList = await getAllProducts({
    category,
    limit: count,
    orderByRating,
    withoutProduct,
  })

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
