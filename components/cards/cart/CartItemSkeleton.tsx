export const CartItemsSkeleton = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 border-2 rounded max-w-[350px] w-full md:max-w-full p-2 lg:p-4"
      role="status"
      aria-label="Loading cart"
    >
      {/* image */}
      <div className="animate-pulse w-[90%] self-center md:w-2/5 mb-4 md:mb-0 object-contain bg-[#616161] rounded h-[250px]"></div>
      <div className="grid grid-rows-[2fr_auto] flex-1">
        <div className="px-4 py-4 md:px-2 w-full">
          {/* Title */}
          <div className="animate-pulse w-4/5 h-6 mb-4 bg-[#c7c7c7] rounded"></div>
          <div className="animate-pulse w-full h-6 mb-4 bg-[#c7c7c7] rounded"></div>
          {/* Category  */}
          <div className="animate-pulse w-1/2 h-4 bg-[#c7c7c7] rounded mb-2"></div>
          {/* Price */}
          <div className="animate-pulse w-2/3 h-4 bg-[#c7c7c7] rounded mb-2"></div>
        </div>
        {/* Control panel */}
        <div className="rounded border-2 p-2">
          <div className="flex flex-col items-center gap-2 mb-4 lg:flex-row xl:flex-col 2xl:flex-row">
            {/* Quantity */}
            <div className="animate-pulse w-1/2 h-4 bg-[#c7c7c7] rounded"></div>
            <div className="flex items-center gap-2">
              {/* Decrease button  */}
              <div className="animate-pulse w-8 h-8 bg-[#616161] rounded"></div>
              {/* Input */}
              <div className="animate-pulse w-[80px] h-8 bg-[#616161] rounded"></div>
              {/* Increase button */}
              <div className="animate-pulse w-8 h-8 bg-[#616161] rounded"></div>
            </div>
          </div>
          {/* Remove button */}
          <div className="animate-pulse w-full h-8 bg-[#616161] rounded"></div>
        </div>
      </div>
    </div>
  )
}

export const CartItemsSkeletonGroup = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <CartItemsSkeleton key={index} />
      ))}
    </>
  )
}
