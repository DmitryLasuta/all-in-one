export const CategoryCardSkeleton = () => {
  return (
    <div className="w-full bg-[white] rounded">
      <div
        role="status"
        className="animate-pulse w-full h-[clamp(192px,calc(46.98vw-15.126rem),612.66px)] rounded bg-[#c7c7c7]"
      >
        <div className="relative w-full h-full ">
          <div className="absolute z-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base md:text-xl w-1/2 h-5 bg-[#616161]"></div>
        </div>
      </div>
    </div>
  )
}

export const CategoryCardSkeletonGroup = ({ count }: { count: number }) => {
  const skeletons = new Array(count)
    .fill(0)
    .map((_, index) => <CategoryCardSkeleton key={index} />)

  return (
    <div
      role="status"
      className="grid grid-flow-dense grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
    >
      {...skeletons}
    </div>
  )
}
