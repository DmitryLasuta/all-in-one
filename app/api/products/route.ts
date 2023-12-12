import { NextRequest, NextResponse } from 'next/server'

import { DatabaseService } from '@/lib/services'

export const POST = async (request: NextRequest) => {
  const { ids }: { ids?: string[] } = JSON.parse(await request.text())

  if (!ids) {
    return NextResponse.json({ error: 'Missing ids' }, { status: 400 })
  }

  const db = new DatabaseService()
  const products = await Promise.all(ids.map(id => db.getProductById(Number(id))))

  return NextResponse.json(products)
}
