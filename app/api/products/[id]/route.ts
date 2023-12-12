import { getProductById } from '@/lib/services/dataBase'
import { NextResponse } from 'next/server'

interface RequestParams {
  params: {
    id: string
  }
}

export const GET = async (_: Request, { params }: RequestParams) => {
  return NextResponse.json(await getProductById(Number(params.id)))
}
