import { DatabaseService } from '@/lib/services'
import { NextResponse } from 'next/server'

export const GET = async (_: Request, { params }: { params: { id: string } }) => {
  const db = new DatabaseService()
  const product = db.getProductById(Number(params.id))
  return NextResponse.json(await product)
}
