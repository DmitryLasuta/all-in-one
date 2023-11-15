interface CategoryCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CategoryCardSkeleton = ({ ...attrs }: CategoryCardSkeletonProps) => {
  return (
    <div {...attrs}>
      <div
        role="status"
        className="animate-pulse h-[clamp(192px,calc(46.98vw-15.126rem),612.66px)] rounded bg-[#c7c7c7]"
      >
        <div className="relative w-full h-full ">
          <div className="absolute z-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base md:text-xl w-1/2 h-5 bg-[#616161]"></div>
        </div>
      </div>
    </div>
  )
}
