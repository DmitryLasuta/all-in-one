import { CartItemsSkeletonGroup } from '@/components/cards'

export default function CartPageLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
        <CartItemsSkeletonGroup count={10} />
      </div>
    </div>
  )
}
