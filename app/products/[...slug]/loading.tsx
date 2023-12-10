import { ProductCardSkeletonGroup } from '@/components/cards'

const TextSkeleton = () => {
  return (
    <div className="py-4 text-center lg:text-justify">
      <p className="w-full h-6 animate-pulse bg-[#c7c7c7] mb-4 inline-block rounded"></p>
      <p className="w-10/12 h-6 animate-pulse bg-[#c7c7c7] mb-4 inline-block rounded"></p>
      <p className="w-10/12 h-6 animate-pulse bg-[#c7c7c7] mb-4 inline-block rounded"></p>
      <p className="w-1/2 h-6 animate-pulse bg-[#c7c7c7] mb-4 inline-block rounded"></p>
    </div>
  )
}

const TitleSkeleton = () => {
  return (
    <div className="text-center">
      <p className="w-1/2 h-10 animate-pulse bg-[#c7c7c7] mb-4 inline-flex rounded"></p>
    </div>
  )
}

export default function ProductDetailsLoadingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-4 items-center mb-4" role="status" aria-label="loading page elements">
        <div className="animate-pulse bg-[#c7c7c7] w-20 lg:w-40 h-12 rounded"></div>
        <span className="mx-3 inline-block">{'>>'}</span>
        <div className="animate-pulse bg-[#c7c7c7] w-20 lg:w-40 h-12 rounded"></div>
        <span className="mx-3 inline-block">{'>>'}</span>
        <div className="animate-pulse bg-[#c7c7c7] w-20 lg:w-40 h-12 rounded"></div>
      </div>
      {/* Image block */}
      <div role="status" aria-label="loading page elements">
        <div className="mb-8 text-center flex flex-col items-center lg:flex-row md:items-start gap-4 xl:gap-8">
          {/* Image */}
          <div className="animate-pulse bg-[#616161] w-[250px] h-[300px] md:w-[650px] md:h-[500px] rounded"></div>
          {/* Params panel */}
          <div
            className="text-left border-2 flex-1 w-full rounded h-fit px-2 py-4"
            role="status"
            aria-label="loading page elements"
          >
            {['Rating', 'Price', 'In stock'].map((param, index) => (
              <p key={index} className="mb-2 flex items-center gap-2">
                {param}: <span className="animate-pulse inline-block bg-[#c7c7c7] w-12 h-6 rounded"></span>
              </p>
            ))}
            {/* Button */}
            <div className="animate-pulse bg-[#616161] w-full h-9 rounded"></div>
          </div>
        </div>
        {/* About product section */}
        <div className="border-y-2 py-8">
          <div className="lg:max-w-[90%] lg:mx-auto">
            {/* title */}
            <TitleSkeleton />
            {/* Description */}
            <TextSkeleton />
          </div>
        </div>
      </div>
      {/* Good to know */}
      <div className="py-8 border-b-2" role="status" aria-label="loading page elements">
        <TitleSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </div>
      {/* Related products */}
      <div className="py-8" role="status" aria-label="loading page elements">
        <TitleSkeleton />
        <ProductCardSkeletonGroup count={8} />
      </div>
    </>
  )
}
