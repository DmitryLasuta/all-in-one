export const ProductCardSkeleton = ({
  variant = 'horizontal',
}: {
  variant?: 'vertical' | 'horizontal'
}) => {
  const getRandomBoolean = (): boolean => Math.random() < 0.5
  return (
    <div className={`bg-primary`}>
      <div
        role="status"
        aria-label="loading products"
        className={`animate-pulse break-inside-avoid flex flex-col ${
          variant === 'horizontal' ? 'lg:flex-row' : ''
        } gap-4 lg:gap-8 items-center ${
          variant === 'horizontal' ? 'lg:items-start' : ''
        }  bg-primary p-4 rounded ${
          variant === 'vertical' ? 'text-center' : ''
        } w-full h-full`}
      >
        {/*  */}
        <div
          className={`w-[250px] mb-4 object-contain bg-[#c7c7c7] rounded ${
            getRandomBoolean() ? 'h-[450px]' : 'h-[300px]'
          }`}
        ></div>
        <div>
          <div className="flex items-center gap-4 justify-between mb-4">
            <div className="w-[80px] h-[20px] bg-[#616161]"></div>
            <div className="bg-[#616161] w-[60px] h-[20px]"></div>
            <div>
              <div className="w-[80px] h-[40px] bg-[#616161]"></div>
            </div>
          </div>
          <div className="w-full h-[20px] bg-[#616161] mb-2"></div>
          <div className="w-3/4 h-[20px] bg-[#616161] mb-2"></div>
          <div className="w-1/2 h-[20px] bg-[#616161] mb-2"></div>
        </div>
      </div>
    </div>
  )
}

export const ProductCardSkeletonGroup = ({
  count,
  skeletonsVariant = 'horizontal',
}: {
  count: number
  skeletonsVariant?: 'vertical' | 'horizontal'
}) => {
  return (
    <ul className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {[...Array(count)].map((_, index) => (
        <li className="mb-4" key={index}>
          <ProductCardSkeleton variant={skeletonsVariant} />
        </li>
      ))}
    </ul>
  )
}
