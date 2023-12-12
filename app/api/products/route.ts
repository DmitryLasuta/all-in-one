import { NextRequest, NextResponse } from 'next/server'

import { DatabaseService } from '@/lib/services'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const db = new DatabaseService()

  return NextResponse.json(
    await db.getAllProducts({
      category: searchParams.get('category') || 'all',
      limit: Number(searchParams.get('limit')) || 10,
      orderByRating: searchParams.get('orderByRating') === 'true' ?? false,
    })
  )
}
