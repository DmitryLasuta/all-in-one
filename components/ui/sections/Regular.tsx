import { josefinSans } from '@/app/assets/fonts'

interface RegularSectionProps {
  children: React.ReactNode
  title: string
}

export const RegularSection = ({ children, title }: RegularSectionProps) => {
  return (
    <section className="py-8 relative overflow-hidden">
      <h2 className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}>{title}</h2>
      <div className="container">{children}</div>
    </section>
  )
}
