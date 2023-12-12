import { Grid, GridItem } from '@/components/common'

import type { Category } from '@/lib/types'
import { searchProducts } from '@/lib/services/dataBase'
import { ProductCard } from '@/components/cards'

interface CatalogProps {
  query: string
  currentPage: number
  itemsPerPage: number
  category?: Category['name']
}
export const Catalog = async ({ query, currentPage, itemsPerPage, category }: CatalogProps) => {
  const products = await searchProducts(query, currentPage, itemsPerPage, category)
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
