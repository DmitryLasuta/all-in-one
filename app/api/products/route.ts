import { NextRequest, NextResponse } from 'next/server'

import { getAllProducts } from '@/lib/services/dataBase'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)

  return NextResponse.json(
    await getAllProducts({
      category: searchParams.get('category') || 'all',
      limit: Number(searchParams.get('limit')) || 10,
      orderByRating: searchParams.get('orderByRating') === 'true' ?? false,
    })
  )
}
