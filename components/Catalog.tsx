import { Category } from '@/lib/types'
import { DatabaseService } from '@/lib/services'
import { Grid } from '@/components/ui/common'
import { ProductCard } from '@/components/ui/'

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
  return (
    <Grid>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map(product => (
          <li className="sm:w-[60%] md:w-full sm:mx-auto" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
      )}
    </Grid>
  )
}
