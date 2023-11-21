import { josefinSans } from '@/app/assets/fonts'

export const SpotlightSection = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <section className="bg-accent py-8 xl:bg-fluid bg-no-repeat bg-fixed">
      <h3
        className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}
      >
        {title}
      </h3>
      <div className="container">{children}</div>
    </section>
  )
}

export const Section = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <section className="py-8 relative overflow-hidden">
      <h2
        className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}
      >
        {title}
      </h2>
      <div className="container">{children}</div>
    </section>
  )
}
