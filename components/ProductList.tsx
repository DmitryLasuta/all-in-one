import { ColumnGrid } from '@/components/ui'
import { DatabaseService } from '@/lib/services'

const storeDB = new DatabaseService()

export const ProductList = async () => {
  return (
    <ColumnGrid>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="mb-4">
          {/* <ProductCardSkeleton variant="vertical" /> */}
        </div>
      ))}
    </ColumnGrid>
  )
}
