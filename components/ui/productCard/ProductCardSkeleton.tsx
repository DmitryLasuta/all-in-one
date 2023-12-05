import { Grid } from '@/components/ui/common'

export const ProductCardSkeleton = () => {
  return (
    <div className={`bg-primary`}>
      <div
        role="status"
        aria-label="loading products"
        className={`animate-pulse break-inside-avoid flex flex-col
        border-2 bg-[white] h-fit gap-4 lg:gap-8 items-center bg-primary p-4 rounded w-full`}
      >
        {/* image */}
        <div className={`w-[250px] mb-4 object-contain bg-[#c7c7c7] rounded h-[250px]`}></div>
        {/* Add to cart button */}
        <div className="w-full h-[35px] bg-[#616161] rounded"></div>
        {/* Title */}
        <div className="w-full">
          <div className="w-full h-[20px] bg-[#c7c7c7] mb-2 rounded"></div>
          <div className="w-3/4 h-[20px] bg-[#c7c7c7] mb-2 rounded"></div>
          <div className="w-1/2 h-[20px] bg-[#c7c7c7] mb-2 rounded"></div>
        </div>
        {/* Price and Rating */}
        <div className="w-full flex justify-between items-center rounded">
          {/* Price */}
          <div className="w-[100px] h-[30px] bg-[#c7c7c7] rounded"></div>
          {/* Rating */}
          <div className="w-[100px] h-[25px] bg-[#c7c7c7] rounded"></div>
        </div>
      </div>
    </div>
  )
}

export const ProductCardSkeletonGroup = ({ count }: { count: number }) => {
  return (
    <Grid>
      {[...Array(count)].map((_, index) => (
        <li className="mb-4" key={index}>
          <ProductCardSkeleton />
        </li>
      ))}
    </Grid>
  )
}
