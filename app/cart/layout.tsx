import { Metadata } from 'next'
import { OrderControlPanel } from '@/components/controlPanels'

export const metadata: Metadata = {
  title: 'Cart | All In One',
  description:
    'Explore our shopping cart page and enjoy the convenience of managing your purchases! Your virtual cart offers complete control over adding, removing, and editing items. Track the total cost of items, applied discounts, and the final sum of your order, making your shopping experience not only convenient but also transparent. Customize your order before checkout, making purchases on our website easy and enjoyable.',
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-8 container">
      <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center lg:ml-[15%]">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[20%_auto] gap-2">
        <aside className="row-start-2 lg:row-start-auto border-y-2 lg:border-y-0 p-4 lg:p-0  lg:border-b-0 lg:border-r-2 pb-2 lg:min-h-screen">
          <OrderControlPanel />
        </aside>
        <main className="px-2 lg:px-4">{children}</main>
      </div>
    </div>
  )
}
