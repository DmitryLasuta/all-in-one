import { CategoryCardSkeletonGroup, ProductCardSkeletonGroup } from '@/components/cards'
import { Container, Section } from '@/components/common'

export default function HomePageLoading() {
  return (
    <div role="status">
      {/* Banner section */}
      <Container>
        <div className="w-full animate-pulse py-16 text-center lg:text-right flex flex-col justify-between lg:flex-row items-center gap-4 lg:gap-10">
          {/* Image */}
          <div className="bg-[#a2a2a2] w-[250px] h-[300px] md:w-[650px] md:h-[500px] rounded"></div>
          <div className="flex-1 w-full">
            {/* Title */}
            <div className="w-full h-10 bg-[#c7c7c7] mb-2 rounded"></div>
            {/* Description */}
            <div className="text-center lg:text-right">
              <div className="inline-block w-9/12 h-6 bg-[#c7c7c7] mb-2 rounded"></div>
              <div className="inline-block w-9/12 h-6 bg-[#c7c7c7] mb-2 rounded"></div>
              <div className="inline-block w-1/2 h-6 bg-[#c7c7c7] mb-2 rounded"></div>
            </div>
          </div>
        </div>
      </Container>
      {/* Our partners brands section */}
      <Section title="Our partners" hasBackground={true}>
        <ul className={`grid grid-cols-3 md:grid-cols-6 justify-items-center items-center gap-4 md:gap-8 xl:gap-12`}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="bg-[#c7c7c7] rounded w-full" key={index}>
              <div className=" animate-pulse h-[100px] bg-[#a2a2a2] rounded"></div>
            </div>
          ))}
        </ul>
      </Section>
      {/* Top rated products */}
      <Section title={`Top Products`}>
        <ProductCardSkeletonGroup count={15} />
      </Section>
      {/* Categories list section */}
      <Section title="Categories" hasBackground={true}>
        <CategoryCardSkeletonGroup count={8} />
      </Section>
      {/* Our advantages */}
      <Section title="Why Choose Our Store?">
        <ul className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[70%] md:max-w-full mx-auto`}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="bg-[#c7c7c7] rounded w-full" key={index}>
              <div className=" animate-pulse h-[300px] bg-[#a2a2a2] rounded"></div>
            </div>
          ))}
        </ul>
      </Section>
    </div>
  )
}
