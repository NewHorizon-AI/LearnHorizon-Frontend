import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json()

    const response = await apiClient.post('/articles/v2', body)

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
