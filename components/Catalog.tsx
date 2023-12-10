import { Grid, GridItem } from '@/components/common'

import type { Category } from '@/lib/types'
import { DatabaseService } from '@/lib/services'
import { ProductCard } from '@/components/cards'

export const Catalog = async ({
  query,
  currentPage,
  itemsPerPage,
  category,
}: {
  query: string
  currentPage: number
  itemsPerPage: number
  category?: Category['name']
}) => {
  const products = await new DatabaseService().searchProducts(query, currentPage, itemsPerPage, category)
  if (products.length === 0) return <p>No products found</p>
  return (
    <Grid>
      {products.map(product => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  )
}
