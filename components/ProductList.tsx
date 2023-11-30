import type { Category } from '@/lib/types'
import { ColumnGrid } from '@/components/ui/common'
import { DatabaseService } from '@/lib/services'

export const ProductList = async ({ categoryName }: { categoryName?: Category['name'] }) => {
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
