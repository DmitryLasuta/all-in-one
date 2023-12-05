import { DatabaseService } from '@/lib/services'
import { Grid } from './common'
import { ProductCard } from '@/components/ui'

export default async function TopRatedProducts({ count = 5 }: { count?: number }) {
  const topRatedProducts = await new DatabaseService().getTopRatedProducts(count)
  return (
    <Grid>
      {topRatedProducts.map(product => (
        <li className="sm:w-[60%] md:w-full sm:mx-auto" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </Grid>
  )
}
