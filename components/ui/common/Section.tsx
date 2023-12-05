import { Container } from '@/components/ui/common'
import { josefinSans } from '@/app/assets/fonts'

interface SectionProps {
  children: React.ReactNode
  title: string
  hasBackground?: boolean
}

export const Section = ({ children, title, hasBackground = false }: SectionProps) => {
  return (
    <section className={`py-8 ${hasBackground ? 'bg-fluid bg-no-repeat bg-fixed bg-accent' : 'bg-primary'}`}>
      <Container>
        <h3 className={`${josefinSans.className} uppercase font-bold text-center text-3xl mb-6`}>{title}</h3>
        <div className="container">{children}</div>
      </Container>
    </section>
  )
}
