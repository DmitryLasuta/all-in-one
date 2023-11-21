export const SpotlightSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-accent py-8 xl:bg-fluid bg-no-repeat bg-fixed">
      <div className="container">{children}</div>
    </section>
  )
}

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container">{children}</div>
    </section>
  )
}
