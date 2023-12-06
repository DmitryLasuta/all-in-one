import { FaSadCry, FaSearch } from 'react-icons/fa'

import React from 'react'

export default function ProductNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 flex flex-col items-center gap-4">
          <div className="text-7xl">
            <FaSadCry />
          </div>
          Product Not Found
        </h1>
        <p className="text-lg">
          Oops! The product you are looking for seems to be missing. It might have been discontinued or never existed.
        </p>
        <div className="mt-4 text-center">
          <div className="text-4xl inline-block">
            <FaSearch />
          </div>
          <p className="text-sm mt-1">Try searching for another product in our store!</p>
        </div>
      </div>
    </div>
  )
}
