import { Category } from '@/lib/types'
import { DatabaseService } from '@/lib/services'
import { Grid } from '@/components/ui/common'
import { ProductCard } from '@/components/ui/'

export const ProductList = async ({
  query,
  currentPage,
  category,
}: {
  query: string
  currentPage: number
  category?: Category['name']
}) => {
  const products = await new DatabaseService().searchProducts(query, currentPage, 12, category)
  return (
    <Grid>
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </Grid>
  )
}
