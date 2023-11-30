import { josefinSans } from '@/app/assets/fonts'

interface SpotlightSectionProps {
  children: React.ReactNode
  title: string
}

export const SpotlightSection = ({ children, title }: SpotlightSectionProps) => {
  return (
    <section className="bg-accent py-8 xl:bg-fluid bg-no-repeat bg-fixed">
      <h3 className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}>{title}</h3>
      <div className="container">{children}</div>
    </section>
  )
}
