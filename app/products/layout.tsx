import { SideNav } from '@/components/ui'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-screen">
      <SideNav position="left" />
      <div className="flex-1">{children}</div>
      <SideNav position="right" />
    </div>
  )
}
