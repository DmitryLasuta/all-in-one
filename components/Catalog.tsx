import { Grid, GridItem } from '@/components/common'

import type { Category, OrderBy } from '@/lib/types'
import { searchProducts } from '@/lib/services/dataBase'
import { ProductCard } from '@/components/cards'

interface CatalogProps {
  query: string
  currentPage: number
  itemsPerPage: number
  orderby: OrderBy
  category: Category['name']
}
export const Catalog = async (props: CatalogProps) => {
  const products = await searchProducts({ ...props })
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
